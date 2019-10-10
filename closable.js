export default function (node, { exclude = [] } = {}) {
  function isTouchScreen () {
    const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
    const mq = function(query) {
      return window.matchMedia(query).matches
    }
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      return true
    }
    const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')
    return mq(query)
  }

  function handleDocumentClick (e) {
    if (e.target !== node && !node.contains(e.target) && exclude.indexOf(e.target) === -1) {
      node.dispatchEvent(new CustomEvent('outside-click'))
    }
  }

  if (isTouchScreen()) {
    document.addEventListener('touchstart', handleDocumentClick)
  } else {
    document.addEventListener('click', handleDocumentClick)
  }

  return {
    destroy () {
      if (isTouchScreen()) {
        document.removeEventListener('touchstart', handleDocumentClick)
      } else {
        document.removeEventListener('click', handleDocumentClick)
      }
    }
  }
}
