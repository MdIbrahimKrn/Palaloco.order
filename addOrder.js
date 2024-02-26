const showMenuBody = document.getElementById("show-menu-body")
const addOrderButton = document.getElementById("add-order")
const showOrderEl = document.querySelector("[data-show-order]")
let orderNumber = getData("orderNumber")
const giveFullTitle = (sortTitle)=>{
    let title ="" 
    switch (sortTitle) {
        case "pasta":
            title = "PASTA & NOODLES";
            break;
        case "burger":
            title = "burger & wrap";
            break;
        case "snacks":
            title = "snacks";
            break;
        case "drinks":
            title = "random drinks";
            break;
        case "chicken":
            title = "fried chicken";
            break;
    }
    return title;
    
}
const showMenu = (menu)=>{
    let html = ""
    for (const item in menu) {

        if (menu.hasOwnProperty.call(menu, item)) {
            const ans = menu[item];
            html += `<div class="item order-item">
            <h3 data-orderItemName = "${item}">${giveFullTitle(item)}</h3>
            <div class ="hide" data-orderItem = "${item}">
            <div style = "font-weight: 800;
            font-style: normal; font-size:1.1em" class="sub-item">   
                        <span>Item Name</span>
                        <span>pic</span>
                        <span>typ</span>
                        <span>+</span>
                        <span>-</span>
                        <span>pric</span>
                    </div>`
            for (const subItem in ans) {
                if (ans.hasOwnProperty.call(ans, subItem)) {
                    const element = ans[subItem];
                    html += `
                    <div data-${item}="krn${subItem}" class="sub-item">   
                        <span> ${element[0]}</span>
                        <span><input data-pic-${item+subItem} style="width: 100%;" value = "1" type="number"></span>
                        <span><select data-type-${item+subItem} style="width: 70%;" name="" id="">
                            <option selected value="1">chess</option>
                            <option value="2">spicy</option>
                            <option value="3">mix</option>
                            <option value="4">salted egg</option>
                        </select></span>
                        <span><input data-add-${item+subItem} style="width: 100%;" type="text"></span>
                        <span><input data-min-${item+subItem} style="width: 100%;" type="text"></span>
                        <span >${element[1]} RM <button onclick = "addOrder(event)" data-add-order="${[item,subItem]}" class="add-order-btn">+</button></span>
                    </div>`
                        
                }
            }
            html += `</div> </div>`
            
        }
    }
    showMenuBody.innerHTML = html
}

showMenu(MENU)

// hide and show submenu form item name
const orderItems = document.querySelectorAll("[data-orderItemName]")
orderItems.forEach(element => {
   element.addEventListener("click",(e)=>{
        const name = e.target.dataset.orderitemname
        document.querySelector(`[data-orderItem=${name}]`).classList.toggle("hide")
   }) 
});


// add order

let allData = orderpala ;
const addData = (data)=>{
    let {customerName,item,subItem,pic,type,add,min}=data;
    
    if (allData.hasOwnProperty.call(allData, customerName)){

        if (allData[customerName].hasOwnProperty.call(allData[customerName],item)){
            allData[customerName][item].push([subItem,pic,type,add,min])
        }else{
            allData[customerName][item] = [] 
            allData[customerName][item].push([subItem,pic,type,add,min])

        }
    }else{
        allData[customerName] = {}
        allData[customerName][item]=[]
        allData[customerName][item].push([subItem,pic,type,add,min])

    }
    let xxx = rendarOneCustomerData(allData[customerName],customerName)
    showOrderEl.innerHTML = xxx[0]
    document.querySelector(`[data-price=${customerName}]`).innerText = `Price: ${xxx[1]} RM`

    
    


}
const getOrderData = (orderId)=>{
    let customerNameEl = document.querySelector("[data-customer-name]")
    let customerName = customerNameEl.value == "" ? `Customer${orderNumber}`:customerNameEl.value
    const [item,subItem] = orderId
    const orderIs = document.querySelector(`[data-${item}=krn${subItem}]`)
    const pic = orderIs.querySelector(`[data-pic-${item+subItem}]`).value
    const type = orderIs.querySelector(`[data-type-${item+subItem}]`).value
    const add = orderIs.querySelector(`[data-add-${item+subItem}]`).value
    const min = orderIs.querySelector(`[data-min-${item+subItem}]`).value
    
    addData({customerName,item,subItem,pic,type,add,min})
    customerNameEl.disabled = true;
}
 const addOrder = (e)=>{
    const orderId =  e.target.dataset.addOrder.split(",")
   getOrderData(orderId)

  }

  console.log(showOrderEl)