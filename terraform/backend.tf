resource "aws_s3_bucket" "terraform_state" {
  bucket        = "monge1h-terraform-state-portfolio-frontend"
  force_destroy = true
}

resource "aws_s3_bucket_versioning" "terraform_state_versioning" {
  bucket = aws_s3_bucket.terraform_state.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "terraform_state_encryption" {
  bucket = aws_s3_bucket.terraform_state.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_dynamodb_table" "statelock" {
  name         = "monge1h-terraform-state-lock-frontend"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }

}


terraform {
  backend "s3" {
    bucket         = "monge1h-terraform-state-portfolio-frontend"
    key            = "global/s3/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "monge1h-terraform-state-lock-frontend"
  }
}