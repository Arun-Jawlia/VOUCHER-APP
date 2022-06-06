

async function getData()
{
    const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
    let res = await fetch(url)
    let data = await res.json()

    // console.log(data[0].vouchers)
    
    append(data[0].vouchers)
    
}

getData()

function append(data)
{
    // console.log(data)
    data.forEach(function(elem,index)
    {

        let container = document.querySelector(".voucher")       
         let div = document.createElement('div')
        div.className='voucher_list'

        let img = document.createElement("img")
        img.id='voucherImage'
        img.src = elem.image

        let name = document.createElement("h2")
        name.innerText=elem.name

        let price=document.createElement('p')
        price.innerText=`Rs. ${elem.price}`

        

        let button = document.createElement('button')
        button.innerText='Add to Purchase '
        button.className='buy_voucher'
        button.addEventListener("click",function()
        {
            
            myfunc(elem)
        })
       
        
        
        div.append(img,name,price,button)
        
        container.append(div)
    })
    
    
}



let user = JSON.parse(localStorage.getItem('user')) 

display(user)

function display(user)
{
    user.forEach(function(elem)
    {
        document.getElementById('wallet_balance').innerText=`Wallet Balance: ${elem.amount}`
    })
}






let btn = document.querySelector("buy_voucher")


// let purchaseArr = JSON.parse(localStorage.getItem('purchase')) ||[]
let purchaseArr = []
let sum=0
let sumAmount=0
function myfunc(elem)
{
    let user = JSON.parse(localStorage.getItem('user'))
    // console.log('clicked me')
    purchaseArr.push(elem)
    
    user.forEach(function(el)
    {
        sumAmount+=  Number(el.amount)
    })
    console.log(sumAmount)






    
    purchaseArr.forEach(function(elem)
    {
        sum+= elem.price
    })
    
    if(sum > sumAmount)
    {
        alert('Sorry! insufficient balance')
        alert('Add some Balance in your Wallet')
        window.location.href="index.html"
    }
    else if( sumAmount > sum)
    {
        alert('Hurray! purchase successful')
        
        let x = sumAmount-sum
        console.log(x)

        document.getElementById('wallet_balance').innerText=`Wallet-Balance: ${x}`

        localStorage.setItem('remainBalance', x)
        

        
    }
    localStorage.setItem('purchase', JSON.stringify(purchaseArr))

}    




