const canif = {
    fixEmail: function (email) {
      var arr = email.toLowerCase().split("@");
      if (arr[1] === "gmail.com") {
        arr[0] = arr[0].replaceAll(".", "");
      }
      return arr[0] + "@" + arr[1];
    },

    fixNaN: function (num) { 
      var dec = parseFloat(num); 
      if (isNaN(dec)) {
        return 0;
      }
      var int = parseInt(dec);
      if (int < dec) {
        return dec;
      }
      return int;
    },

    getQtyByLetter: function (array) {
      // a,a,a,b,b,b,b,c,c,c,c,d,e,g,h,
      var arrFinal = [];
      var obj = { letter: array[0], qty: 1 };
      arrFinal.push(obj); // [{letter: a, qty: 3 },{letter: b, qty: 4 },{letter: c, qty: 4 }]
      for (let i = 1; i < array.length; i++) {
        const letter = array[i];
        if (letter === arrFinal[arrFinal.length - 1].letter) {
          arrFinal[arrFinal.length - 1].qty++;
        } else {
          var obj = { letter: letter, qty: 1 };
          arrFinal.push(obj);
        }
      }
      return arrFinal;
    },

    onlyLetter :function (array) {
    const alpha = ['A','B', 'C'] // ETC.
     for (var i = 0; i < array.length; i++) {
    const char = array[i];
    if (alpha.includes(char)) {
      break;
    }
  }
  return array.slice(i);
}
  
  };

var weekday = prompt("entrer a day").toLowerCase()
var text = ""

switch(weekday){
  case "sunday":
   text="hello";
   break;
   
   case "monday":
   text="hello";
   break;

   case "tuesday":
   text="hello";
   break;

   case "":
   text="hello";
   break;

   case  "":
   text="hello";
   break;

   case "":
   text="hello";
   break;

   default: "hello"
}