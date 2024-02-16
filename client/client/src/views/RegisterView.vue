<template>
  <div class="register">
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      placeholder="email"
      v-model="email"
      required
    />
    <br />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
      required
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import authenticationService from '../services/authservice.js'
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register () {
        console.log("Register button clicked", this.email, this.password);
        try {
            const response = await authenticationService.register ({
            email: this.email,
            password: this.password
        })
        console.log(response.data);
    } catch (error) {
        console.error("Error during registration", error.message);
    }
    }
  },
  mounted() {
    setTimeout(() => {
      this.email = "";
    }, 2000);
  },
};
</script>