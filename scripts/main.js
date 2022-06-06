let button = document.getElementById("submit")
button.addEventListener("click" , myDataFunc)

let user =  []

function myDataFunc()

{
    event.preventDefault()
    let form = document.getElementById("form")

   let data = {
       name : form.name.value,
       email : form.email.value,
       address : form.address.value,
       amount : form.amount.value

   }

   user.push(data)
   localStorage.setItem("user", JSON.stringify(user))
   window.location.reload()




}