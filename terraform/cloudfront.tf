
variable "custom_domain" {
  description = "The custom domain to use for the CloudFront distribution"
  type        = string
  default     = "monge1h.com"
}

variable "www_custom_domain" {
  description = "The custom domain to use for the CloudFront distribution"
  type        = string
  default     = "www.monge1h.com"
}

variable "custom_domain_zone_name" {
  description = "The Route 53 zone name for the custom domain"
  type        = string
  default     = "monge1h.com"
}


resource "aws_acm_certificate" "custom_domain" {
  domain_name       = "*.${var.custom_domain}"
  validation_method = "EMAIL"

  subject_alternative_names = ["${var.custom_domain}"]

  tags = {
    Name = "monge1h-website"
  }
}


# I create this host zone manually in the AWS console before :( 
data "aws_route53_zone" "custom_domain_zone" {
  name = var.custom_domain_zone_name
}

resource "aws_route53_record" "cloudfront_distribution_root" {
  zone_id = data.aws_route53_zone.custom_domain_zone.zone_id
  name    = var.custom_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.distribution.domain_name
    zone_id                = aws_cloudfront_distribution.distribution.hosted_zone_id
    evaluate_target_health = false
  }
}


# www subdomain
resource "aws_route53_record" "cloudfront_distribution" {
  zone_id = data.aws_route53_zone.custom_domain_zone.zone_id
  name    = var.www_custom_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.distribution.domain_name
    zone_id                = aws_cloudfront_distribution.distribution.hosted_zone_id
    evaluate_target_health = false
  }
}


data "aws_cloudfront_origin_request_policy" "managed_cors_s3_origin" {
  name = "Managed-CORS-CustomOrigin"
}

data "aws_cloudfront_cache_policy" "managed_caching_optimized_uncompressed" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "distribution" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  comment             = "monge1h-website"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = "website-bucket"

    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    min_ttl     = 0
    default_ttl = 86400
    max_ttl     = 31536000

    origin_request_policy_id = data.aws_cloudfront_origin_request_policy.managed_cors_s3_origin.id
    cache_policy_id          = data.aws_cloudfront_cache_policy.managed_caching_optimized_uncompressed.id
  }

  aliases = ["monge1h.com","www.monge1h.com"]

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }
    custom_error_response {
    error_code         = 403
    response_page_path = "/index.html"
    response_code      = 200
    error_caching_min_ttl = 300
  }

  logging_config {
    bucket          = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    include_cookies = false
    prefix          = "cloudfront-logs"
  }

  origin {
    domain_name = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    origin_id   = "website-bucket"

    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }


  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.custom_domain.arn
    ssl_support_method  = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}