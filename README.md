# The Expert Bridge

Pre-vetted, elite Full-Stack and Cloud engineers from the world's fastest-growing tech hubs. Deployment-ready talent in under 48 hours.

## 🚀 Features

- **Rigorous 4-Stage Vetting Process** - Only top 3% of applicants join our bench
- **48-Hour Placement Cycle** - From request to deployment
- **Transparent Quality Records** - Every engineer comes with a Verifiable Test Record
- **Flexible Engagement Models** - Staff augmentation, managed projects, or technical due diligence

## 🛠 Tech Stack

- Static HTML/CSS/JavaScript
- Netlify Functions (serverless backend)
- Slack Integration (lead notifications)
- Google Calendar Integration (discovery call scheduling)

## 📦 Deployment

### Deploy to Netlify (Recommended)

1. Fork this repository
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select this repository
5. Deploy (automatic)

### Environment Variables

Add these in Netlify dashboard (Site settings → Environment variables):

```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
GOOGLE_CALENDAR_API_KEY=your_api_key_here
```

### Local Development

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Run locally
netlify dev
```

## 📄 Project Structure

```
.
├── index.html                          # Landing page
├── netlify.toml                        # Netlify configuration
├── netlify/
│   └── functions/
│       ├── submit-lead.js              # Form submission handler
│       └── schedule-call.js            # Calendar integration
├── package.json                        # NPM configuration
├── DEPLOYMENT.md                       # Deployment guide
└── README.md                           # This file
```

## 🎯 Services

- **Staff Augmentation** - Integrate senior engineers into your Agile sprints
- **Managed Projects** - End-to-end technical execution ($50K-$200K)
- **Technical Due Diligence** - Pre-acquisition code audits for investors

## 📊 Key Metrics

- **3%** acceptance rate (top talent only)
- **85/100** minimum vetting score
- **90%+** client retention rate
- **48 hours** average time-to-placement

## 📞 Contact

- **Sales:** sales@expertbridge.tech
- **Talent:** talent@expertbridge.tech
- **Website:** [expertbridge.tech](https://expertbridge.tech)

## 📝 License

© 2025 The Expert Bridge. All rights reserved.
