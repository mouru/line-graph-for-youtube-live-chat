chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action == 'test-functions') {
      const playerElem = getPlayerElement();
      console.log(playerElem);
      const videoWidth = getVideoWidth();
      console.log(videoWidth);
      const progressVarWidth = getProgressBarWidth();
      console.log(progressVarWidth);
      const timeDuration = getTimeDuration();
      console.log(timeDuration);
      const chatLogURL = getChatLogURL();
      console.log(chatLogURL);

      const testChart = new ChatLineChart('chat_line_graph', videoWidth, '120px', progressVarWidth, timeDuration, 60);
      playerElem.appendChild(testChart.getBaseDiv());
      const chart = testChart.drawChart();
      console.log(chart);

      // const div = document.createElement('div');
      // div.appendChild(document.createTextNode('test'));
      // const element = document.getElementById('player-container-outer').parentElement;
      // element.parentNode.insertBefore(div, element.nextSibling);
    }

    sendResponse({ action: 'no response' });
    return true;
  }
);
