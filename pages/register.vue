<template>
  <h1>Create Your Account</h1>
  <form @submit.prevent='saveData'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input  v-model="user.name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input  v-model="user.email" type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
      }
    }
  },
  methods: {
    saveData() {
      console.log('YOU CLICK SUBMIT')
    }
  }
}
</script>