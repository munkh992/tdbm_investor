#!/bin/bash

# TDB Mongolia Investor Relations - GitHub Pages Deployment Script
# This script builds and deploys the application to GitHub Pages

set -e

echo "🏦 TDB Mongolia Investor Relations - Deployment Script"
echo "================================================"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Error: Not in a git repository${NC}"
    echo "Please run this script from the root of your git repository."
    exit 1
fi

# Check if GitHub Pages is configured
echo -e "${BLUE}📋 Checking GitHub Pages configuration...${NC}"

# Get current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo -e "${BLUE}📍 Current branch: ${CURRENT_BRANCH}${NC}"

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  Warning: You have uncommitted changes${NC}"
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${RED}❌ Deployment cancelled${NC}"
        exit 1
    fi
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    npm install
else
    echo -e "${GREEN}✅ Dependencies already installed${NC}"
fi

# Run type checking
echo -e "${BLUE}🔍 Running type checks...${NC}"
npm run type-check
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Type check failed${NC}"
    exit 1
fi

# Build the application
echo -e "${BLUE}🏗️  Building TDB application for production...${NC}"
npm run build:production
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

# Check if gh-pages branch exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo -e "${BLUE}📄 gh-pages branch exists${NC}"
else
    echo -e "${YELLOW}📄 Creating gh-pages branch...${NC}"
    git checkout --orphan gh-pages
    git rm -rf .
    git commit --allow-empty -m "Initial gh-pages commit"
    git checkout $CURRENT_BRANCH
fi

# Deploy to GitHub Pages
echo -e "${BLUE}🚀 Deploying to GitHub Pages...${NC}"
npm run deploy
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Deployment failed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo -e "${BLUE}🌐 Your TDB Investor Relations site will be available at:${NC}"
echo -e "${GREEN}   https://yourusername.github.io/tdb-investor-relations/${NC}"
echo ""
echo -e "${YELLOW}📝 Note: It may take a few minutes for GitHub Pages to update${NC}"
echo -e "${BLUE}💡 Tip: Update the repository name in package.json and vite.config.ts${NC}"
echo ""
echo -e "${GREEN}🏦 TDB Mongolia deployment complete! 🎉${NC}"