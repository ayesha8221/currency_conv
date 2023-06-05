// rands to dollars
let rands = document.getElementById('inputRands').value
let dollars

function RandsConv(valNum) {
     document.getElementById("dollars").innerHTML = (valNum / 19.38).toFixed(2) ;
     document.getElementById("euros").innerHTML = (valNum / 20.74).toFixed(2) ;
     document.getElementById("pounds").innerHTML = (valNum / 24.03).toFixed(2) ;
  }

  function DollarsConv(valNum) {
    document.getElementById("dollars").innerHTML = (valNum / 19.38).toFixed(2) ;
    document.getElementById("euros").innerHTML = (valNum / 20.74).toFixed(2) ;
    document.getElementById("pounds").innerHTML = (valNum / 24.03).toFixed(2) ;
 }

//   if (condition) {
    
//   } else {
    
//   }
  
// function RandstoEuro(valNum) {
//     
//   }
// function RandstoPounds(valNum) {
//     document.getElementById("pounds").innerHTML = valNum / 24.03 ;
//   }
