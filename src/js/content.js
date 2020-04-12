chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action == 'test-functions') {
      // get initial parameters from a video page
      const playerElem = getPlayerElement();
      const videoWidth = getVideoWidth();
      const progressVarWidth = getProgressBarWidth();
      const timeDurationMsec = getTimeDuration() * 1000;
      let chatLogURL = getChatLogURL();
      const bufNum = 61;

      // generate a chart element below a video player
      const chartDivGenerator = new ChatLineChart(
        'chat_line_graph',
        videoWidth,
        '120px',
        progressVarWidth,
        timeDurationMsec,
        bufNum
      );
      playerElem.appendChild(chartDivGenerator.getBaseDiv());

      // draw an initial chart
      const chart = chartDivGenerator.drawChart();

      (async () => {
        try {
          chatLogURL = await getChatURLOnVideoStart(chatLogURL);
          const bufDurationMsec = Math.floor(timeDurationMsec / bufNum);
          await tmpfunc(chatLogURL, bufDurationMsec, bufNum, chart);
        } catch (e) {
          console.log(e.message);
        }
      })();
    }

    sendResponse({ action: 'no response' });
    return true;
  }
);
