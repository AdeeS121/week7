window.addEventListener("load", getTitle);
window.addEventListener("load", getGreeting);
window.addEventListener("load", getOptions);
window.addEventListener("load", getFood);
window.addEventListener("load", getPayment);
window.addEventListener("load", getRunningTransactions);
window.addEventListener("load", getEndingTransactions);

const hide = (elem) => {
  elem.style.display = "none";
};

const show = (elem) => {
  elem.style.display = "block";
};

const toggle = (elem) => {
  if (window.getComputedStyle(elem).display !== "none") {
    hide(elem);
    return;
  }
  show(elem);
};

hide(document.querySelector("#endingTransactions-section"));


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
      selectTransaction = transOptions.selectTransactionMessage;
      startTransactions = transOptions.startTransaction;
      currentTransactions = transOptions.currentTransaction;
      exitTransactions = transOptions.exitTransaction;

      let output = "";
      output += `
      <h3>${selectTransaction}</h3>
      <div>
        <form class="" action="" method="post" enctype="text/plain">

        <label>${startTransactions}</label>
      <input type="checkbox" id="start" name="start-transactions" value=""><br>



        <label>${currentTransactions}</label>
        <input type="checkbox" id="current" name="current-transactions" value=""><br>

        <label>${exitTransactions}</label>
        <input type="checkbox" id="exit" name="exit-transacton" value=""><br>

        <input type="submit" name="">
        </form>
      </div> 

        `;
      document.getElementsByClassName("options")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("options")[0].innerHTML = "Error";
    }

    hide(document.querySelector("#food-section"));
    document.querySelector("#start").addEventListener("click", showFoodSection);
    function showFoodSection(event) {
      show(document.querySelector("#food-section"));
    }

    hide(document.querySelector("#runningTransactions-section"));
    document
      .querySelector("#current")
      .addEventListener("click", showRunningTransactionsSection);
    function showRunningTransactionsSection(event) {
      toggle(document.querySelector("#runningTransactions-section"));
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

      choice1 = foodOptions.foodOption1.slice(5, 12);
      choice2 = foodOptions.foodOption2.slice(5, 11);
      choice3 = foodOptions.foodOption3.slice(5, 12);
      choice4 = foodOptions.foodOption4;

      let output = "";
      output += `     
 
<h3>${optionsMessage}</h3>
<div id="food-section>  
 
  <form class="" action="" method="post" enctype="text/plain">
  <label>${food1}</label>
<input type="checkbox" id="hotdog" name="hotdog" value=""><br>
  <label>${food2}</label>
  <input type="checkbox" id="soda" name="soda" value=""><br>
  <label>${food3}</label>
  <input type="checkbox" id="chips" name="chips" value=""><br>
  <label>${food4}</label>
  <input type="checkbox" id="startPayment" name="startPayment" value=""><br>
  <input type="submit" name="">
  </form>
   </div>
        `;

      document.getElementById("food").innerHTML = output;
    } else {
      document.getElementsByClassName("food").innerHTML = "Error";
    }
 
    hide(document.querySelector("#payment-section"));
    document
      .querySelector("#startPayment")
      .addEventListener("click", startPaymentSection);

    function startPaymentSection(event) {
      show(document.querySelector("#payment-section"));
     hide(document.querySelector("#food-section"));
    }

    document.getElementById("hotdog").addEventListener("click", function () {
      document.getElementById("message1").innerHTML = `You added a ${choice1}  
          `;
    });

    document.getElementById("soda").addEventListener("click", function () {
      document.getElementById("message1").innerHTML = `You added a ${choice2}  
          `;
    });

    document.getElementById("chips").addEventListener("click", function () {
      document.getElementById("message1").innerHTML = `You added ${choice3}
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
      paySection = payOptions.paymentSectionMsg;
      startPayment = payOptions.startPayMsg;
      paymentOption = payOptions.startPayMethod;
      totalOfTransactions = payOptions.paymentTotal;
      payByCash = payOptions.paymentCash;
      payByCredit = payOptions.paymentCredit;
      paymentMethod = payOptions.paymentChoiceSelection;
      paymentThanks = payOptions.paymentSelectionMsg;

      cashChoice = payOptions.paymentCash.slice(3);
      creditChoice = payOptions.paymentCredit.slice(3);

      let output = "";
      output += `
    

<div id="payment-section">  

<h3>${paySection}</h3>
  <h4>${startPayment}</h4><br>
      <h3>${totalOfTransactions}</h3>
      <h3>${paymentOption}</h3><br>

      <form class="" action="" method="post" enctype="text/plain"> 
      <label>${payByCash}</label>
    <input type="checkbox" id="cash" name="cash" value=""><br>
      <label>${payByCredit}</label>
      <input type="checkbox" id="credit" name="credit" value=""><br>
      <input type="submit" name=""</input>
      </form>
</div>
            `;
      document.getElementsByClassName("payment")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("payment")[0].innerHTML = "Error";
    }

    document.getElementById("cash").addEventListener("click", function () {
      document.getElementById(
        "message2"
      ).innerHTML = `You selected ${cashChoice}`;
    });

    document.getElementById("credit").addEventListener("click", function () {
      document.getElementById(
        "message2"
      ).innerHTML = `You selected ${creditChoice}`;
      console.log(creditChoice);
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



    document.querySelector("#exit").addEventListener("click", showEndingTransactionsSection);
  function showEndingTransactionsSection(event) {
    toggle(document.querySelector("#endingTransactions-section"));
 hide(document.querySelector(".welcome"));
    hide(document.querySelector("#options-section"));
    hide(document.querySelector("#payment-section"));
    hide(document.querySelector("#food-section"));
    hide(document.querySelector("#food-section"));


  }
   
  };
  xhr.open("GET", "http://localhost:3000/endingTransactions", true);
  xhr.send();
}
