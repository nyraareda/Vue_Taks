<template>
  <div>
    <button id="btnopen" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Add Student
    </button>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm" class="row needs-validation" novalidate>
              <!-- <div class="col-12 pt-3">
                <label for="validationCustom01" class="form-label">ID</label>
                <input v-model="stdid" type="text" class="form-control" id="validationCustom01" required pattern="[0-9]+" title="ID must contain only numbers" @change="clearCustomValidity">
                <div class="valid-feedback">
                  Looks good!
                </div>
                <div class="invalid-feedback">
                  Please enter a valid ID (numbers only).
                </div>
              </div> -->
              <div class="col-12 pt-3">
                <label for="validationCustom02" class="form-label">Name</label>
                <input v-model="stdname" type="text" class="form-control" id="validationCustom02" required pattern="[a-zA-Z\s]+" title="Name must contain only letters" @change="clearCustomValidity">
                <div class="valid-feedback">
                  Looks good!
                </div>
                <div class="invalid-feedback">
                  Please enter a valid name (letters only).
                </div>
              </div>
              <div class="col-12 pt-3">
                <label for="validationCustom03" class="form-label">City</label>
                <input v-model="stdcity" type="text" class="form-control" id="validationCustom03" required pattern="[a-zA-Z\s]+" title="City must contain only letters" @change="clearCustomValidity">
                <div class="valid-feedback">
                  Looks good!
                </div>
                <div class="invalid-feedback">
                  Please enter a valid city (letters only).
                </div>
              </div>
              <div class="modal-footer">
                <!-- Modal footer buttons -->
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button class="btn btn-primary" type="submit" :data-bs-dismiss="validateForm() ? 'modal' : null">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addbtncomponent',
  data: () => ({
    // stdid: '',
    stdname: '',
    stdcity: ''
  }),
  methods: {
    submitForm() {
      // Call the validated method to apply validation
      // this.validated();
      
      // Check if the form is valid
      if (this.validateForm()) {
        // let useradd = { id: this.stdid, name: this.stdname, city: this.stdcity };
        let useradd = {name: this.stdname, city: this.stdcity };
        console.log(useradd);
        // raise event
        this.$emit("newstudentadded", useradd);
        // Clear form after successful addition
        this.stdname = '';
        this.stdcity = '';
        // Close the modal using Bootstrap's modal API
        // const modal = document.getElementById('staticBackdrop');
        // const bootstrapModal = new bootstrap.Modal(modal);
        // bootstrapModal.hide();
      }
    },
    clearCustomValidity(event) {
      event.target.setCustomValidity('');
    },
    validateForm() {
      // Check if ID, Name, and City are not empty
      return this.stdname.trim() !== '' && this.stdcity.trim() !== '';
    },
    // validated() {
    //   let inputs = document.querySelectorAll(".needs-validation");
    //   for (let i = 0; i < inputs.length; i++) {
    //     inputs[i].addEventListener('submit', function (e) {
    //       if (!inputs[i].checkValidity()) {
    //         e.preventDefault()
    //         e.stopPropagation()
    //       }
    //       inputs[i].classList.add('was-validated')
    //     }, false)
    //   }
    // }
  }
}
</script>

<style>
/* Add your styles here if needed */
</style>
