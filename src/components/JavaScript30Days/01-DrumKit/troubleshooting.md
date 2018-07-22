### vue-loader

- Can't play audio?
  
  Resolved by
```json
        // webpack.config.js (or vue.config.js)
        // vue-loader config
        options.transformToRequire = {
          audio: 'src'
        }
        options.transformAssetUrls = {
          // default options
          audio: 'src'
        }
        
```

- How to override default loader configuration?

For instance load file as raw:
```js
  import * as variable from '!raw-loader!<filename>.<ext>'
```

- Event Bubbling

Do you know the difference? Ok, read it here 
https://www.sitepoint.com/event-bubbling-javascript/

```js

// 1
['click','ontouchstart'].forEach(e => key.addEventListener(e, function (event) {
  playSound(this.dataset.key)
}, false))

// 2
['click','ontouchstart'].forEach(e => key.addEventListener(e, function (event) {
  playSound(event.target.dataset.key)
}, false))

```

- ...

