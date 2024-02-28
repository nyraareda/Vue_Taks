
import { defineStore } from 'pinia';

export const userAuthenticated = defineStore("authenticationStore", {
  state: () => ({
    isAuthenticated: false,
    user: {}
  }),
  actions: {
    login() {
      this.isAuthenticated = true;
      this.user = {
        id: 1,
        name: 'Nyraa',
      };
    },
    logout() {
      this.isAuthenticated = false;
      this.user = {};
    }
  }
});
