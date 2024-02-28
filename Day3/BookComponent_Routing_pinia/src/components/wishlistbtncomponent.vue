<template>
  <div>
  <div class="row" v-if="isAuthenticated">
    <h2 class="col text-danger text-center my-3 m-auto" v-if="cart.length == 0">
      Sorry, your wishlist is empty
    </h2>
    <!-- Wishlist content -->
    <table class="table table-striped mx-auto my-3" v-if="cart.length > 0" style="border: 3px solid #590D22; border-radius: 10rem;">
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <th>{{ item.id }}</th>
          <td>{{ item.Name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.price }}</td>
          <td><button class="btn btn-danger" @click="removeFromWishlist(item)">Remove</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="3">Total Price</th>
          <th colspan="2">{{ getTotalPrice() }}</th>
        </tr>
      </tfoot>
    </table>
  </div>
  <div v-else>
      <h1>Please log in to view Your WishList.</h1>
    </div>
</div>
</template>
<script>
import { userAuthenticated } from '@/store/authontication';
export default {
  name: 'wishlistscreen',
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    isAuthenticated() {
      return userAuthenticated().isAuthenticated;
    }
  },
  created() {
    if(this.isAuthenticated){
    fetch("http://localhost:8000/cart")
      .then(response => {
        if (!response.ok) {
          throw new Error("not okay response");
        }
        return response.json();
      })
      .then(data => {
        this.cart = data;
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
    }
},
  methods: {
    getTotalPrice() {
      {
        let totalprice = 0;
        for (let i = 0; i < this.cart.length; i++) {
          totalprice += this.cart[i].price;
        }
        return totalprice;
    }
  },
  removeFromWishlist(item){
    const selecteditem = this.cart.findIndex(cartitem => cartitem.id === item.id);
        if (selecteditem !== -1) {
          this.cart.splice(selecteditem, 1);
        }
    fetch(`http://localhost:8000/cart/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to add to cart");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Item removed from cart:", data);
        })
        .catch((error) => {
          console.error("Error removing to cart:", error);
        });
    

  }
}
}
</script>

<style scoped>

</style>
