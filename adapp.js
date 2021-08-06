// window.addEventListener("load", title);
// window.addEventListener("load", getGreeting);
// window.addEventListener("load", getOptions);
// window.addEventListener("load", getFood);
// window.addEventListener('load', getPayment)
window.addEventListener('load', getRunningTransactions)
// window.addEventListener('load', getEndingTransactions)

function title() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/greeting", true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      document.getElementById("title").innerHTML = xhr.responseText;
    } else {
      document.getElementById("title").innerHTML = "Not Found";
    }
  };
  xhr.send();
}

function getGreeting() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      document.getElementById("welcome").innerHTML = xhr.response;
    } else {
      document.getElementById("welcome").innerHTML = "Not Found";
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
      output += "<h1>" +transOptions.selectTransactionMessage+ "</h1>" +
      "<ul>" +
        "<li>" + transOptions.startTransaction + "</li>" +
        "<li>" + transOptions.currentTransaction + "</li>" +
        "<li>" + transOptions.exitTransaction + "</li>" +
        "</ul>" 
         document.getElementById('options').innerHTML = output;
    } else {
      document.getElementById("options").innerHTML = "Error"
    }
  };
  xhr.open("GET", "http://localhost:3000/options", true);
  xhr.send();
}

function getFood() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log(xhr.response)
      const foodOptions = JSON.parse(xhr.response);
      let output = "";
      output += "<h1>" +foodOptions.foodOptionSelectMsg+ "</h1>" +
      "<ul>" +
        "<li>" + foodOptions.foodOption1 + "</li>" + 
        "<li>" + foodOptions.foodOption2 + "</li>" +
        "<li>" + foodOptions.foodOption3 + "</li>" +
        "<li>" + foodOptions.foodOption4 + "</li>" +
        "</ul>" +
        "<h2>Select an item:</h2>" +
        "<h2>~~ You add a ~~</h2>"
      document.getElementById("food").innerHTML = output;
    } else {
      document.getElementById("food").innerHTML = "Error";
    }
  };
  xhr.open("GET", "http://localhost:3000/food", true);
  xhr.send();
}

function getPayment() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      const payOptions = JSON.parse(xhr.response);
      let output = "";
      output += "<h1>" +payOptions.paymentSectionMsg+ "</h1>" +
      "<h1>" +payOptions.startPayMsg+ "</h1>" +
      "<ul>" + 
        "<h2>" + payOptions.paymentTotal + "</h2>" +
        "<li>" + payOptions.paymentCash + "</li>" +
        "<li>" + payOptions.paymentCredit + "</li>\n" +
        "<li>" + payOptions.paymentChoiceSelection + "</li>" +
        "<li>" + payOptions.paymentSelectionMsg + "</li>" +
        "</ul>" 
      document.getElementById("payment").innerHTML = output;
    } else {
      document.getElementById("payment").innerHTML = "Error";
    }
  };
    xhr.open("GET", "http://localhost:3000/payment", true);
  xhr.send();
};

function getRunningTransactions() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    console.log(xhr.response)
    if (xhr.status == 200) {
const runningTransaction = JSON.parse(xhr.response)
let output = [{}];
output += "<div>" +runningTransaction.currentTotal+ " , " + runningTransaction.currentCashSelect+ "/" + runningTransaction.currentCreditSelect+ "</div>"

// currentRunningTransactions.currentCashSelect+ currentRunningTransactions.currentCreditSelect+ "</div>"
// output += "<div>" +currentRunningTransactions.currentTotal + currentRunningTransactions.currentCashSelect+ currentRunningTransactions.currentCreditSelect+ "</div>"
      document.getElementById("running-transactions").innerHTML = output;
    } else {
      document.getElementById("running-transactions").innerHTML = "Not Found";
    }
  };
  xhr.open("GET", "http://localhost:3000/runningTransactions", true);
  xhr.send();
};

// function getEndingTransactions() {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://localhost:3000/endingTransactions", true);
//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       document.getElementById("ending-transactions").innerHTML = xhr.responseText;
//     } else {
//       document.getElementById("ending-transactions").innerHTML = "Not Found";
//     }
//   };
//   xhr.send();
// };


