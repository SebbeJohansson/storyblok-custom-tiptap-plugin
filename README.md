# Storyblok Custom TipTap Field Plugin
<a href="https://www.buymeacoffee.com/sebbejohansson"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a Monster&emoji=🐉&slug=sebbejohansson&button_colour=000000&font_colour=48e704&font_family=Bree&outline_colour=48e704&coffee_colour=48e704" height="40px"/></a>

> A example of how to make a custom field plugin for a TipTap RichText editor.

## Get started with local development
### Create a new field plugin in storyblok
1. Go to https://app.storyblok.com/#/me/plugins
2. Press "New field-type" in the top right corner.
![image](https://user-images.githubusercontent.com/5083273/223793371-ab34bb93-aa01-4fad-b669-3012cce9e729.png)
3. Name your plugin something helpful like "my-new-amazing-tip-tap-editor" (keep in mind that it needs to be unique globally). Remember this name. You will need it later. Press "Save".
4. A new plugin has now been created and you should be seeing this:
![image](https://user-images.githubusercontent.com/5083273/223793681-51231187-df64-4910-9b16-dce41105552c.png)
5. You are now ready to start your local enviroment
### Clone the respository
```
(optionally you can fork this first)
Clone with ssh - git@github.com:SebbeJohansson/storyblok-custom-tiptap-plugin.git
or
Clone with https - https://github.com/SebbeJohansson/storyblok-custom-tiptap-plugin.git
```
### Navigate to your local clone of the repository
1. Open a terminal either in your editor or freely.
2. Navigate to the directory using `cd` or similar command.
### Install all dependencies (while in the directory of the repository)
```
npm install
```
### Replace the field plugin name with the one you created earlier
1. Open the code in an editor of your choice.
2. Go to Plugin.vue.
3. In `initWith` you should find a value called "plugin". Replace the placeholder with your custom name. (it should be on row 23)
4. You are now ready to start developing locally.
### Compile and hot-reload locally for development (while in the directory of the repository)
1. Run the start command in your terminal.
```
npm run dev
```
2. You should now be seeing this:
![image](https://user-images.githubusercontent.com/5083273/223798365-272d92be-a776-4268-8009-31b13ac05597.png)
You are now ready to connect your local enviroment to storyblok.

### Connect the storyblok website to your local
1. Go to the url of your plugin (something like "https://app.storyblok.com/#/me/plugins/45919").
2. Press "Enable local development mode":
![image](https://user-images.githubusercontent.com/5083273/223799843-46746c89-abc9-46d3-a2b1-b343346f1617.png)
3. Press "Use local custom URL" to bind it to your https local url (it should be `https://localhost:8080/`):
![image](https://user-images.githubusercontent.com/5083273/223800110-14e9d1ec-6c3d-47ea-9497-f690b19a0c1e.png)
4. Since you locally dont have a valid ssl cert (cant use https) you need to navigate to your local url and manually say "continue":
![image](https://user-images.githubusercontent.com/5083273/223802685-0b6d64b1-6123-41a0-8fd9-08d4410170b6.png)
5. You might have to toggle "Enable local development mode" on/off again, but after that you should have your local version of the tiptap editor running in storyblok:
![image](https://user-images.githubusercontent.com/5083273/223803104-16549593-db6e-4a24-9550-70d9c890af35.png)
6. Done! Try making changes and see it updating in live..<br>
(note: some changes you do require you to reload the iframe, easiest way to do that is to do the toggle suggested in step 5)

### Lints and fixes files
```
npm run lint
```

## Deploy to storyblok (required to start using the field in a block)
### Compile and minify the code
1. Run the build command in your terminal.
```
npm run build
```
2. You should now have a `dist/export.js` in your project.

### Add the compiled code, save, and publish your plugin
1. Copy the contents of the compiled code into the editor on your plugin page.
2. Turn off the local development mode by untoggling "Enable local development mode".
3. Press "Save" and the iframe should reload and run the built version of your plugin:
![image](https://user-images.githubusercontent.com/5083273/223804742-be620721-d63d-4298-b19c-8a79736c470b.png)
![image](https://user-images.githubusercontent.com/5083273/223804803-ed685127-0857-41c4-b2da-7526eb150f1e.png)
4. Press "Publish" to publish your changes so that you can use your plugin in a block:
![image](https://user-images.githubusercontent.com/5083273/223804910-1e1eaf58-473e-4ad3-8a0e-6902eaea498e.png)
5. As a sanity check you can first make sure that the editor is working by checking the output:
![image](https://user-images.githubusercontent.com/5083273/223805105-6c716cec-8352-49d4-9c85-0b6853fa7e39.png)

### Create a block that uses your new plugin
1. Create a new block or modify an existing one.
2. Add a new field and select "plugin" as the type:
![image](https://user-images.githubusercontent.com/5083273/223805768-658e3fd0-dde4-4258-be1b-b9e3c90329fc.png)
3. Go into the new field and select our custom plugin:
![image](https://user-images.githubusercontent.com/5083273/223805901-743a1f1e-4621-44b6-9ff6-e3bec2400c51.png)
4. You can now start using the block!

### Rendering the richtext
If you havent done many changes to the plugin you should be able to use the built in storyblok richtext renderer with the resulting `content` field from the plugin.
Check the official documentation for more info:
https://www.storyblok.com/docs/richtext-field
https://www.storyblok.com/docs/guide/in-depth/richtext-rendering


## Potential Issues
In the browser, you will see the white screen with the following error in the console:
```
[Vue warn]: Error in created hook: "SyntaxError: Failed to execute 'postMessage' on 'Window': Invalid target origin 'null//app.storyblok.com' in a call to 'postMessage'."

DOMException: Failed to execute 'postMessage' on 'Window': Invalid target origin 'null//app.storyblok.com' in a call to 'postMessage'.
```
But don't worry, this project is just a template and only works as part of the storyblok app. See: 
https://www.storyblok.com/docs/plugins/enable-local-dev-mode

## Customize TipTap
This plugin includes the `@tiptap/starter-kit` which contains everything to get started.<br>
If you want to customize it further you can check the [official tiptap documentation](https://tiptap.dev/guide/configuration) and the post by [@katerlouis](https://github.com/katerlouis) [here https://github.com/storyblok/storyblok/issues/887#issuecomment-1459677673](https://github.com/storyblok/storyblok/issues/887#issuecomment-1459677673) 

## Various other helpful links on how to make custom field plugins
https://www.storyblok.com/docs/plugins/introduction#local-development
https://www.storyblok.com/tp/react-field-type-plugin
https://markus.oberlehner.net/blog/building-a-custom-storyblok-field-type-plugin-with-vue/
https://tiptap.dev/installation/vue2
