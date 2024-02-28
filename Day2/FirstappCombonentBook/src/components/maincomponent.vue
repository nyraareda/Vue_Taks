<template>
    <div class="container" id="mainwrapper">
      <!-- Navbar -->
      <div class="d-flex justify-content-between p-2 align-items-baseline" style="background-color:#FF758F; border-bottom-left-radius: 1.5rem; border-bottom-right-radius: 1.5rem; border: none; box-shadow: 3px 3px 3px lightcoral,3px 3px 5px lightblue;">
        <div>
          <a id="icon" href="#" @click.prevent="iswishlistvisible=false" style="text-decoration: none; color: crimson; margin-left: 1rem;"><i class="fa-solid fa-book"></i></a>
        </div>
        <div class="d-flex align-items-baseline" style="margin-right: 1rem;">
          <p id="itemnavbar" class="px-2 my-2">[{{wishlist.items.length}}]<span v-if="wishlist.items.length==1">Item</span><span v-else>Items</span> with total price [{{gettotalprice()}}]</p>
          <button id="btnwishlist" class="btn px-2" @click="iswishlistvisible=true"><i class="fa-regular fa-heart px-2"></i>WishList</button>
        </div>
      </div>
  
      <!-- Cards -->
      <div class="row mt-1" v-if="iswishlistvisible==false">
        <div v-for="book in books" :key="book.id" class="card justify-content-between" style=" width: 26rem; height 10rem">
          <img :src="book.image" :title="book.auther" class="card-img-top" style="height: 75%;">
          <div class="row mt-2">
            <h3 id="bookname" class="text-center m-auto">{{book.Name}}</h3>
          </div>
          <div class="row mt-2">
            <div class="col">
              <p>Category:{{book.category}}</p>
            </div>
            <div class="col">
              <p>Author Name:{{book.auther}}</p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col">
              <p :class="[book.pages>50?'more':'',book.pages<50?'less':'']">Number of pages: <span>{{book.pages}}</span></p>
            </div>
            <div class="col">
              <p>Price: {{book.price}}</p>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between align-items-baseline">
              <p>ISBN:{{book.id}}</p>
              
              <button class="btn" :disabled="book.instore==0" @click="addtolist(book)"><i class="fa-regular fa-heart px-2"></i>add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Wishlist -->
      <div class="row" v-if="iswishlistvisible==true">
        <h2 class="col text-danger text-center my-3 m-auto" v-if="wishlist.items.length==0">
          Sorry your wishlist is empty
        </h2>
        <!-- Wishlist content -->
        <table class="table table-striped mx-auto my-3" width="90" v-if="wishlist.items.length>0" style="border: 3px solid #590D22; border-radius: 10rem;">
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
            <tr v-for="item in wishlist.items" :key="item.book.id">
              <th>{{item.book.id}}</th>
              <td>{{item.book.Name}}</td>
              <td>{{item.book.category}}</td>
              <td>{{item.book.price}}</td>
              <td><button class="btn btn-danger" @click="removebook(item)">remove</button></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3">Total Price</th>
              <th colspan="2">{{gettotalprice()}}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import books from './books'
  export default {
    name: 'maincomponent',
    data() {
      return {
        books: [],
        iswishlistvisible: false,
        wishlist: {
          items: []
        }
      }
    },
    mounted() {
      this.books = books;
    },
    methods: {
      addtolist(book) {
        this.wishlist.items.push({
          book: book,
          quantity: 1
        });
        book.instore--;
      },
      gettotalprice() {
        let totalprice = 0;
        for (let i = 0; i < this.wishlist.items.length; i++) {
          totalprice += this.wishlist.items[i].quantity * this.wishlist.items[i].book.price;
        }
        return totalprice;
      },
      removebook(item) {
        item.quantity--;
        if (item.quantity == 0) {
          this.wishlist.items.splice(this.wishlist.items.findIndex(iitem => iitem.book.id == item.book.id), 1);
        }
        item.book.instore++;
      }
    }
  }
  </script>
  
  <style>
  .card p {
    font-weight: bold;
    text-align: justify;
  }
  
  .card {
    width: 26rem;
    margin: 0.3rem;
    margin-right: 1.2rem;
    border: none;
    box-shadow: 4px 4px 3px lightgray;
    background-image: linear-gradient(to bottom, transparent 70%, #FFB3C1);
  }
  
  .card:hover {
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
  <!-- <img src="E:\ITI 9 MONTHS\Vue\New folder\firstappcomponent\public\images\8.jpg" alt=""> -->