function getGreeting() {
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/greeting", true);
xhr.onload = function () {
  if (xhr.status == 200) {
    document.getElementById("greeting").innerHTML = xhr.responseText;
  } else {
    document.getElementById("greeting").innerHTML = "Not Found";
  }
};
xhr.send();
}

