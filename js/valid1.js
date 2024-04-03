function f1fun(){
    var text = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (text == "" && email == "") {
        alert("Please fill out all fields");
        frm1.name.focus();
        return false;
    }
    else if(text == ""){
        alert("Please fill out Name field");
        frm1.name.focus();
        return false;
    }
    else if(email == ""){
        alert("Please fill out Email field");
        frm1.email.focus();
        return false;
    }
    else{
        alert("Thank you for submitting the form "+text);

    }

}

function BMI(){
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;
    var result = parseFloat(w)/parseFloat((h/100)**2);
    if (result < 18.5) {
        category = "Underweight";
      } else if (result < 25) {
        category = "Normal weight";
      } else if (result < 30) {
        category = "Overweight";
      } else {
        category = "Obese";
      }
    document.getElementById("bmi").innerHTML = result;
    document.getElementById("category").innerHTML = category;
}
   
function dis(){
  var c = parseFloat(document.getElementById("time").value);
var fee = 10000;
var discount = 0;

if (c < 6) {
    discount = 0.05;
} else if (c < 10) {
    discount = 0.10;
} else if (c < 17) {
    discount = 0.15;
}

fee = fee - discount * fee;

document.getElementById("discount").innerHTML = (discount * 100) + "%";
document.getElementById("fee").innerHTML = fee.toFixed(2);

}
function markExe() {
  var m1 = exe.question0.value;
  var m2 = exe.question1.value;
  var m3 = exe.question2.value;
  var marks = Number(m1) + Number(m2) + Number(m3);
  alert("You have " + marks + " Ratings!!");
  return false;
}

function reload(){
  window.open("window.html","_blank", "","width=200,height=100");

}