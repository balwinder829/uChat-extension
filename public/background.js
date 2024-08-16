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
        console.log('Active Tab ID:', activeTab.id);
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          files: ['content.js']
        }, () => {
          chrome.tabs.sendMessage(activeTab.id, { type: 'EXECUTE_FUNCTION' });
        });
      } else {
        console.log('No active tab found');
      }
    });
  }
});
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [
//         new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: { hostEquals: 'app.fireberry.com' },
//         })
//       ],
//       actions: [new chrome.declarativeContent.ShowAction()]
//     }]);
//   });
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === 'LOGIN_SUBMIT') {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       const activeTab = tabs[0];
//       const activeTabUrl = activeTab.url;
//       const allowedUrls = [ "https://app.fireberry.com/"];
//       if (allowedUrls.some(url => activeTabUrl.startsWith(url))) {
//         chrome.tabs.sendMessage(activeTab.id, { type: 'EXECUTE_FUNCTION' });

//       // chrome.scripting.executeScript({
//       //   target: { tabId: tabs[0].id },
//       //   // function: injectIframeOverlay
//       //   files:['content.js']
//       // });
//     }
//     });
//   }
// });


// chrome.webNavigation.onCompleted.addListener(function(details) {
//   console.log('URL Changed:', details.url);
//   chrome.tabs.sendMessage(details.tabId, { type: 'URL_CHANGED' }, (response) => {
//     if (chrome.runtime.lastError) {
//       console.error('Message error:', chrome.runtime.lastError.message);
//     } else {
//       console.log('Message sent successfully');
//     }
//   });
// }, { url: [{ urlMatches: typeof window !== "undefined" ? window.location.href : ''
   
// }] });

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   console.log(changeInfo,'changeInfochangeInfo',tab)
//   if (changeInfo.url) {
//     // Send a message to the content script when the URL changes
//     chrome.tabs.sendMessage(tabId, { type: 'URL_CHANGED' });
//   }
// });

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   // if (changeInfo.url && tab.url.includes('app.fireberry.com')) {
//   console.log(tabId,tab,'tabtabtabtabtab')
//     // Send a message to the content script when the URL changes
//   //   chrome.tabs.sendMessage(tabId, { type: 'URL_CHANGED' }, (response) => {
//   //     if (chrome.runtime.lastError) {
//   //       console.error('Message error:', chrome.runtime.lastError.message);
//   //     }
//   //   });
//   // }
// });


