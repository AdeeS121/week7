window.addEventListener("load", getTitle);
window.addEventListener("load", getGreeting);
window.addEventListener("load", getOptions);
window.addEventListener("load", getFood);
window.addEventListener("load", getPayment);
window.addEventListener("load", getRunningTransactions);
window.addEventListener("load", getEndingTransactions);
window.addEventListener("load", getFoodData);

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

show(document.querySelector(".welcome"));
show(document.querySelector(".options-section"));
hide(document.querySelector(".food-section"));
hide(document.querySelector(".message1"));
hide(document.querySelector(".payment-section"));
hide(document.querySelector(".runningTransactions-section"));
hide(document.querySelector(".endingTransactions-section"));

// show(document.querySelector(".welcome"));
// show(document.querySelector(".options-section"));
// show(document.querySelector(".food-section"));
// show(document.querySelector(".message1"));
// show(document.querySelector(".payment-section"));
// show(document.querySelector(".runningTransactions-section"));
// show(document.querySelector(".endingTransactions-section"));

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

        <form class="foods" action="" method="post" enctype="text/plain">
        
        <label>${startTransactions}</label>
        <input type="radio" id="start" name="start" value=""><br>

        <label>${currentTransactions}</label>
        <input type="radio" id="current" name="current" value=""><br>

        <label>${exitTransactions}</label>
        <input type="radio" id="exit" name="exit" value=""><br>

        <input type="submit" name="">
        </form>

        `;
      document.getElementsByClassName("options-section")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("options-section")[0].innerHTML = "Error";
    }

    document.querySelector("#start").addEventListener("click", showFoodSection);
    function showFoodSection(event) {
      show(document.querySelector(".food-section"));
      show(document.querySelector(".message1"));
    }

    document
      .querySelector("#current")
      .addEventListener("click", showRunningTransactionsSection);
    function showRunningTransactionsSection(event) {
      show(document.querySelector(".runningTransactions-section"));
    }

    document
      .querySelector("#exit")
      .addEventListener("click", showEndingTransactionsSection);
    function showEndingTransactionsSection(event) {
      hide(document.querySelector(".welcome"));
      hide(document.querySelector(".options-section"));
      hide(document.querySelector(".food-section"));
      hide(document.querySelector(".message1"));
      hide(document.querySelector(".payment-section"));
      hide(document.querySelector(".runningTransactions-section"));
      show(document.querySelector(".endingTransactions-section"));
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
        `;

      document.getElementsByClassName("food-section")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("food-section").innerHTML = "Error";
    }

    document.getElementById("hotdog").addEventListener("click", function () {
      document.getElementsByClassName(
        "message1"
      )[0].innerHTML = `You added a ${choice1}  
          `;
    });

    document.getElementById("soda").addEventListener("click", function () {
      document.getElementsByClassName(
        "message1"
      )[0].innerHTML = `You added a ${choice2}  
          `;
    });

    document.getElementById("chips").addEventListener("click", function () {
      document.getElementsByClassName(
        "message1"
      )[0].innerHTML = `You added ${choice3}
          `;
    });

    document
      .getElementById("startPayment")
      .addEventListener("click", function () {
        show(document.querySelector(".payment-section"));
        hide(document.querySelector(".food-section"));
        hide(document.querySelector(".message1"));
        // document.getElementsByClassName("message1")[0].innerHTML = `You added ${choice3}
        //     `;
      });
  };
  xhr.open("GET", "http://localhost:3000/food", true);
  xhr.send();
}

function getFoodData() {
  let xhr = new XMLHttpRequest();

  let json = JSON.stringify({
    food: "foodItem",
    price: "foodPricie",
  });

  xhr.open("POST", "http://localhost:3000/food");
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(json);
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
    

<h3>${paySection}</h3>
  <h4>${startPayment}</h4><br>
      <h4>${totalOfTransactions}</h4>
      <h4>${paymentOption}</h4><br>

      <form class="" action="" method="post" enctype="text/plain"> 
      <label>${payByCash}</label>
    <input type="checkbox" id="cash" name="cash" value=""><br>
      <label>${payByCredit}</label>
      <input type="checkbox" id="credit" name="credit" value=""><br>
      <input type="submit" name=""</input>
      </form>
            `;
      document.getElementsByClassName("payment-section")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("payment-section")[0].innerHTML = "Error";
    }

    document.getElementById("cash").addEventListener("click", function () {
      document.getElementsByClassName(
        "message1"
      )[0].innerHTML = `You selected ${cashChoice}`;
      show(document.querySelector(".message1"));
    });

    document.getElementById("credit").addEventListener("click", function () {
      document.getElementsByClassName(
        "message1"
      )[0].innerHTML = `You selected ${creditChoice}`;
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

      document.getElementsByClassName(
        "runningTransactions-section"
      )[0].innerHTML = output;
    } else {
      document.getElementsByClassName(
        "runningTransactions-section"
      )[0].innerHTML = "Not Found";
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
      document.getElementsByClassName(
        "endingTransactions-section"
      )[0].innerHTML = output;
    } else {
      document.getElementsByClassName(
        "endingTransactions-section"
      )[0].innerHTML = "Not Found";
    }
  
  };
  xhr.open("GET", "http://localhost:3000/endingTransactions", true);
  xhr.send();
}
