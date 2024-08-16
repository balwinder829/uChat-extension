/*global chrome*/
/*global navigation*/

console.log(' in content file')
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message,'232323333333333')
    if (message.type === 'EXECUTE_FUNCTION') {
      injectIframeOverlay();
    //   console.log(' accordian work')
    }
  });

  function handleRowClick() {
    chrome.runtime.sendMessage({ type: 'ROW_CLICKED' });
  }

  console.log('1111111')
  
  // Add event listener to each table row
  document.querySelectorAll('table tr').forEach(row => {
    console.log('2121212122')
    row.addEventListener('click', handleRowClick);
  });

navigation.addEventListener("navigate", e => {
  console.log(e.destination.url, "b   ");
  chrome.runtime.sendMessage({ type: 'URL_CHANGE' }, (response) => {
    injectIframeOverlay();
  });
});
  
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     console.log(message,'messagemessage33222')
//     if (message.type === 'URL_CHANGED') {
//     //   reloadAccordion();
//     console.log('12121212121212')
//       chrome.runtime.sendMessage({ type: 'LOGIN_SUBMIT' });
//     }
//   });
  

function injectIframeOverlay() {
    const iframeDiv = document.createElement('div');
  iframeDiv.id = 'custom-iframe-container';
  iframeDiv.style.position = 'fixed';
  iframeDiv.style.bottom = '3px';
  iframeDiv.style.left = '5px';
  iframeDiv.style.width = '60px';
  iframeDiv.style.height = '60px';
  iframeDiv.style.backgroundColor = 'transparent';
  iframeDiv.style.zIndex = '9999';
  iframeDiv.style.display = 'flex';
  iframeDiv.style.justifyContent = 'center';
  iframeDiv.style.alignItems = 'center';
  iframeDiv.style.transition = 'height 0.3s, width 0.3s';
  iframeDiv.style.borderRadius='50%'
  
  const expandButton = document.createElement('button');
  const svgIcon = `
  <svg enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" fill="rgb(42, 56, 71)" r="32"/><path d="m52 32c0-9.9-9-18-20-18s-20 8.1-20 18c0 9.6 8.3 17.4 18.8 17.9.7 3.7 1.2 6.1 1.2 6.1s5-3 9.6-8.2c6.2-3.1 10.4-9 10.4-15.8z" fill="#231f20" opacity=".2"/><path d="m49 28.8c0 15-17 25.2-17 25.2s-9.4-42 0-42 17 7.5 17 16.8z" fill="#fff"/><ellipse cx="32" cy="30" fill="#fff" rx="20" ry="18"/><g fill="#4f5d73"><circle cx="32" cy="30" r="2"/><circle cx="40" cy="30" r="2"/><circle cx="24" cy="30" r="2"/></g></svg>
  `;
  
  expandButton.innerHTML = svgIcon;
  expandButton.style.position = 'absolute';
  expandButton.style.bottom = '5px';
  expandButton.style.left = '5px';
  expandButton.style.width = '60px';
  expandButton.style.height = '60px';
  expandButton.style.backgroundColor = 'transparent';
  expandButton.style.border = 'none';
  expandButton.style.cursor = 'pointer';
  expandButton.style.display = 'flex';
  expandButton.style.alignItems = 'center';
  expandButton.style.justifyContent = 'center';
  
  expandButton.addEventListener('click', () => {
    if (iframeDiv.style.height === '80%') {
      iframeDiv.style.height = '45px';
      iframeDiv.style.width = '119px';
      iframe.style.display = 'none';
    } else {
      iframeDiv.style.height = '80%';
      iframeDiv.style.width = '40%';
      iframe.style.display = 'block';
    }
  });
  const targetElements = document.querySelectorAll('.sc-gzVnrw.fdeNtr');
  let value = '';
  
  let targetIndex;
  if (targetElements.length >= 14) {
    targetIndex = 13; 
  } else if (targetElements.length >= 10) {
    targetIndex = 9; 
  } else if (targetElements.length >= 9) {
    targetIndex = 8; 
  } else if (targetElements.length >= 8) {
    targetIndex = 7; 
  }else if (targetElements.length >= 7) {
    targetIndex = 6;
  } else {
    targetIndex = 0;
  }
  
  if (targetElements.length > targetIndex) {
    const targetElement = targetElements[targetIndex];
  
    const fontTags = targetElement.querySelectorAll('font');
  
    if (fontTags.length > 1) {
      value = fontTags[1].innerText; 
    } else if (fontTags.length > 0) {
      value = fontTags[0].innerText; 
    } else {
      value = targetElement.innerText; 
    }
  } else {
    console.log('');
  }
  const iframe = document.createElement('iframe');
  console.log(value,'valuevaluevalue')
  iframe.src = value ? `https://app.cig.chat/inbox/${value}` : 'https://app.cig.chat/';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.display = 'none';
  
  iframeDiv.appendChild(expandButton);
  iframeDiv.appendChild(iframe);
  document.body.appendChild(iframeDiv);
  iframeDiv.addEventListener('transitionend', () => {
    iframe.style.display = iframeDiv.style.height === '45px' ? 'none' : 'block';
  });
  }