window.addEventListener("load", getTitle);
window.addEventListener("load", getGreeting);
window.addEventListener("load", getOptions);
window.addEventListener("load", getFood);
window.addEventListener("load", getPayment);
window.addEventListener("load", getRunningTransactions);
window.addEventListener("load", getEndingTransactions);

function getTitle() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      const webpageTitle = JSON.parse(xhr.response);
      let output = `${webpageTitle.welcome}`;
      document.getElementsByClassName("title")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("title")[0].innerHTML = "Not Found";
    }
  };
  xhr.open("GET", "http://localhost:3000/greeting", true);
  xhr.send();
}

function getGreeting() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      const welcomepage = JSON.parse(xhr.response);
      let output = `
      <h1>${welcomepage.welcome}</h1>
      `;
      document.getElementsByClassName("welcome")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("welcome")[0].innerHTML = "Not Found";
    }
  };
  xhr.open("GET", "http://localhost:3000/greeting", true);
  xhr.send();
}

function getOptions() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      const transOptions = JSON.parse(xhr.response);
      let output = "";
      output += `<h3>${transOptions.selectTransactionMessage}</h3>
      <ul>
        <li>${transOptions.startTransaction}</li>
        <li>${transOptions.currentTransaction}</li>
        <li>${transOptions.exitTransaction}</li>
        </ul>`;
      document.getElementsByClassName("options")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("options")[0].innerHTML = "Error";
    }
  };
  xhr.open("GET", "http://localhost:3000/options", true);
  xhr.send();
}

function getFood() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      const foodOptions = JSON.parse(xhr.response);
      let output = "";
      output += `<h3>${foodOptions.foodOptionSelectMsg}</h3>
      <ul>
      <li>${foodOptions.foodOption1}</li><button class="button1">HI there</button>
      <li>${foodOptions.foodOption2}</li> 
      <li>${foodOptions.foodOption3}</li> 
      <li>${foodOptions.foodOption4}</li>
        </ul>  
        <h4>${foodOptions.foodAddedMsg}</h4>`;
      document.getElementsByClassName("food")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("food")[0].innerHTML = "Error";
    }
  };
  xhr.open("GET", "http://localhost:3000/food", true);
  xhr.send();
}

document.getElementById("button1").addEventListener("click", function (e) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/food");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status == 200) {
      document.getElementById("message").innerHTML = xhr.response;
    }
  };
  xhr.send(JSON.stringify({ food: "test", price: "7.00" }));
});

function getPayment() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      const payOptions = JSON.parse(xhr.response);
      let output = "";
      output += `<h3>${payOptions.paymentSectionMsg}</h3><br><br>
      <h4>${payOptions.startPayMsg}</h4><br>
      <h3>${payOptions.paymentTotal}</h3>
      <h3>${payOptions.startPayMethod}</h3><br>
      <ul>
      <h4>${payOptions.paymentCash}</h4>
      <h4>${payOptions.paymentCredit}</h4><br>
      <h4>${payOptions.paymentChoiceSelection}</h4>
      <h4>${payOptions.paymentSelectionMsg}</h4>
      </ul>`;
      document.getElementsByClassName("payment")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("payment")[0].innerHTML = "Error";
    }
  };
  xhr.open("GET", "http://localhost:3000/payment", true);
  xhr.send();
}

function getRunningTransactions() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      const runningTransaction = JSON.parse(xhr.response);
      let output = "";
      output += `<h3>${runningTransaction.currentTransactionsMsg}</h3><br>
      <div>${runningTransaction.currentTotalAndCashOrCreditPay}</div>`;

      document.getElementsByClassName("running-transactions")[0].innerHTML =
        output;
    } else {
      document.getElementsByClassName("running-transactions")[0].innerHTML =
        "Not Found";
    }
  };
  xhr.open("GET", "http://localhost:3000/runningTransactions", true);
  xhr.send();
}

