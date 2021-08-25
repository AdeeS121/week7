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
      let selectTransaction = transOptions.selectTransactionMessage;
      let startTransaction = transOptions.startTransaction;
      let currentTransaction = transOptions.currentTransaction;
      let exitTransactions = transOptions.exitTransaction;

      let output = "";
      output += `<h3>${selectTransaction}</h3>
      <h5>${startTransaction}</h5>
      <h5>${currentTransaction}</h5>
      <h5>${exitTransactions}</h5>
        `;
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
      optionsMessage = foodOptions.foodOptionSelectMsg;
      food1 = foodOptions.foodOption1;
      food2 = foodOptions.foodOption2;
      food3 = foodOptions.foodOption3;
      food4 = foodOptions.foodOption4;

      let output = "";
      output += `     
  <h3>${optionsMessage}</h3>
   <p>
  <label for="food1"> <input type="checkbox" name="food" value="${food1}" id="food1" />${food1}</label>
  </p>
  <p>
  <label for="food2"> <input type="checkbox" name="food" value="${food2}" id="food2" />${food2}</label>
  </p>
  <p>
  <label for="food3"> <input type="checkbox" name="food" value="${food3}" id="food3" />${food3}</label>
  </p>  
  <p>
  <label for="food4"> <input type="checkbox" name="food" value="${food4}" id="food4" />${food4}</label>
  </p>     
        `;

      document.getElementById("food").innerHTML = output;
    } else {
      document.getElementsByClassName("food").innerHTML = "Error";
    }

      document.getElementById("food1").addEventListener("click", function () {
        document.getElementById(
          "message1"
        ).innerHTML = `You added a ${food1.slice(5, 12)}  
          `;
      });

    document.getElementById("food2").addEventListener("click", function () {
      document.getElementById(
        "message1"
      ).innerHTML = `You added a ${food2.slice(5, 12)}  
          `;
    });

    document.getElementById("food3").addEventListener("click", function () {
      document.getElementById("message1").innerHTML = `You added ${food3.slice(
        5,
        12
      )}
          `;
    });
  };
  xhr.open("GET", "http://localhost:3000/food", true);
  xhr.send();
}

function getPayment() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      const payOptions = JSON.parse(xhr.response);
      let paySection = payOptions.paymentSectionMsg;
      let startPayment = payOptions.startPayMsg;
      let paymentOption = payOptions.startPayMethod;
      let totalOfTransactions = payOptions.paymentTotal;
      let payByCash = payOptions.paymentCash;
      let payByCredit = payOptions.paymentCredit;
      let paymentMethod = payOptions.paymentChoiceSelection;
      let paymentThanks = payOptions.paymentSelectionMsg;

      let output = "";
      output += `<h3>${paySection}</h3><br><br>
      <h4>${startPayment}</h4><br>
      <h3>${totalOfTransactions}</h3>
      <h3>${paymentOption}</h3><br>

      <p>
      <label for="cash-payment"><input type="checkbox" name="payment" value="${payByCash}" id="cash-payment" />${payByCash}</label>
      </p>
      <p>
      <label for="credit-payment"><input type="checkbox" name="payment" value="${payByCredit}" id="credit-payment" />${payByCredit}</label>
      </p>
      <h4>${paymentMethod}</h4>
      <h4>${paymentThanks}</h4>
      
            `;
      document.getElementsByClassName("payment")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("payment")[0].innerHTML = "Error";
    }

    document.getElementById("cash-payment").addEventListener("click", function() {
      document.getElementById("message2").innerHTML = ``;
      
    });

    document.getElementById("cash-payment").addEventListener("click", function() {
      document.getElementById("message2").innerHTML = `${payByCredit}`;
    });

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
