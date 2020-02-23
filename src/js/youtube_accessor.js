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
  return player;
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
