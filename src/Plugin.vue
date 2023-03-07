<template>
  <div>
    {{ model }}
    <!-- {{  editorRandomVariable123578 }} -->
    <!-- <editor-content :editor="model.editor" /> -->
    <h1>text new</h1>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
// import { Editor, EditorContent } from '@tiptap/vue-2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import StarterKit from '@tiptap/starter-kit'
export default {
  // components: {
  //   EditorContent,
  // },
  mixins: [window.Storyblok.plugin],
  // data() {
  //   return {
  //     editorRandomVariable123578: null,
  //   }
  // },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      // editorConfig: {
      //   // The configuration of the editor.
      // }
    };
  },
  methods: {
    initWith() {
      console.log('plugin:initWith 2');
      return {
        plugin: 'tiptap-test',
        example: 'Hello World!',
        // editor: null,
      };
    },
    pluginCreated() {
      // console.log("editor");
      // const editor = new Editor({
      //   content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      // });
      // this.model.editor = editor;
      // console.log(editor);
      // console.log(JSON.stringify(editor));
      console.log('plugin:created');
      // this.editor = JSON.stringify(editor);
    }
  },
  // mounted() {
  //   console.log("mounted");
  //   this.editorRandomVariable123578 = new Editor({
  //     content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  //     // extensions: [
  //     //   StarterKit,
  //     // ],
  //     onUpdate: () => {
  //       // HTML
  //       // this.$emit('input', this.editor.getHTML())

  //       // JSON
  //       console.log(this.editor.getJSON());
  //       this.$emit('input', this.editor.getJSON())
  //     },
  //   });
  //   console.log(this.editorRandomVariable123578);
  // },
  // watch: {
  //   'model': {
  //     handler: function (value) {
  //       this.$emit('changed-model', value);
  //     },
  //     deep: true
  //   }
  // }
};
</script>