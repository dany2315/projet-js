
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
        marqu :"FERRARI",
        model :"F8",
        cathegorie:["SPORT"],
        price:"400 000 €",
        image:"ferrari.jpg",
    },
    {   
        marqu:"TESLA",
        model:["model X"],
        cathegorie:"FAMILLE",
        price:"100 000 €",
        image:"tesla.jpg",
    },
    {
        marqu:"MERCEDES BENZ",
        model:"viano",
        cathegorie:["BUISSNES","FAMILLE"],
        price:"70 000 €",
        image:"mercedes_benz_viano.jpg",
    },
    {
        marqu:"ROLL ROYCE",
        model:"cullinan",
        cathegorie:["LUXE"],
        price:"500 000 €",
        image:"roll_royce.jpg",
    },
    {
        marqu:"JAGUAR",
        model:"XJ50",
        cathegorie:["LUXE"],
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
    
    toAppend+=`<div id="car${i+1}"  class="if ${car.cathegorie}" >
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


function annule(car,) {
    var myDelete =document.getElementById(`car${car}`)
    myDelete.remove();
    
}

var cathegorie=["LUXE","BUISSNES","FAMILLE","SPORT"];
var i =0;
    cathegorie.forEach(createInput)
function createInput(cat,i) {
    var div=document.getElementById("box")
    var input=document.createElement("input");
    input.type="checkbox";
    input.className="check";
    input.value=cat
    input.addEventListener("click",affiche)

    var label=document.createElement("label")
    label.className="nom";
    label.innerText=cat
    //document.getElementById("Target").innerHTML += "<br>"

    var br=document.createElement("br")
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(br);
    
    

  //  document.querySelectorAll(label).innerHTML="</br>";
  

}
function affiche() {
    
    cathegorie.forEach(cad) //luxe
    function cad(cat,i) {   //luxe  1
        
        if (cat=search) {
            var caseHtml=document.ge
        }
        
        voiture.style.display="block"

        
    }
}
var voiture =document.getElementsByClassName(`${cat}`)
var search=document.createElement("input");
search.className="search";
search.type="text";
search.value.toUpperCase();


var btn=document.createElement("button");
btn.className="select";
btn.innerText="selectionner";
//btn.addEventListener("click",searchCathegorie);


document.getElementById("barre").appendChild(search);
document.getElementById("barre").appendChild(btn);

/*function searchCathegorie() {
   
    var valeur = search.value
    
    
    cathegorie.forEach(affiche) //luxe
    function affiche(cat,i) {   //luxe     1 
        var voiture = document.getElementById(`${cat}`)
           
            if (cat=valeur) {
                
            voiture.style.display="block"

            }else
            voiture.style.display="none"
    }
}


   
*/