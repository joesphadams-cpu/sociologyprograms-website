# GitHub + Cloudflare Pages Setup Guide

## Complete Step-by-Step Process (30-45 minutes total)

### Part 1: Create GitHub Account & Upload Website (15 minutes)

#### Step 1: Create GitHub Account
1. Go to **github.com**
2. Click "Sign up" 
3. Choose username (suggestion: sociologyprograms or your name)
4. Use your professional email
5. Complete verification

#### Step 2: Create Repository
1. Click **"New repository"** (green button)
2. Repository name: `sociologyprograms-website`
3. Description: `SociologyPrograms.com - University program directory and advertising platform`
4. Set to **Public** (required for free Cloudflare Pages)
5. Check **"Add a README file"**
6. Click **"Create repository"**

#### Step 3: Upload Your Website Files
**Method A: Web Upload (Easiest)**
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop ALL files from your `sociologyprograms-website` folder:
   - index.html
   - programs.html
   - school-profile.html
   - career-guide.html
   - advertise.html
   - styles.css
   - script.js
   - sitemap.xml
   - robots.txt
3. Scroll down, add commit message: "Initial website upload"
4. Click **"Commit changes"**

**Method B: GitHub Desktop (Recommended for future updates)**
1. Download GitHub Desktop from desktop.github.com
2. Clone your repository to your computer
3. Copy all files to the cloned folder
4. Commit and push changes

### Part 2: Deploy to Cloudflare Pages (10 minutes)

#### Step 1: Create Cloudflare Account
1. Go to **pages.cloudflare.com**
2. Click **"Sign up"** 
3. Use same email as GitHub
4. Verify email address

#### Step 2: Connect GitHub
1. Click **"Create a project"**
2. Select **"Connect to Git"**
3. Choose **"GitHub"**
4. Authorize Cloudflare to access your GitHub
5. Select your `sociologyprograms-website` repository
6. Click **"Begin setup"**

#### Step 3: Configure Build Settings
1. **Project name:** `sociologyprograms`
2. **Production branch:** `main` (default)
3. **Build settings:** Leave empty (we have a static site)
4. **Build output directory:** Leave empty
5. Click **"Save and Deploy"**

#### Step 4: Wait for Deployment
- First deployment takes 2-5 minutes
- You'll get a temporary URL like: `sociologyprograms.pages.dev`
- Test this URL to make sure everything works

### Part 3: Connect Your Custom Domain (15 minutes)

#### Step 1: Add Custom Domain in Cloudflare
1. In your Cloudflare Pages project, click **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter: `sociologyprograms.com`
4. Also add: `www.sociologyprograms.com`
5. Cloudflare will provide DNS records

#### Step 2: Update DNS in GoDaddy
1. Log into your **GoDaddy account**
2. Go to **"My Products"** → **"Domains"** → **"Manage"**
3. Find `sociologyprograms.com` and click **"DNS"**
4. **Delete existing records** (A, AAAA, CNAME for @ and www)
5. **Add new records** (Cloudflare will show you exactly what to add):

**Records to Add:**
```
Type: A
Name: @
Value: [IP provided by Cloudflare]
TTL: 600

Type: A  
Name: www
Value: [IP provided by Cloudflare]
TTL: 600

Type: CNAME
Name: www
Value: sociologyprograms.pages.dev
TTL: 600
```

#### Step 3: Wait for DNS Propagation
- Takes 15 minutes to 24 hours
- Test with: https://sociologyprograms.com
- Cloudflare automatically provides SSL certificate

## Part 4: Post-Deployment Setup (10 minutes)

### Configure Analytics
1. **Google Analytics:**
   - Create account at analytics.google.com
   - Get tracking ID
   - Add tracking code to all HTML files

2. **Cloudflare Analytics:**
   - Built-in analytics available in Cloudflare dashboard
   - Shows traffic, performance, security metrics

### Update Contact Information
1. Edit files in GitHub
2. Update placeholder emails/phones
3. Commit changes
4. Site auto-deploys in 1-2 minutes

## Part 5: Configure Email (Optional - 10 minutes)

Since you won't have hosting email, set up professional email:

### Option 1: Google Workspace ($6/month)
1. Go to workspace.google.com
2. Set up with your domain
3. Get professional emails like info@sociologyprograms.com

### Option 2: Microsoft 365 ($5/month)
1. Similar setup through Microsoft
2. Professional email + Office apps

### Option 3: Free Alternatives
1. **Zoho Mail:** Free for up to 5 users
2. **ProtonMail:** Privacy-focused
3. **Forward to Gmail:** Set up email forwarding in GoDaddy

## Benefits of This Setup

### Performance Benefits
✅ **Global CDN:** Site loads fast worldwide
✅ **99.9% Uptime:** Enterprise-level reliability  
✅ **Auto-SSL:** Free HTTPS certificate
✅ **DDoS Protection:** Built-in security

### Cost Benefits
✅ **$0/month hosting:** Completely free
✅ **Unlimited bandwidth:** No traffic limits
✅ **Unlimited builds:** Deploy as often as needed

### Developer Benefits
✅ **Version control:** Track all changes
✅ **Auto-deployment:** Push to GitHub = instant updates
✅ **Rollback capability:** Easily revert changes
✅ **Team collaboration:** Multiple people can contribute

## Making Updates Going Forward

### Quick Updates (Web Interface)
1. Go to your GitHub repository
2. Click on file to edit (e.g., index.html)
3. Click pencil icon to edit
4. Make changes
5. Commit changes
6. Site updates automatically in 1-2 minutes

### Bulk Updates (GitHub Desktop)
1. Clone repository to computer
2. Make changes locally
3. Commit and push
4. Auto-deploys to live site

## Troubleshooting

### Common Issues:
- **Site not loading:** Check DNS settings, wait 24 hours
- **Updates not showing:** Check GitHub commits, wait 2-3 minutes
- **SSL errors:** Cloudflare handles this automatically
- **Custom domain not working:** Double-check DNS records in GoDaddy

### Support Resources:
- **Cloudflare Docs:** developers.cloudflare.com/pages
- **GitHub Help:** docs.github.com
- **Community:** GitHub and Cloudflare have excellent communities

## Cost Comparison

### Cloudflare Pages (Recommended)
- **Hosting:** FREE
- **Email:** $5-6/month (Google Workspace)
- **Total:** $5-6/month

### GoDaddy Hosting Alternative
- **Hosting:** $8-12/month
- **Email:** Included
- **Total:** $8-12/month

**Savings:** $36-72/year + better performance!

## Security & Backup

### Automatic Backups
- GitHub stores all versions of your site
- Cloudflare has redundant copies
- No manual backup needed

### Security
- Cloudflare provides DDoS protection
- Automatic security updates
- SSL/TLS encryption included

## Next Steps After Setup

1. **Test thoroughly:** Check all pages and forms
2. **Add Google Analytics:** Track visitor behavior  
3. **Submit to search engines:** Google Search Console
4. **Set up monitoring:** Get alerts if site goes down
5. **Plan content updates:** Regular blog posts for SEO

This setup gives you enterprise-level hosting for free while maintaining complete control over your site!
