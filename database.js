
const storage = localStorage 

 const dataToJeson = (data)=> JSON.stringify(data)
 

 const jesnToData = (data)=> JSON.parse(data)


const setData = (key,value)=>{
   storage.setItem(key,dataToJeson(value))
   return true
}

const getData = (key)=>{
   return jesnToData(storage.getItem(key))
}


const menu = {
        pasta:{
            1 : ["aglio olio",8],
            2 : ["macaroni & cheese",10],
            3 : ['cremy beef pasta',13],
            4 : ["noodle",8],
            5 : ["noodle + chiken",13]
        },
        burger:{
           1 : ["crispy single",7.5],
           2 : ["crispy double",12],
           3 : ["beef patty single",8],
           4 : ["beef patty single(set)",10],
           6 : ["beef patty double",14],
           5 : ["beef patty double(set)",16],
           7 : ["wrap",8],
            
        },
        chicken:{
            1 : ["chicken pried(bone)",11],
            2 : ["chicken pried(boneless)",11],
        },
        snacks:{
            1: ["bullets + fries",8],
            2: ["nugget + fries",8],
            3: ["potato fries",7],
        },
        drinks:{
            1: ["rendom drinks",2]
        }

    }

    
    storage.getItem("menu") == null && setData("menu",menu) 
    storage.getItem("order") == null && setData("order",{}) 
    storage.getItem("orderNumber") == null && setData("orderNumber",1) 
    storage.getItem("optional") == null && setData("optional",{doneOrder : {}}) 
const MENU = getData("menu")
const orderpala = getData("order")
const optional = getData("optional")

  console.log(optional)