provider "aws" {
  profile = "default"
}

resource "aws_s3_bucket" "ci_cd_artifacts" {
  bucket = "my-cicd-multi-region-deploy" # Ensure this name is globally unique
}

