'use strict'

import hljs from 'highlight.js'

function highlight (el, binding) {
  const targets = el.querySelectorAll('code')

  targets.forEach(target => {
    if (typeof binding.value === 'string') {
      target.textContent = binding.value
    }
    hljs.highlightBlock(target)
  })
}

export default {
  install (vue) {
    vue.directive('highlightjs', {
      deep: true,
      bind (el, binding) {
        highlight(el, binding)
      },
      componentUpdated (el, binding) {
        if (binding.oldValue === binding.value) return

        highlight(el, binding)
      }
    })
  }
}
