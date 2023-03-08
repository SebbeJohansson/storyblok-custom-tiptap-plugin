# Storyblok Custom TipTap Field Plugin

> A example of how to make a custom field plugin for a TipTap RichText editor.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

In the browser, you will see the white screen with the following error in the console:
```
[Vue warn]: Error in created hook: "SyntaxError: Failed to execute 'postMessage' on 'Window': Invalid target origin 'null//app.storyblok.com' in a call to 'postMessage'."

DOMException: Failed to execute 'postMessage' on 'Window': Invalid target origin 'null//app.storyblok.com' in a call to 'postMessage'.
```
But don't worry, this project is just a template and only works as part of the storyblok app. See: 
https://www.storyblok.com/docs/plugins/enable-local-dev-mode

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
https://www.storyblok.com/docs/Guides/Creating-a-field-type-plugin#how-to-develop-plugins-locally

### Various other helpful links on how to make custom field plugins
https://www.storyblok.com/docs/plugins/introduction#local-development
https://www.storyblok.com/tp/react-field-type-plugin
https://markus.oberlehner.net/blog/building-a-custom-storyblok-field-type-plugin-with-vue/
https://tiptap.dev/installation/vue2
