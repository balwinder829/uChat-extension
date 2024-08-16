/*global chrome*/

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
  chrome.runtime.sendMessage({ type: 'URL_CHANGE' });
});