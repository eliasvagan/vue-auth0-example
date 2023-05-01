<template>
  <div v-if="!isAuthenticated">
    <button @click="login">Sign in</button>
  </div>
  <div v-if="isAuthenticated">
    <button @click="logout">Sign out</button>
    <span>{{ user.name }}</span>
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
  
export default {
  setup() {
    const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();
  
    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      },
      isAuthenticated,
      isLoading,
      user,
    };
  },
};
</script>