import { GEMINI_API_KEY } from './api-config.js';
import { LLM_API_URL } from './api-config.js';


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchSummary") {
        fetch(LLM_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ html: request.htmlContent })
        })
        .then(response => response.json())
        .then(data => sendResponse({ summary: data.summary }))
        .catch(error => console.error("API error:", error));

        return true; // Keep the message channel open for async response
    }
});
