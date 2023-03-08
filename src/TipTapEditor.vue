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
  data() {
    return {
      editor: null,
    };
  },
  props: {
    // for custom v-model
    value: {
      type: undefined,
      required: true,
    },
  },
  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [
        StarterKit,
      ],
      onUpdate: () => {
        this.$emit('input', this.editor.getJSON());
      },
    });
  },
  beforeDestroy() {
    this.editor.destroy()
  },
};
</script>