<template>
  <div>
    <TipTapEditor v-model="model.content" />
  </div>
</template>

<script>
import TipTapEditor from './TipTapEditor.vue';

export default {
  components: {
    TipTapEditor,
  },
  mixins: [window.Storyblok.plugin],
  data() {
    return {
      editor: null,
    };
  },
  methods: {
    initWith() {
      return {
        plugin: 'tiptap-test', // Replace with the name of your plugin
        example: 'Hello World!',
        content: {},
      };
    },
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