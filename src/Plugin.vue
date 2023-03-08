<template>
  <div>
    <editor-content :editor="model.editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit'
export default {
  components: {
    EditorContent,
  },
  mixins: [window.Storyblok.plugin],
  methods: {
    initWith() {
      console.log('plugin:initWith 2');
      return {
        plugin: 'tiptap-test',
        example: 'Hello World!',
      };
    },
    pluginCreated() {
      // console.log("editor");
      const editor = new Editor({
        content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
        extensions: [
          StarterKit,
        ],
      });
      this.model.editor = editor;
      this.editor = editor;
      console.log(editor);
      // console.log(JSON.stringify(editor));
      console.log('plugin:created');
      // this.editor = JSON.stringify(editor);
    }
  },
  watch: {
    'model': {
      handler: function (value) {
        this.$emit('changed-model', value);
      },
      deep: true
    }
  }
};
</script>