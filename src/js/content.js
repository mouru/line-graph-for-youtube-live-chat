chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.text == 'code-block') {
      const div = document.createElement('div');
      div.appendChild(document.createTextNode('test'));

      const element = document.getElementById('player-container-outer').parentElement;
      element.parentNode.insertBefore(div, element.nextSibling);

      sendResponse({ text: 'insertContent' });
    }
  }
)
