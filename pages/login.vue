<template>
    <div>
      <div class="title">
        <h2>Login</h2>
      </div>
      <div class="container form">
        <label for="uname"><b>Username</b></label>
        <input
          v-model="user.username"
          type="text"
          class="input"
          placeholder="Enter Username"
          name="uname"
          required
        />
  
        <label for="psw"><b>Password</b></label>
        <input
          v-model="user.password"
          type="password"
          class="input"
          placeholder="Enter Password"
          name="psw"
          required
        />
  
        <button @click.prevent="login" class="button">Login</button>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  const user = ref({
    username: '',
    password: '',
  });
  
  const login = async () => {
    // TODO send user Data to the login endpoint and redirect if  successful 
  };
  </script>