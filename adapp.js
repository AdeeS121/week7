window.addEventListener("load", getTitle);
window.addEventListener("load", getGreeting);
window.addEventListener("load", getOptions);
window.addEventListener("load", getFood);
window.addEventListener("load", getFoodMsg);
window.addEventListener("load", getPayment);
window.addEventListener("load", getRunningTransactions);
window.addEventListener("load", getEndingTransactions);


window.addEventListener("load", getFoodData);
window.addEventListener("load", getPaymentData);


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

// show(document.querySelector(".welcome"));
// show(document.querySelector(".options-section"));

// show(document.querySelector(".food-section"));
// hide(document.querySelector(".message1"));
// hide(document.querySelector(".payment-section"));
// hide(document.querySelector(".runningTransactions-section"));
// hide(document.querySelector(".endingTransactions-section"));


show(document.querySelector(".welcome"));
show(document.querySelector(".options-section"));
show(document.querySelector(".food-section"));
show(document.querySelector(".message1"));
show(document.querySelector(".payment-section"));
show(document.querySelector(".runningTransactions-section"));
show(document.querySelector(".endingTransactions-section"));

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
      <h1><span class="mulitcolortext">${welcomepage.welcome}</span></h1>
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
      const transOptions = JSON.parse(xhr.responseText);
      selectTransaction = transOptions[0].selectTransactionMessage;
      startTransactions = transOptions[1].startTransaction;
      currentTransactions = transOptions[2].currentTransaction;
      exitTransactions = transOptions[3].exitTransaction;

      let output = "";
      output += `
      <h1><span style="color:blue" new-transaction">${selectTransaction}</span></h1>
<ul class="transaction-options">
      <li class="option-one"><span class="trans-one">${startTransactions}</span></li><button class="start">Push here</button>
      <li class="option-two"><span class="trans-two">${currentTransactions}</span></li><button class="current">Push Me</button>
      <li class="option-three"><span class="trans-three">${exitTransactions}</span></li><button class="exit">Push Me</button>
      </ul>

        `;
      document.getElementsByClassName("options-section")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("options-section")[0].innerHTML = "Error";
    }

    document
      .getElementsByClassName("start")[0]
      .addEventListener("click", showFoodSection);
    function showFoodSection(event) {
      show(document.querySelector(".food-section"));
      show(document.querySelector(".message1"));
    }

    document
      .getElementsByClassName("current")[0]
      .addEventListener("click", showRunningTransactionsSection);
    function showRunningTransactionsSection(event) {
      show(document.querySelector(".runningTransactions-section"));
    }

    document
      .getElementsByClassName("exit")[0]
      .addEventListener("click", showEndingTransactionsSection);
    function showEndingTransactionsSection(event) {
      hide(document.querySelector(".welcome"));
      hide(document.querySelector(".options-section"));
      show(document.querySelector(".food-section"));
      hide(document.querySelector(".message1"));
      hide(document.querySelector(".payment-section"));
      hide(document.querySelector(".runningTransactions-section"));
      show(document.querySelector(".endingTransactions-section"));
    }
  };

  xhr.open("GET", "http://localhost:3000/options", true);
  xhr.send();
}

function getFoodMsg() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/foodmsg");
  xhr.onload = function () {
    if (xhr.status == 200) {
      let foodMsg = JSON.parse(xhr.responseText);
      foodChoiceSelection = foodMsg.foodOptionMessage;

      let output = "";
      output += `
<h1>${foodChoiceSelection}</h1>
`;
      document.getElementsByClassName("food-selection-msg")[0].innerHTML = output;
    }
  };
  xhr.send();
}

function getFood() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      const foodChoices = JSON.parse(xhr.responseText);
      foodItemNumber1 = foodChoices[0].item;
      foodItemNumber2 = foodChoices[1].item;
      foodItemNumber3 = foodChoices[2].item;

      food1 = foodChoices[0].food;
      food2 = foodChoices[1].food;
      food3 = foodChoices[2].food;

      foodPrice1 = foodChoices[0].price;
      foodPrice2 = foodChoices[1].price;
      foodPrice3 = foodChoices[2].price;

      let output = "";

      output += `
  <ul class="food-items-align">
  <li><span class="food-item-1">${foodItemNumber1} - </span><span class="food-item-1">${food1} - </span><span class="food-item-1">$${foodPrice1}</span></li><button class="food-1">Select</button>
  <li><span class="food-item-2">${foodItemNumber2} - </span><span class="food-item-2">${food2} - </span><span class="food-item-2">$${foodPrice2}</span></li><button class="food-2">Select</button>
  <li><span class="food-item-3">${foodItemNumber3} - </span><span class="food-item-3">${food3} - </span><span class="food-item-3">$${foodPrice3}</span></li><button class="food-3">Select</button>
    </ul> 

    <h3>Start Payment Process</h3><button class="startPayment">Select pay</button>
  `;

  
      {
        /* <button>Add me the Selection</button> */
      }
      document.getElementsByClassName("food-section")[0].innerHTML = output;
    } else {
      document.getElementsByClassName("food-section")[0].innerHTML =
        "Input Error";
    }

    document
      .getElementsByClassName("food-1")[0]
      .addEventListener("click", function () {
        document.getElementsByClassName(
          "message1"
        )[0].innerHTML = `You added a ${food1}
                  `;
      });

    document
      .getElementsByClassName("food-2")[0]
      .addEventListener("click", function () {
        document.getElementsByClassName(
          "message1"
        )[0].innerHTML = `You added a ${food2}
            `;
      });

    document
      .getElementsByClassName("food-3")[0]
      .addEventListener("click", function () {
        document.getElementsByClassName(
          "message1"
        )[0].innerHTML = `You added ${food3}
                `;
      });

    document
      .getElementsByClassName("startPayment")[0].addEventListener("click", function () {
        hide(document.querySelector(".runningTransactions-section"));
        hide(document.querySelector(".endingTransactions-section"));
        show(document.querySelector(".payment-section"));
        hide(document.querySelector(".food-section"));
        hide(document.querySelector(".message1"));
      });
  };
  xhr.open("GET", "http://localhost:3000/food", true);
  xhr.send();
}

function getFoodData() {
  let data = JSON.stringify({"food": "foodItem", "price": "foodPrice"})
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if ((xhr.status = 200)) {
      console.log(this.responseText)
    }
  };
  xhr.open("POST", "http://localhost:3000/food", true);
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(data);
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

function getPaymentData() {
  let data = JSON.stringify({"payment1": "foodItem", "payment2": "foodPrice"})
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if ((xhr.status = 200)) {
      console.log(this.responseText)
    }
  };
  xhr.open("POST", "http://localhost:3000/payment", true);
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(data);
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
