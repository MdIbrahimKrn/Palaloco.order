const perOrderUI = document.getElementById("per-order")
const perOrderBody = document.getElementById("per-order-body")

const getFullType = (type)=>{
    let fullType =""
    switch (type) {
        case "1":
            fullType = "chess"
            break;
        case "2":
            fullType = "spicy"
            break;
        case "3":
            fullType = "mix"
            break;
        case "4":
            fullType = "salted egg"
            break;
    
    }
    return fullType
}



const rendarOneCustomerData = (buyer,buyerName)=>{
    let price = 0;
    let html = `<div class="item ">   
    <h3 ondblclick = "deleteOrder('${buyerName}')">${buyerName} <span data-price = ${buyerName} class="price">${price}</span></h3>
    <div style = "font-weight: 800;
    font-style: normal; font-size:1.1em" class="sub-item">   
                <span>Item</span>
                <span>pis</span>
                <span>type</span>
                <span>+</span>
                <span>-</span>
            </div>`
    
    for (const item in buyer) {
        
      if (buyer.hasOwnProperty.call(buyer, item)) {
          for (const subItem of buyer[item]) {
            const data = menu[item][subItem[0]] 
            price += data[1];
         html +=   `
            <div class="sub-item">   
                <span>${data[0]}</span>
                <span>${subItem[1] != null ? subItem[1] : '' }</span>
                <span>${subItem[2] != null ? getFullType(subItem[2]) : '' }</span>
                <span>${subItem[3] != null ? subItem[3] : '' }</span>
                <span>${subItem[4] != null ? subItem[4] : '' }</span>
            </div>
            `

        }
        
    }
    } 
    html += `</div>`
    return [html,price]
    
    

}

const renderAllCustomerData = (orderpala,el)=>{
        for (const perCus in orderpala) {

            if (orderpala.hasOwnProperty.call(orderpala, perCus)) {
                let finalData = rendarOneCustomerData(orderpala[perCus],perCus)
                el.innerHTML+= finalData[0]
                document.querySelector(`[data-price=${perCus}]`).innerText = `Price: ${finalData[1]} RM`
           
            }

        }
    
}




const saveData = ()=>{
    setData("order",allData)
    setData("orderNumber",orderNumber+1)
    window.location.href = "index.html"
  }
  const deleteOrder = (customer)=>{
    if (confirm("Do You wanto DELETE!!") == true) {  
    delete orderpala[customer]
    setData("order",orderpala)
    window.location.href = "index.html"
}
}
