chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action == 'test-functions') {
      const playerElem = getPlayerElement();
      console.log(playerElem);
      const videoElem = getVideoWidth();
      console.log(videoElem);
      const progressVarWidth = getProgressBarWidth();
      console.log(progressVarWidth);
      const timeDuration = getTimeDuration();
      console.log(timeDuration);
      const chatLogURL = getChatLogURL();
      console.log(chatLogURL);

      // const div = document.createElement('div');
      // div.appendChild(document.createTextNode('test'));
      // const element = document.getElementById('player-container-outer').parentElement;
      // element.parentNode.insertBefore(div, element.nextSibling);
    }

    sendResponse({ action: 'no response' });
    return true;
  }
);
