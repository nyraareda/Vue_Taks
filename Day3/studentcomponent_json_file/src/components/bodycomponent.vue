<template>
<addbtncomponent @newstudentadded="testevent"/>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="std in students" :key="std.id">
          <td>{{ std.id }}</td>
          <td>{{ std.name }}</td>
          <td>{{ std.city }}</td>
          <td><button @click="deletestudent(std.id)">delete</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="3" class="text-center">Total num of students:{{ students.length }}</th>
        </tr>
      </tfoot>
    </table>
  
    </template>

<script>
// import students from './students';
import addbtncomponent from './addbtncomponent.vue'
export default {
  name: 'bodycomponent',
  data() {
    return {
      stdid:0,
      stdname:'',
      stdcity:'',
      students:[],
    };
  },
  components:{addbtncomponent},
  async created(){
    let res = await fetch("http://localhost:3000/students");
    this.students = await res.json();
// console.log(this.students);
  },
  methods: {
    async deletestudent(_id){
      await fetch(`http://localhost:3000/students/${_id}`,
      {
        method:"DELETE",
      });

      this.students = this.students.filter(std=>std.id!=_id);
    },
    async testevent(student){
      console.log("hello from the raised");
      let studentconstructed = {id:parseInt(this.students[this.students.length-1].id)+1, name:student.name,city:student.city}
      await fetch("http://localhost:3000/students",{
      method:"POST",
      Headers:{
        "Content-Type":"application/json",

      },
      body:JSON.stringify(studentconstructed)
    });
      this.students.push(studentconstructed);
      // this.clearForm();
    },
    // handleSubmit() {
    //   if (this.validateForm()) {
    //     this.students.push({
    //       id: this.newStudent.id,
    //       name: this.newStudent.name,
    //       address: this.newStudent.address
    //     });
    //     this.clearForm();
    //     
    //   }
    // },
//     validateForm() {
//       return this.newStudent.id && this.newStudent.name && this.newStudent.address;
//     },
//     clearForm() {
//       this.studentconstructed = {name: '', city: '' };
//     },
//     closeModal() {
//   const modal = document.getElementById('staticBackdrop');
//   if (modal) {
//     modal.classList.remove('show');
//     modal.setAttribute('aria-hidden', 'true');
//     modal.style.display = 'none';
//     const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
//     if (modalBackdrop) {
//       document.body.removeChild(modalBackdrop);
//     }
//     document.body.classList.remove('modal-open');
//   }
// }

  }
};
</script>

  <style>
  
  </style>
  