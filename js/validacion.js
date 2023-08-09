function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

    document.getElementById("regBtn").addEventListener('click',()=>{
        let vacios = true
        var inputs = document.getElementsByTagName('input')
        for (let i = 0; i < inputs.length; i++) {
            vacios = vacios && inputs[i].value != '';
        }
        let largoPassword = document.getElementById('password1').value.length >= 6
        let passwordIguales = document.getElementById('password1').value == document.getElementById('password2').value
        let condicionesCheck = document.getElementById('terminos').checked
        console.log(vacios, largoPassword, passwordIguales, condicionesCheck)


        if (vacios && largoPassword && passwordIguales && condicionesCheck) {
            event.preventDefault()
            showAlertSuccess()
        }else{
            event.preventDefault();
            showAlertError()
        }
    });