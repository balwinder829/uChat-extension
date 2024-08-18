/*global chrome*/

chrome.runtime.onInstalled.addListener(() => {
  chrome?.declarativeContent?.onPageChanged.removeRules(undefined, function() {
    chrome?.declarativeContent?.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'app.fireberry.com' },
        })
      ],
      actions: [new chrome.declarativeContent.ShowAction()]
    }]);
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'LOGIN_SUBMIT') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab) {
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          files: ['content.js']
        }, () => {
          chrome.tabs.sendMessage(activeTab.id, { type: 'EXECUTE_FUNCTION' });
        });
      } else {
        console.log('');
      }
    });
  }
});