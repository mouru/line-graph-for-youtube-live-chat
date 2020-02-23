/**
 * Returns a reference to the object with id="player". If there is no object in
 * a web page, throw an error message.
 *
 * @returns {HTMLElement} A reference to the object with id="player".
 * @throws An error message to be shown that there is no a player element.
 */
function getPlayerElement() {
  const idName = 'player';
  const playerElem = document.getElementById(idName);
  existElement(playerElem, idName);
  return playerElem;
}

/**
 *  Returns a string specifying the width of a video region
 *  (format: "<width>px", e.g., "487px").
 *
 * @returns {string} A string specifying the width of a video region.
 * @throws An error message to be shown that the function cannot reach a video
 *  tag.
 */
function getVideoWidth() {
  const idName = 'movie_player';
  const classNames = ['html5-video-container', 'html5-main-video'];
  const videoElem = digHTMLTags(idName, classNames);

  return videoElem.style.width;
}

/**
 *  Returns a string specifying the width of a progress bar
 *  (format: "<width>px", e.g., "463px").
 *
 * @returns {string} A string specifying the width of a progress bar.
 * @throws An error message to be shown that the function cannot reach a
 *  progress bar.
 */
function getProgressBarWidth() {
  const idName = 'movie_player';
  const classNames = ['ytp-chrome-bottom'];
  const ytpChromeBottomElem = digHTMLTags(idName, classNames);

  return ytpChromeBottomElem.style.width;
}

/**
 * Returns a string specifying the time duration of a video (format:
 * "hh:mm:ss", e.g., "1:01:38").
 *
 * @returns {string} A string specifying the time duration of a video.
 * @throws An error message to be shown that the function cannot reach a
 *  time duration element.
 */
function getTimeDuration() {
  const idName = 'movie_player';
  const classNames = ['ytp-chrome-bottom', 'ytp-chrome-controls',
    'ytp-left-controls', 'ytp-time-display', 'ytp-time-duration'];
  const ytpTimeDurationElem = digHTMLTags(idName, classNames);

  return ytpTimeDurationElem.innerHTML;
}

/**
 * Returns a chat log URL.
 *
 * @returns {string} A URL to get chat logs.
 * @throws An error message to be shown that there is no a chatframe element.
 */
function getChatLogURL() {
  const idName = 'chatframe';
  const chatframeElem = document.getElementById(idName);
  existElement(chatframeElem, idName);

  return chatframeElem.src;
}

/**
 * Returns an element to be dug by the specified id and classNames.
 *
 * @param {string} idName An id to be shown the starting element.
 * @param {string[]} classNames ClassNames to dig a document.
 * @returns {Element} An element to be dug.
 * @throws An error message to be shown that the specified id and classNames
 *  cannot dig a document.
 */
function digHTMLTags(idName, classNames) {
  // get the starting element by id
  const idElem = document.getElementById(idName);
  existElement(idElem, idName);

  // dig tags by classNames
  let classCollection = idElem.getElementsByClassName(classNames[0]);
  isValidElementCollection(classCollection, classNames[0]);
  for (let i = 1; i < classNames.length; i++) {
    const className = classNames[i];
    classCollection = classCollection[0].getElementsByClassName(className);
    isValidElementCollection(classCollection, className);
  }

  return classCollection[0];
}

/**
 * Check whether the specified htmlElement exists (i.e., NULL) or not.
 *
 * @param {HtmlElement} htmlElement an element to be checked.
 * @param {string} idName a tag string to be shown an exception message.
 * @throws An error message to be shown that there is no a specified tag.
 */
function existElement(htmlElement, idName) {
  if (!htmlElement) {
    throw 'Cannot find a ' + idName + ' element.';
  }
}

/**
 * Check whether the specified HTMLCollectionOf contains an element. If there
 * are multiple elements, log a warning message.
 *
 * @param {HTMLCollectionOf} htmlCollection a collection to be checked.
 * @param {string} className a tag string to be shown an exception message.
 * @throws An error message to be shown that there is no a specified class.
 */
function isValidElementCollection(htmlCollection, className) {
  if (htmlCollection.length == 0) {
    throw 'Cannot find a ' + className + ' element.';
  } else if (htmlCollection.length > 1) {
    console.warn('There are multiple ' + className + 'elements.');
  }
}