function getEndingTransactions() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      const finalTransactions = JSON.parse(xhr.response);
      let output = "";
      output += `<h3>${finalTransactions.endingDayIsOverMsg}</h3><br>
      <h4>${finalTransactions.endingCongratsMsg}</h4>
      <h4>${finalTransactions.endingNumberOfTransactions}</h4>
      <h4>${finalTransactions.endingTotalSales}</h4><br>
      <h4>${finalTransactions.endingFarewell}</h4>`;
      document.getElementsByClassName("ending-transactions")[0].innerHTML =
        output;
    } else {
      document.getElementsByClassName("ending-transactions")[0].innerHTML =
        "Not Found";
    }
  };
  xhr.open("GET", "http://localhost:3000/endingTransactions", true);
  xhr.send();
}

// /////  BUTTON ELEMENT PRACTICE ////////////////

// // document.getElementById("button1").addEventListener("click", loadUser);
// // function loadUser() {
//   let xhr = new XMLHttpRequest()
//    xhr.onload = function() {
// if (xhr.status == 200) {
//   const response = JSON.parse(xhr.response)

//   // document.getElementsByClassName('message')[0].textContent = server.response.userName + serverResponse.suffix
// }
// };
// const json = {
//   "email": "eve@gmail.com",
//   "password": "countrypumpkin"
// }

// xhr.open('POST', 'http://localhost:3000/food', true )
// xhr.setRequestHeader('Content-Type', 'application/json')
// xhr.send(JSON.stringify(json))

//   ;
//   xhr.open("POST", "http://localhost:3000/food", true);
//  xhr.setRequestHeader("Content-Type", "application/json")

// const body = JSON.stringify({food: 'coffee', suffix: 'loves cats!'})
// xhr.send(body)

//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       let foodOptions = JSON.parse(xhr.response);
//       console.log(foodOptions.foodOption1)
//       let output = "";
//       output += `
//   <h3>ID: ${foodOptions.foodOption3}</h3>
//   `;
//       document.getElementById("user").innerHTML = output;
//     }
//     //   xhr.onerror = function(){
//     //       console.log("Error during transaction")
//     //   }
//   };
//   xhr.send();
// }

// Select all buttons
// let btns = document.querySelectorAll('button');
// for(i of btns) {
//   i.addEventListener('click', function() {
//     document.querySelector('.msg').innerHTML = this.innerHTML;
//   })
// }

// Create food POST Method//

// xhr = new XMLHttpRequest();
// // let stern = "Yummy"
// // let taskDescription = document.getElementsByClassName('food').value
// let params = {
//   foodItem: foodItemAndPrice.foodItem,
//   price: foodItemAndPrice.price
// }
// xhr.open("POST", "http://localhost:3000/food", true)
// xhr.setRequestHeader("Content-Type", "application/json")
// xhr.onload = function() {
//   if (xhr.status == 200) {
// console.log("New recorxd add")
// let params = JSON.parse(xhr.response)

// }
// let body = JSON.stringify({foodItem: "bod", price: "hello world"})
// xhr.send(params)
// }

// document.getElementById("newTask").addEventListener('click', addNewTask)
// function addNewTask() {
//   console.log("add new Task")

// const form = document.querySelector('#signup-form');

// // listen for submit even
// form.addEventListener('submit', () => {
//     // TODO: submit post request here
// });

// form.addEventListener('submit', (event) => {

//   // disable default action
//   event.preventDefault();

//   // configure a request
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', '/signup');

//   // prepare form data
//   let data = new FormData(form);

//   // set headers
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

//   // send request
//   xhr.send(data);

//   // listen for `load` event
//   xhr.onload = () => {
//       console.log(xhr.responseText);
//   }

// });

// var xhr = new XMLHttpRequest();
// var params = 'field1='+postfield1+'&field2='+postfield2;
// xhr.open('POST', 'http://exmaple.com', true);

// //Send the proper header information along with the request
// xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// xhr.onload = function() {//Call a function when the state changes.
//     if(xhr.status == 200) {
//         alert(this.responseText);
//     }
// }
// xhr.send(params);

// var xhr = new XMLHttpRequest();
// xhr.open("POST", yourUrl, true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(JSON.stringify({
//     value: value
// }));
