let dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const btnCheck = document.querySelector("#btn-check");
const displayMsg = document.querySelector("#display-message");


function luckyOrNot(){
    if(luckyNumber.value && dob.value != ""){

        const dateOfBirth = dob.value;
        sum = calculateSum(dateOfBirth);
        checkIfLucky(sum);
    }else{
        displayMsg.innerText = "Please Select Date & Enter a Lucky Number First";
    }
    
}

function checkIfLucky(sum){
    if(sum % luckyNumber.value === 0){
        displayMsg.innerText = "You are lucky enough";
    }
    else{
        displayMsg.innerText = "Sorry ! not a lucky date";
    }

}

function calculateSum(dateOfBirth){
   const dob = dateOfBirth.replaceAll("-","");
   let sum=0;

   for(let i=0; i<dob.length; i++){

    sum = sum + Number(dob.charAt(i)); 
    
   }
   return sum;
  
}


btnCheck.addEventListener("click", luckyOrNot)

 