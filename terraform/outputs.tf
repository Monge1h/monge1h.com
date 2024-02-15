
output "website_bucket_id" {
  value = aws_s3_bucket.website_bucket.id
}

output "domain" {
  value = aws_cloudfront_distribution.distribution.domain_name
}