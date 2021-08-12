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
      document.getElementsByClassName("title")[0].innerHTML = xhr.response;
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
      document.getElementsByClassName("welcome")[0].innerHTML = xhr.response;
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
      <li>${foodOptions.foodOption1}</li>
      <li>${foodOptions.foodOption2}</li> 
      <li>${foodOptions.foodOption3}</li> 
      <li>${foodOptions.foodOption4}</li>
        </ul>  
        <h4>${foodOptions.foodAddedMsg}</h4>`
      document.getElementsByClassName("food")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("food")[0].innerHTML = "Error";
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
      <div>${runningTransaction.currentTotalAndCashOrCreditPay}</div>`
     
      document.getElementsByClassName("running-transactions")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("running-transactions")[0].innerHTML = "Not Found";
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
      document.getElementsByClassName("ending-transactions")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("ending-transactions")[0].innerHTML = "Not Found";
    }
  };
  xhr.open("GET", "http://localhost:3000/endingTransactions", true);
  xhr.send();
}
