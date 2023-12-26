<template>
  <div>Hello Home Page</div>
</template>
<script lang="ts" setup>
  definePageMeta({
    middleware: 'auth' // this should match the name of the file inside the middleware directory 
})
</script>