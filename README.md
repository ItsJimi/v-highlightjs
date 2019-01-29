# v-highlightjs
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Vue directive for highlighting code

## Install
```sh
npm install --save v-highlightjs
```
or
```sh
yarn add v-highlightjs
```

## Use
```javascript
// import module
import VHighlightJS from 'v-highlightjs'

// use plugin
Vue.use(VHighlightJS)
```

```vue
<code v-highlightjs="{ language: 'json', code: code }"></code>
```

## Credits
- https://github.com/highlightjs/highlight.js
- https://github.com/metachris/vue-highlightjs
