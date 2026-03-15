#!/bin/bash

# Precitec Deployment Script
# Deploys to S3 bucket: precitec.co.in

set -e  # Exit on error

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node 20
nvm use 20

# Read AWS credentials from file
CREDS_FILE="/Users/adithya/Desktop/craftloom/github-user-action-access.txt"

if [ ! -f "$CREDS_FILE" ]; then
  echo "❌ Error: Credentials file not found at $CREDS_FILE"
  exit 1
fi

# Export AWS credentials for this script only
export AWS_ACCESS_KEY_ID=$(grep "^access-key=" "$CREDS_FILE" | cut -d'=' -f2 | tr -d '[:space:]')
export AWS_SECRET_ACCESS_KEY=$(grep "^secret-access-key=" "$CREDS_FILE" | cut -d'=' -f2 | tr -d '[:space:]')

BUCKET_NAME="precitec.co.in"
REGION="ap-southeast-1"  # Singapore region (adjust if your bucket is in a different region)

echo "🚀 Starting deployment to S3..."
echo ""

# Step 1: Build the project
echo "📦 Building project..."
npm run build

if [ ! -d "dist" ]; then
  echo "❌ Error: dist folder not found. Build failed?"
  exit 1
fi

echo "✅ Build complete!"
echo ""

# Step 2: Deploy to S3
echo "☁️  Uploading to S3 bucket: $BUCKET_NAME..."

# Upload all files with long cache (1 year) except index.html
aws s3 sync dist/ s3://$BUCKET_NAME/ \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "index.html" \
  --exclude "videos/*"

# Upload index.html with no cache
aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html \
  --cache-control "no-cache, no-store, must-revalidate"

echo "✅ Upload complete!"
echo ""

# Step 3: Show website URL
echo "🌐 Your website is live at:"
echo "   http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo ""
echo "⚠️  Next steps:"
echo "   1. Set up CloudFront distribution for HTTPS and better performance"
echo "   2. Configure custom domain in CloudFront"
echo "   3. Update DNS to point to CloudFront distribution"
echo ""
echo "✨ Deployment successful! ✨"
