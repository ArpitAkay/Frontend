document.getElementById("submit-btn").addEventListener("click", function(event){
  event.preventDefault(); // prevent the default form submission behavior

  // get the form data
  const formData = new FormData(document.querySelector("form"));

  // convert the form data to a JSON object
  const jsonObject = {};
  formData.forEach(function(value, key) {
    jsonObject[key] = value;
  });
  const jsonData = JSON.stringify(jsonObject);

  // create an XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // configure the request
  xhr.open("POST", "http://localhost:8080/user-info/save");
  xhr.setRequestHeader("Content-Type", "application/json");

  // send the request with the JSON data
  xhr.send(jsonData);
});
