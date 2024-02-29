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

}
