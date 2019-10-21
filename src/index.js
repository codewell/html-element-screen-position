/** 
 * Recursively calculate the position on the screen for an html child element
 * return {x, y} where x is the horizonal position in pixels
 * and y is the vertical position in pixels.
 * (page top left corner) -> •-------------------------------------
 *                           |          ^                         |
 *                           |          |                         |
 *                           |          y                         |
 *                           |          |                         |
 *                           |<----x----* <- (element top left corner)
 *                           |                                    |
 *                           --------------------------------------
 * @param {object} - HTML element
 * @param {x} - Should not be set
 * @param {top} - Should not be set
 * @returns {object} - { x, y }
 */
const calculatePagePosition = (htmlElement, x = 0, y = 0) => {
  // If there is no more parent, we are done!
  if (!htmlElement.offsetParent) {
    return {
      x: x + htmlElement.offsetLeft,
      y: y + htmlElement.offsetTop,
    };
  }

  // Move up to next parent
  return calculatePagePosition(
    htmlElement.offsetParent,
    x + htmlElement.offsetLeft, // Add distance to parent element
    y + htmlElement.offsetTop, // Add distance to parent element
  );
};

module.exports = calculatePagePosition;
