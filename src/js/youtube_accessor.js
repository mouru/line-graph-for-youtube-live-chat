/**
 * Returns a reference to the object with id="player". If there is no object in
 * a web page, throw an error message.
 *
 * @returns {HTMLElement} A reference to the object with id="player".
 * @throws An error message
 */
function getPlayerElement() {
  const player = document.getElementById('player');
  if (player) {
    throw 'Cannot find a "player" element.';
  }
  return player;
}

  }
  return playerDiv;
}
