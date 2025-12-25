# Deployment Guide

## Quick Start (5 minutes)

### 1. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Expert Bridge landing page"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/expert-bridge.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Select your `expert-bridge` repository
5. Click **"Deploy site"**

That's it! Your site will be live at `random-name-123.netlify.app`

### 3. Configure Environment Variables

1. In Netlify dashboard, go to **Site settings** → **Environment variables**
2. Add these variables:

```
SLACK_WEBHOOK_URL = https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### 4. Get Slack Webhook URL

1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Click **"Create New App"** → **"From scratch"**
3. Name: "Expert Bridge Leads"
4. Select your workspace
5. Go to **"Incoming Webhooks"** → Toggle **ON**
6. Click **"Add New Webhook to Workspace"**
7. Select channel (e.g., `#sales-leads`)
8. Copy the webhook URL
9. Paste into Netlify environment variables

### 5. Test the Form

1. Visit your Netlify site URL
2. Fill out the contact form
3. Submit
4. Check your Slack channel for the notification

## Custom Domain Setup

### Option A: Use Netlify Subdomain (Free)

1. In Netlify dashboard: **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change to: `expertbridge.netlify.app`

### Option B: Use Custom Domain

1. Buy domain (e.g., `expertbridge.tech` from Namecheap, Google Domains)
2. In Netlify: **Domain management** → **"Add custom domain"**
3. Enter your domain: `expertbridge.tech`
4. Follow DNS configuration instructions
5. Netlify provides free SSL certificate automatically

**DNS Records to add:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

## Local Development

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Run local dev server with functions
netlify dev

# Open browser to http://localhost:8888
```

## Continuous Deployment

Every time you push to GitHub, Netlify automatically:
1. Detects the push
2. Rebuilds the site (instant for static HTML)
3. Deploys to production
4. Updates your live site

## Monitoring

### Check Form Submissions
- Slack channel: Real-time notifications
- Netlify dashboard: **Forms** tab (if using Netlify Forms)

### Check Site Analytics
- Netlify dashboard: **Analytics** tab
- Or add Google Analytics to `index.html`

## Troubleshooting

### Form not sending to Slack
1. Check Netlify function logs: **Functions** tab → `submit-lead`
2. Verify `SLACK_WEBHOOK_URL` is set correctly
3. Test webhook directly: `curl -X POST -H 'Content-Type: application/json' -d '{"text":"Test"}' YOUR_WEBHOOK_URL`

### Site not updating
1. Check Netlify deploy logs: **Deploys** tab
2. Verify GitHub push was successful
3. Trigger manual deploy: **Deploys** → **"Trigger deploy"**

### 404 errors
1. Check `netlify.toml` redirects are configured
2. Verify `index.html` exists in root directory

## Next Steps

1. **Add Google Analytics**
   - Get tracking ID from analytics.google.com
   - Add to `<head>` in `index.html`

2. **Set up email notifications**
   - Use SendGrid or Mailgun
   - Create Netlify function to send emails

3. **Add Calendly integration**
   - Replace form with Calendly embed
   - Or use Google Calendar API

4. **Enable HTTPS** (automatic with Netlify)
   - Already enabled by default
   - Free SSL certificate included

## Cost Breakdown

- **Netlify Hosting:** Free (100GB bandwidth, 125K function requests/month)
- **Domain:** $10-15/year (optional)
- **Slack:** Free
- **Total:** $0-15/year

## Support

- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Slack API Docs: [api.slack.com](https://api.slack.com)
- Issues: Create issue in GitHub repo
