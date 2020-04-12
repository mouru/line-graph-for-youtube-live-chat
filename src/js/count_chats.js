/**
 * Returns a chat log URL.
 *
 * @param {Array} chatActions Time duration of a video.
 * @param {number} curBuf
 * @param {number} bufDurationMsec
 * @param {number} bufNum
 * @returns {Array} A URL to get chat logs.
 * @returns {number} A URL to get chat logs.
 */
function countChats(chatActions, countPerBuf, curBuf, bufDurationMsec) {
  let curBufEndMsec = bufDurationMsec * (curBuf + 1);
  chatActions.forEach(chatAction => {
    const offsetTimeMsec = chatAction.replayChatItemAction.videoOffsetTimeMsec;
    while (offsetTimeMsec > curBufEndMsec && curBuf < countPerBuf.length - 1) {
      ++curBuf;
      curBufEndMsec += bufDurationMsec;
    }
    const newCount = countPerBuf[curBuf].y + 1;
    countPerBuf[curBuf] = { x: curBuf, y: newCount };
  });
  return { countPerBuf, curBuf };
}

async function tmpfunc(chatLogURL, bufDurationMsec, bufNum, chart) {
  let curBuf = 0;
  let countPerBuf = new Array(bufNum)
    .fill(0).map((_, i) => { return { x: i, y: 0 }; });
  const domParser = new DOMParser();
  while (true) {
    const chatJson = await getChatJson(chatLogURL);
    const continuations = chatJson
      .continuationContents
      .liveChatContinuation
      .continuations;
    if (continuations.length > 1) {
      const nextContinuation = continuations[0]
        .liveChatReplayContinuationData
        .continuation;
      const chatActions = chatJson
        .continuationContents
        .liveChatContinuation
        .actions;
      const countResult = countChats(
        chatActions,
        countPerBuf,
        curBuf,
        bufDurationMsec
      );
      countPerBuf = countResult.countPerBuf;
      curBuf = countResult.curBuf;
      chatLogURL = 'https://www.youtube.com/live_chat_replay?continuation=' + nextContinuation;
      chart.data.datasets[1].data = countPerBuf;
      chart.update();
    } else {
      break;
    }
  }
}
