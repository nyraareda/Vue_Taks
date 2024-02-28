<template>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.address }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="3" class="text-center">Total num of students:{{ students.length }}</th>
        </tr>
        <tr>
          <td colspan="3" class="text-center">
            <button id="btnopen" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Add Student
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleSubmit" class="row needs-validation" novalidate>
              <!-- Form fields -->
              <div class="row">
                <!-- ID input field -->
                <div class="col-6">
                  <label for="validationCustom01" class="form-label">ID</label>
                  <div class="input-group has-validation">
                    <input v-model="newStudent.id" type="text" class="form-control" id="validationCustom01" required pattern="[1-9]" title="Id must only numbers[0-9]">
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                    <div class="invalid-feedback">
                      Please enter a valid ID.
                    </div>
                  </div>
                </div>
                <!-- Name input field -->
                <div class="col-6">
                  <label for="validationCustom02" class="form-label">Name</label>
                  <div class="input-group has-validation">
                    <input v-model="newStudent.name" type="text" class="form-control" id="validationCustom02" required pattern="[a-zA-Z]+" title="Name must contain only letters">
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                    <div class="invalid-feedback">
                      Please enter a valid name.
                    </div>
                  </div>
                </div>
              </div>
              <div class="row my-3">
                <!-- City input field -->
                <div class="col">
                  <label for="validationCustom03" class="form-label">City</label>
                  <input v-model="newStudent.address" type="text" class="form-control" id="validationCustom03" required pattern="[a-zA-Z][a-zA-Z0-9\s]*">
                  <div class="invalid-feedback">
                    Please enter a valid city.
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <!-- Modal footer buttons -->
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button class="btn btn-primary" type="submit">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import students from './students';

export default {
  name: 'bodycomponent',
  data() {
    return {
      students: students,
      newStudent: { id: '', name: '', address: '' }
    };
  },
  methods: {
    handleSubmit() {
      if (this.validateForm()) {
        this.students.push({
          id: this.newStudent.id,
          name: this.newStudent.name,
          address: this.newStudent.address
        });
        this.clearForm();
        this.closeModal();
      }
    },
    validateForm() {
      return this.newStudent.id && this.newStudent.name && this.newStudent.address;
    },
    clearForm() {
      this.newStudent = { id: '', name: '', address: '' };
    },
    closeModal() {
  const modal = document.getElementById('staticBackdrop');
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    if (modalBackdrop) {
      document.body.removeChild(modalBackdrop);
    }
    document.body.classList.remove('modal-open');
  }
}

  }
};
</script>

  <style>
  
  </style>
  