function printObj(obj,dotNotation) {
  var dotNotation=dotNotation || ''
  for (var key in obj){
    if(typeof obj[key]=="object")
      printObj(obj[key],key+".")
    else
    document.writeln(dotNotation+key+": " +obj[key]+"<br>")
  }
}
var obj = {
  name:"Mohamed Elgendy",
  age:"25",
  grades:{
    math:"100",
    science:"99",
    literatue:"70"
  },
  contactInfo:{
    email:"mohamed20elgendy@gmail.com",
    phone:"01091734337"
  }
}

printObj(obj)

