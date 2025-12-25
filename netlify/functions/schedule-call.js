// Netlify Function to create Google Calendar events
// Note: This is a placeholder. Full implementation requires Google Calendar API setup.

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        const { name, email, preferredDate, preferredTime } = JSON.parse(event.body);

        // TODO: Implement Google Calendar API integration
        // For now, return a Calendly-style link or manual scheduling message

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                success: true,
                message: 'Calendar integration coming soon',
                // Temporary: Use Calendly or similar
                schedulingLink: 'https://calendly.com/expertbridge/discovery-call'
            })
        };

    } catch (error) {
        console.error('Error scheduling call:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Failed to schedule call',
                details: error.message
            })
        };
    }
};
