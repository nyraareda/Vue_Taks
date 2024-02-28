window.onload=function(){
  let inputs = document.querySelectorAll(".needs-validation");
  for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('submit', function (e) {
          if (!inputs[i].checkValidity()) {
              e.preventDefault()
              e.stopPropagation()
          }
          inputs[i].classList.add('was-validated')
      }, false)
  }

  // let fname = document.getElementById("validationCustom01");
  // fname.addEventListener('input', function () {
  //     fname.value = fname.value.trim();
  // })
  // let lname = document.getElementById("validationCustom02");
  // lname.addEventListener('input', function () {
  //     lname.value = lname.value.trim();
  // })
  // let Username = document.getElementById("validationCustomUsername");
  // Username.addEventListener('input', function () {
  //     Username.value = Username.value.trim();
  // })
}