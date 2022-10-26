
const billInput = document.getElementById('billTotalInput');
console.log
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal");


let numberOfPeople = Number(numberOfPeopleDiv.innerText); 
bill = Number(billInput.value);

const calculateBill = () => { 
    
const tipPercentage = Number(tipInput.value)/100 
 
 const tipAmount = bill * tipPercentage


 
 const total = tipAmount + bill;
 console.log({total})
 const  perPersonTotal = total / numberOfPeople
 console.log(perPersonTotal)

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
 
}


const increasePeople = () => {

numberOfPeople +=1


numberOfPeopleDiv.innerText = numberOfPeople


calculateBill()
}


const decreasePeople = () => {
if (numberOfPeople <= 1){
    return
}
 
numberOfPeople-=1
  numberOfPeopleDiv.innerText = numberOfPeople

}
