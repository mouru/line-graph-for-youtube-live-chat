/**
 * Returns a reference to the object with id="player". If there is no object in
 * a web page, throw an error message.
 *
 * @returns {HTMLElement} A reference to the object with id="player".
 * @throws An error message to be shown that there is no a player element.
 */
function getPlayerElement() {
  const player = document.getElementById('player');
  existElement(player);
  return player;
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
  // the video tag to be extracted is reached by the following hierarchy
  // <div id="movie_player"> -> <div class="html5-video-container"> -> <video>
  const moviePlayer = document.getElementById('movie_player');
  existElement(moviePlayer);
  const videoContainer = moviePlayer.getElementsByClassName('html5-video-container');
  isValidElementCollection(videoContainer, 'html5-video-container');
  const video = videoContainer[0].getElementsByTagName('video');
  isValidElementCollection(video, 'video');

  return video[0].style.width;
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
  // the div tag to be extracted is reached by the following hierarchy
  // <div id="movie_player"> -> <div class="ytp-chrome-bottom">
  const moviePlayer = document.getElementById('movie_player');
  existElement(moviePlayer);
  const ytpChromeBottom = moviePlayer.getElementsByClassName('ytp-chrome-bottom');
  isValidElementCollection(ytpChromeBottom, 'ytp-chrome-bottom');

  return ytpChromeBottom[0].style.width;
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
  // the div tag to be extracted is reached by the following hierarchy
  const moviePlayer = document.getElementById('movie_player');
  existElement(moviePlayer);
  const ytpChromeBottom = moviePlayer.getElementsByClassName('ytp-chrome-bottom');
  isValidElementCollection(ytpChromeBottom, 'ytp-chrome-bottom');
  const ytpChromeControls = ytpChromeBottom[0].getElementsByClassName('ytp-chrome-controls');
  isValidElementCollection(ytpChromeControls, 'ytp-chrome-controls');
  const ytpLeftControls = ytpChromeControls[0].getElementsByClassName('ytp-left-controls');
  isValidElementCollection(ytpLeftControls, 'ytp-left-controls');
  const ytpTimeDisplay = ytpLeftControls[0].getElementsByClassName('ytp-time-display');
  isValidElementCollection(ytpTimeDisplay, 'ytp-time-display');
  const ytpTimeDuration = ytpTimeDisplay[0].getElementsByClassName('ytp-time-duration');
  isValidElementCollection(ytpTimeDuration, 'ytp-time-duration');

  return ytpTimeDuration[0].innerHTML;
}

/**
 * Check whether the specified htmlElement exists (i.e., NULL) or not.
 *
 * @param {HtmlElement} htmlElement an element to be checked.
 * @param {String} idName a tag string to be shown an exception message.
 * @throws An error message to be shown that there is no a specified tag.
 */
function existElement(htmlElement, idName) {
  if (htmlElement) {
    throw 'Cannot find a ' + idName + ' element.';
  }
}

/**
 * Check whether the specified HTMLCollectionOf contains an element. If there
 * are multiple elements, log a warning message.
 *
 * @param {HTMLCollectionOf} htmlCollection a collection to be checked.
 * @param {String} className a tag string to be shown an exception message.
 * @throws An error message to be shown that there is no a specified class.
 */
function isValidElementCollection(htmlCollection, className) {
  if (htmlCollection.length == 0) {
    throw 'Cannot find a ' + className + ' element.';
  } else if (htmlCollection.length > 1) {
    console.console.warn('There are multiple ' + className + 'elements.');
  }
}