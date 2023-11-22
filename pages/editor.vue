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
      <button class="bg-gray-900 text-gray-100 px-3 py-3 rounded" type="submit">SUBMIT</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
      }
    }
  },
  methods: {
    submitForm() {
      console.log(this.blog.content)
    }
  }
}
</script>
  