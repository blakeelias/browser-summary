function toggleSidebar() {
    let sidebar = document.getElementById("content-summary-sidebar");
    if (sidebar) {
        sidebar.remove();
    } else {
        sidebar = document.createElement("iframe");
        sidebar.id = "content-summary-sidebar";
        sidebar.src = chrome.runtime.getURL("sidebar.html");
        sidebar.style = "position:fixed; top:0; right:0; width:300px; height:100%; border:none; z-index:10000; background:white;";
        document.body.appendChild(sidebar);
    }
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "toggleSidebar") {
        toggleSidebar();
    }
});
