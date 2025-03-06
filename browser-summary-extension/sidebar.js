document.getElementById("fetch-summary").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: () => document.documentElement.outerHTML
        }, (result) => {
            if (result && result[0]) {
                chrome.runtime.sendMessage({
                    action: "fetchSummary",
                    htmlContent: result[0].result
                }, (response) => {
                    if (response && response.summary) {
                        document.getElementById("summary-container").innerHTML = response.summary;
                    }
                });
            }
        });
    });
});
