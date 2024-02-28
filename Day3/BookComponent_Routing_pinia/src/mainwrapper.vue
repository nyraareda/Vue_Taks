<template>
  <div id="app">
    <div class="container">
      <!-- Navbar -->
      <nav class="d-flex justify-content-between p-2 align-items-baseline" style="background-color:#FF758F; border-bottom-left-radius: 1.5rem; border-bottom-right-radius: 1.5rem; border: none; box-shadow: 3px 3px 3px lightcoral,3px 3px 5px lightblue;">
        <div>
          <router-link to='productsscreen' id="icon" style="text-decoration: none; color: crimson; margin-left: 1rem;"><i class="fa-solid fa-book"></i></router-link>
        </div>
        <div class="d-flex align-items-baseline" style="margin-right: 1rem;">
          <router-link to="wishlistscreen"><button id="btnwishlist" class="btn px-2"><i class="fa-regular fa-heart px-2"></i>WishList</button></router-link>
        </div>
        <!-- Always render the Log Out button if authenticated -->
        
      </nav>
      <div>
          <button class="btn btn-primary" v-if="auth.isAuthenticated" @click="auth.logout">LogOut</button>
          <div v-if="auth.isAuthenticated">
            <h4>Welcome: {{ auth.user.name }}</h4>
          </div>
          <div v-else>
            <button class="btn btn-primary" @click="auth.login">Login</button>
          </div>
        </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { userAuthenticated } from '@/store/authontication';
export default {
  name: 'mainwrapper',
  data() {
    return {
      auth: userAuthenticated(),
    };
  },
};
</script>

<style>
.btn {
    color: white;
    background-color: #C9184A;
    border: none;
    border-radius: 10rem;
    box-shadow: 3px 3px 3px #590D22;
}

#btnwishlist {
    color: white;
    font-weight: bold;
    width: 9rem;
    height: 3rem;
    background-color: #C9184A;
}

#btnwishlist:hover {
    background-color: #FF758F;
}

#itemnavbar {
    color: white;
}

.fa-solid {
    color: white;
    font-size: 1.7rem;
}
</style>
