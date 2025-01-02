// 创建上下文菜单
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "convertToPDF",
    title: "Convert to PDF",
    contexts: ["all"]
  });
});

// 监听上下文菜单点击事件
// background.js
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "convertToPDF") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['html2pdf.bundle.min.js', 'content.js']
    });
  }
});