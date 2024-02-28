<template>
    <div class="container" id="mainwrapper">
      <!-- Navbar -->
      <nav class="d-flex justify-content-between p-2 align-items-baseline" style="background-color:#FF758F; border-bottom-left-radius: 1.5rem; border-bottom-right-radius: 1.5rem; border: none; box-shadow: 3px 3px 3px lightcoral,3px 3px 5px lightblue;">
        <div>
          <a id="icon"  @click="screenshow='productsscreen'" style="text-decoration: none; color: crimson; margin-left: 1rem;"><i class="fa-solid fa-book"></i></a>
        </div>
        <div class="d-flex align-items-baseline" style="margin-right: 1rem;">
          <button id="btnwishlist" class="btn px-2" @click="screenshow='wishlistscreen'"><i class="fa-regular fa-heart px-2"></i>WishList</button>
        </div>
    </nav>
    <component :is="screenshow"/>

    </div>
    
</template>
<script>
import productsscreen from './productscreen.vue'
import wishlistscreen from './wishlistbtncomponent.vue'
export default {
    name: 'navbarcomponent',
    components:{
        wishlistscreen,
        productsscreen,
    },
    data() {
        return {
            screenshow:productsscreen,
        }
    },  
       
    }
</script>
  
<style scoped>
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
}</style>