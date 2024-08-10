/*global chrome*/
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === 'injectIframe') {
    console.log(sender,'messagemessagemessage')
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      files: ['content.js']
    });
  } else if (message.action === 'removeIframe') {
    console.log(message,'sendersendersender',sender)
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      function: removeIframe
    });
  }
});

function removeIframe() {
  const iframeDiv = document.getElementById('custom-iframe-container');
  if (iframeDiv) {
    iframeDiv.remove();
  }
}
