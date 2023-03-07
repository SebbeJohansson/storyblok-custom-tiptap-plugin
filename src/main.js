import { /* Editor,  */EditorContent } from '@tiptap/vue-2';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import Plugin from './Plugin.vue'

// window.Storyblok.vue.use(Editor);
window.Storyblok.vue.use(EditorContent);
window.Storyblok.vue.use(CKEditor);
if (process.env.NODE_ENV == 'development') {

  window.Fieldtype = Plugin
  let customComp = window.Storyblok.vue.extend(window.Fieldtype);
  window.Storyblok.vue.component('custom-plugin', customComp);
  window.StoryblokPluginRegistered = true;

} else {
  
  let init = Plugin.methods.initWith() 
  window.storyblok.field_types[init.plugin] = Plugin

}

