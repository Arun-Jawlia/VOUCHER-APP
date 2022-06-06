
let purchase = JSON.parse(localStorage.getItem('purchase'))

display(purchase)

function display(data)
{
    data.forEach(function(elem)
    {
        let container = document.getElementById('purchased_vouchers')
        let div= document.createElement('div')
        div.id='card'

        let img = document.createElement("img")
        img.src=elem.image
        img.id='imageProduct'


        let h3= document.createElement('h3')
        h3.innerText=elem.name

        let p = document.createElement('p')
        p.innerText=`Rs. ${elem.price}`

        

        div.append(img,h3,p)
        container.append(div)
    })
}



    let remainBalance = JSON.parse(localStorage.getItem('remainBalance'))
    
    // console.log(remainBalance)

    document.getElementById('wallet_balance').innerText=`Wallet-Balance: ${remainBalance}`






let sum=0
function displaySum()
{
   purchase.forEach(function(elem)
   {
       sum+= elem.price
   })
   console.log(sum)
   document.getElementById('balance').innerText=`Total : ${sum}`
}
displaySum()
