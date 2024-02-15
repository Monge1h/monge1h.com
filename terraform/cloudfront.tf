data "aws_cloudfront_origin_request_policy" "managed_cors_s3_origin" {
	name = "Managed-CORS-CustomOrigin"
}

data "aws_cloudfront_cache_policy" "managed_caching_optimized_uncompressed" {
	name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "distribution" {
	enabled         = true
	is_ipv6_enabled = true
	comment         = "monge1h-website"

	default_cache_behavior {
		allowed_methods  = ["GET", "HEAD", "OPTIONS"]
		cached_methods   = ["GET", "HEAD", "OPTIONS"]
		target_origin_id = "website-bucket"

		viewer_protocol_policy = "redirect-to-https"
		compress               = true

		origin_request_policy_id = data.aws_cloudfront_origin_request_policy.managed_cors_s3_origin.id
		cache_policy_id          = data.aws_cloudfront_cache_policy.managed_caching_optimized_uncompressed.id
	}

	origin {
		domain_name = aws_s3_bucket_website_configuration.website_bucket.website_endpoint
		origin_id   = "website-bucket"

		custom_origin_config {
			http_port              = "80"
			https_port             = "443"
			origin_protocol_policy = "http-only"
			origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
		}
	}

	viewer_certificate {
		cloudfront_default_certificate = true
	}

	restrictions {
		geo_restriction {
			restriction_type = "none"
		}
	}
}