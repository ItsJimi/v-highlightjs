'use strict'

import hljs from 'highlight.js/lib/highlight'

const languages = {}

async function highlight (el, binding) {
  const targets = el.querySelectorAll('code')

  if (languages[binding.value.language] === undefined) {
    const language = await import(`highlight.js/lib/languages/${binding.value.language}`)
    languages[binding.value.language] = language
  }

  hljs.registerLanguage(binding.value.language, languages[binding.value.language].default)

  targets.forEach(target => {
    target.textContent = binding.value.code

    hljs.highlightBlock(target)
  })
}

export default {
  install (vue) {
    vue.directive('highlightjs', {
      deep: true,
      async bind (el, binding) {
        try {
          await highlight(el, binding)
        } catch (err) {
          console.log(err)
        }
      },
      async componentUpdated (el, binding) {
        if (binding.oldValue.code === binding.value.code &&
          binding.oldValue.language === binding.value.language) return

        try {
          await highlight(el, binding)
        } catch (err) {
          console.log(err)
        }
      }
    })
  }
}
