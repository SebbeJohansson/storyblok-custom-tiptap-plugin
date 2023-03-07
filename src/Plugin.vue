<template>
  <div>
    <editor-content :editor="model.editor" />
    <h1>text</h1>
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
  template: `
    <div>
      <editor-content :editor="model.editor" />
      <input class="uk-width-1-1" v-model="model.example" />
    </div>
  `,
  methods: {
    initWith() {
      console.log('plugin:initWith');
      const editor = new Editor({
        content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
        extensions: [
          StarterKit,
        ],
      });
      return {
        editor,
        plugin: 'tiptap-test',
        example: 'Hello World!'
      };
    },
    pluginCreated() {
      console.log('plugin:created');
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