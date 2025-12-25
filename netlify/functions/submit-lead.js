// Netlify Function to handle form submissions and send to Slack
exports.handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        const { name, email, company, need } = JSON.parse(event.body);

        // Validate required fields
        if (!name || !email || !company || !need) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields' })
            };
        }

        // Get Slack webhook URL from environment variables
        const slackWebhook = process.env.SLACK_WEBHOOK_URL;

        if (!slackWebhook) {
            console.error('SLACK_WEBHOOK_URL not configured');
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Server configuration error' })
            };
        }

        // Format need type for display
        const needTypes = {
            'staff-aug': 'Staff Augmentation (1-5 engineers)',
            'managed-project': 'Managed Project ($50K-$200K)',
            'due-diligence': 'Technical Due Diligence',
            'not-sure': 'Not sure yet'
        };

        const needDisplay = needTypes[need] || need;

        // Create Slack message with rich formatting
        const slackMessage = {
            text: `🚀 New Lead: ${name} from ${company}`,
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "🚀 New Lead Submission",
                        emoji: true
                    }
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Name:*\n${name}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Email:*\n${email}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Company:*\n${company}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Need:*\n${needDisplay}`
                        }
                    ]
                },
                {
                    type: "context",
                    elements: [
                        {
                            type: "mrkdwn",
                            text: `📅 Submitted: ${new Date().toLocaleString('en-US', { 
                                timeZone: 'America/New_York',
                                dateStyle: 'medium',
                                timeStyle: 'short'
                            })} ET`
                        }
                    ]
                },
                {
                    type: "actions",
                    elements: [
                        {
                            type: "button",
                            text: {
                                type: "plain_text",
                                text: "📧 Send Email",
                                emoji: true
                            },
                            url: `mailto:${email}?subject=Expert Bridge - Discovery Call&body=Hi ${name},%0D%0A%0D%0AThank you for your interest in The Expert Bridge!`
                        }
                    ]
                }
            ]
        };

        // Send to Slack
        const response = await fetch(slackWebhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(slackMessage)
        });

        if (!response.ok) {
            throw new Error(`Slack API error: ${response.status}`);
        }

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                success: true,
                message: 'Lead submitted successfully'
            })
        };

    } catch (error) {
        console.error('Error processing lead:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                error: 'Failed to submit lead',
                details: error.message
            })
        };
    }
};
