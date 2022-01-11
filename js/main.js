
/*var nom = prompt("enter your name,please!").toLowerCase().split(""); 


function list (nom){
    var voyelle =[]
    var conson =[]
    const arr =["a","e","i","o","u","y"]
    for (var i = 0; i < nom.length; i++) {            
        const element = nom[i];
        
        
        if (arr.includes(element )) {    
            voyelle.push(element);                             
        } else 
            conson.push(element);                              
            
            var text=`voici les voyelle ${voyelle}, et voici les console${conson}`
        
        
    }return text
}
alert(list(nom))

var div = document.querySelector("div");


div.addEventListener("mousemove", create);
div.addEventListener("click", myClick);

function create(e) {
   
  var newDiv = `<div style='top:${e.clientY}px; left:${e.clientX}px;' class='new-block'></div>`;
  div.innerHTML += newDiv;
}

function myClick(e) {
    if(e.pointerType == "touch") {
        alert("YOu can't play on a touchscreen")
    }
}*/
/*
var email= document.getElementById("#email")
var password=document.getElementById("#password")
var divMain=document.getElementById("#main")
var btn=document.getElementById("#button")
var divError=document.getElementById("error")
var checkboox


email.addEventListener("change",verifyEmail)
password.addEventListener("change",verifypassword)
check.addEventListener("change",activateBtn)


function activateBtn(params) {
    if (checkboox.checked) {
        btn.addEventListener("click"submit)
    } else {
        btn.removeEventListener("click" submit)
    }
    
}

function verifyEmail() {
    if (email.value.length>6 && email.value.includes("@")) {
        password.style.display="block"
    }
}

function verifypassword() {
    if (password.value.length>5 && email.value.includes("@")) {
        check.style.display="block"
    }
}





const user =[
    {email:"",pass:"",fName:""},
    {email:"",pass:"",fName:""},
    {email:"",pass:"",fName:""},

]
 function submit () {
     var fName = null
     for (let i = 0; i < user.length; i++) {
         const u = user[i];
         if(u.email==email.value&&u.pass==password.value){
             fName=u.fName;
             break
         }
     }
     if (fName) {
         var html =`<h1></h1>`
     }
 }

user.forEach(createHTML)

function createHTML(azerty) {
    console.log(azerty)


    
}*/

const cars =[
    {  
        plate:1,
        marqu :"FERRARI",
        model :"F8",
        cathegorie:"SPORT",
        price:"400 000 €",
        image:"ferrari.jpg",
    },
    {   
        plate:2,
        marqu:"TESLA",
        model:"model X",
        cathegorie:"FAMILLE",
        price:"100 000 €",
        image:"tesla.jpg",
    },
    {
        plate:3,
        marqu:"MERCEDES BENZ",
        model:"viano",
        cathegorie:"BUISSNES/FAMILLE",
        price:"70 000 €",
        image:"mercedes_benz_viano.jpg",
    },
    {
        plate:4,
        marqu:"ROLL ROYCE",
        model:"cullinan",
        cathegorie:"LUXE",
        price:"500 000 €",
        image:"roll_royce.jpg",
    },
    {
        plate:5,
        marqu:"JAGUAR",
        model:"XJ50",
        cathegorie:"LUXE",
        price:"80 000 €",
        image:"jaguar.jpg",
    },
]

var i =0

var toAppend =""

cars.forEach(createHTML)
var element =document.getElementById("main")
element.innerHTML+=toAppend


function createHTML(car,i) {
    
    toAppend+=`<div id="car${i+1}" class="if">
                    <h3 class="cathegorie">${car.cathegorie}</h3>
                    <div class="image"><img src="C:/Users/David/Desktop/webschool/projet-js/assets/image/${car.image}" alt="voiture" ></div>
                    </br>
                    <p class="marque">${car.marqu}</p>  
                    </br>
                    <p class="model">${car.model}</p>
                    </br>
                    <p class="price">${car.price}</p>
                    </br>
                    <button class="delete${car} close" onclick="annule(${i+1},cars)">x</button></div>`
    
}


function annule(car,arr,) {
    var myDelete =document.getElementById(`car${car}`)
    myDelete.remove();
    //arr==arr.splice(car-1,1)
   
}

var cathegorie=["LUXE","BUISSNES","FAMILLE","SPORT"];



    var div=document.createElement("div");
    var input=document.createElement("input");
    input.type="checkbox";
    input.value=cat;
    input.toupperCase();




    div.appendChild(input);





