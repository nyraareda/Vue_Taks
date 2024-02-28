<!-- productsscreen.vue -->
<template>
  <div>
    <div class="row mt-1" v-if="isAuthenticated">
      <div v-for="book in books" :key="book.id" class="card text-center" id="card" style="width: 26.2rem;height:48rem; margin-top: 1rem; justify-content: baseline; text-align: center;">
        <!-- Card content -->
        <img :src="book.image" :title="book.author" class="card-img-top" style="height: 75%;">
        <div class="row mt-2">
          <h3 id="bookname" class="text-center m-auto">{{ book.Name }}</h3>
        </div>
        <div class="row mt-2">
          <div class="col">
            <p>Category: {{ book.category }}</p>
          </div>
          <div class="col">
            <p>Author Name: {{ book.author }}</p>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <p :class="[book.pages > 50 ? 'more' : '', book.pages < 50 ? 'less' : '']">Number of pages: <span>{{ book.pages }}</span></p>
          </div>
          <div class="col">
            <p>Price: {{ book.price }}</p>
          </div>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-between align-items-baseline">
            <p>ISBN: {{ book.id }}</p>
            <button class="btn" :disabled="book.instore === 0 || isInCart(book)" @click="addtolist(book)">
              <i class="fa-regular fa-heart px-2"></i> Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Please log in to view products.</h1>
    </div>
  </div>
</template>

<script>
import { userAuthenticated } from '@/store/authontication';

export default {
  name: 'productsscreen',
  data() {
    return {
      books: [],
      cart: [], // Array to store items already added to the cart
    };
  },
  computed: {
    isAuthenticated() {
      return userAuthenticated().isAuthenticated;
    }
  },
  created() {
    if (this.isAuthenticated) {
      this.fetchBooks();
      this.fetchCartItems();
    }
  },
  methods: {
    fetchBooks() {
      fetch("http://localhost:3000/books")
        .then(response => {
          if (!response.ok) {
            throw new Error("not okay response");
          }
          return response.json();
        })
        .then(data => {
          this.books = data;
          console.log(this.books);
        })
        .catch(error => {
          console.error("Error fetching books:", error);
        });
    },
    fetchCartItems() {
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
          console.error("Error fetching cart items:", error);
        });
    },
    addtolist(book) {
      // Check if the item is already in the cart
      if (this.isInCart(book)) {
        console.log("Item is already in the cart.");
        return; // Do nothing if already in the cart
      }

      // Disable the button if instore quantity is 1
      if (book.instore === 1) {
        book.disabled = true;
      }
      book.instore--;

      // Add the item to the cart
      this.cart.push(book);

      // Post the item to cart.json
      fetch("http://localhost:8000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to add to cart");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Item added to cart:", data);
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
        });
    },
    isInCart(book) {
      return this.cart.some((item) => item.id === book.id);
    },
  },
};
</script>
<style scoped>
  img{
    height: 400px;
  }
  .card p {
    font-weight: bold;
    text-align: justify;
  }
  
  #card {
    /* margin-bottom: 6rem; */
    margin-right: 1rem;
    border: none;
    box-shadow: 4px 4px 3px lightgray;
    background-image: linear-gradient(to bottom, transparent 70%, #FFB3C1);
  }
  
  #card:hover {
    cursor: pointer;
    background-image: linear-gradient(to bottom, #FFB3C1 60%, transparent);
  }
  
  .more {
    color: #590D22;
  }
  
  .less {
    color: #C9184A;
  }
  
  p {
    color: rgb(56, 56, 56);
    font-family: 'Times New Roman', Times, serif;
    font-size: 1rem;
    font-weight: bold;
  }
  
  #bookname {
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    color: #C9184A;
  }
  
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

