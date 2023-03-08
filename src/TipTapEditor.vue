<template>
  <div>
    <editor-content :editor="editor" />
  </div>
</template>
  
<script>
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';

export default {
  components: {
    EditorContent,
  },
  mixins: [window.Storyblok.plugin],
  data() {
    return {
      editor: null,
    };
  },
  methods: {
    // Fieldtype-wrapper complains if this doesnt exist.
    // "Error in created hook: "TypeError: this.initWith is not a function""
    initWith() {
      return {};
    },
  },
  mounted() {
    const editor = new Editor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
      StarterKit,
      ],
      onUpdate: () => {
        this.$emit('input', this.editor.getJSON());
      },
    });
    this.editor = editor;
  },
  beforeDestroy() {
    this.editor.destroy()
  },
};
</script>