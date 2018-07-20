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

- ...
