<template>
  <div class="max-w-7xl m-auto">

    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="inputField">
          Enter Text
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="inputField" type="text" v-model="blog.title" placeholder="Text...">
      </div>
      <div class="mb-4">
        <Editor v-model="blog.content" />

      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      }
    }
  },
  methods: {
    submitForm() {
      console.log('YOU CLICK SUBMIT')
    }
  }
}
</script>
  