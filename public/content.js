/*global chrome*/
const iframeDiv = document.createElement('div');
iframeDiv.id = 'custom-iframe-container';
iframeDiv.style.position = 'fixed';
iframeDiv.style.bottom = '0';
iframeDiv.style.left = '0';
iframeDiv.style.width = '100%';
iframeDiv.style.height = '50px';
iframeDiv.style.backgroundColor = 'rgba(0,0,0,0.5)';
iframeDiv.style.zIndex = '9999';
iframeDiv.style.display = 'flex';
iframeDiv.style.justifyContent = 'center';
iframeDiv.style.alignItems = 'center';
iframeDiv.style.transition = 'height 0.3s';

// const closeButton = document.createElement('button');
// closeButton.textContent = 'X';
// closeButton.style.position = 'absolute';
// closeButton.style.top = '10px';
// closeButton.style.right = '10px';
// closeButton.style.fontSize = '20px';
// closeButton.style.backgroundColor = 'red';
// closeButton.style.color = 'white';
// closeButton.style.border = 'none';
// closeButton.style.borderRadius = '50%';
// closeButton.style.width = '40px';
// closeButton.style.height = '40px';
// closeButton.style.cursor = 'pointer';
// closeButton.addEventListener('click', () => {
//   iframeDiv.remove();
// });

const expandButton = document.createElement('button');
expandButton.textContent = 'Open Chat';
expandButton.style.position = 'absolute';
expandButton.style.bottom = '10px';
expandButton.style.left = '10px';
expandButton.style.fontSize = '16px';
expandButton.style.backgroundColor = 'rgb(55, 201, 152)';
expandButton.style.color = 'white';
expandButton.style.border = 'none';
expandButton.style.borderRadius = '5px';
expandButton.style.width = '100px';
expandButton.style.height = '30px';
expandButton.style.cursor = 'pointer';
expandButton.addEventListener('click', () => {
  iframeDiv.style.height = iframeDiv.style.height === '50px' ? '80%' : '50px';
  expandButton.textContent = iframeDiv.style.height === '50px' ? 'Expand Chat' : 'Collaps Chat';
});

const iframe = document.createElement('iframe');
iframe.src = 'https://app.cig.chat/inbox/f93795u107359087'
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none';
iframe.style.display = 'none';

// iframeDiv.appendChild(closeButton);
iframeDiv.appendChild(expandButton);
iframeDiv.appendChild(iframe);
document.body.appendChild(iframeDiv);

iframeDiv.addEventListener('transitionend', () => {
  iframe.style.display = iframeDiv.style.height === '50px' ? 'none' : 'block';
});
