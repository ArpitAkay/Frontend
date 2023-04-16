document.getElementById("form-data").addEventListener("submit", function(event){
  event.preventDefault(); // prevent the default form submission behavior

  // get the form data
  var name = document.getElementById("name").value;
  console.log("name: " + name);

  var email = document.getElementById("email").value;
  console.log("email: " + email);

  var age = document.getElementById("age").value;
  console.log("age: " + age);

  var optionValue = document.getElementById("option");
  console.log("optionValue: " + optionValue.value);

  var studentType = optionValue.options[optionValue.selectedIndex].text;
  console.log("studentType: " + studentType);

  var recommend = document.getElementsByName("recommend");
  console.log(recommend.length)
  for(var i = 0; i < recommend.length; i++){
    if(recommend[i].checked){
      recommend = recommend[i].value;
      break;
    }
  }
  if(i == recommend.length){
    alert("Please select an option (Yes, No or Maybe)");
  }
  console.log("recommend: " + recommend);


  var c = document.getElementById("c");
  var cpp = document.getElementById("c++");
  var c_sharp = document.getElementById("c#");
  var java = document.getElementById("java");
  var javascript = document.getElementById("javascript");
  var python = document.getElementById("python");
  var react = document.getElementById("react");
  var angular = document.getElementById("angular");
  var django = document.getElementById("django");
  var spring = document.getElementById("spring");

  var result = "";

  if(c.checked){
    result += c.value + " ";
  }
  if(cpp.checked){
    result += cpp.value + " ";
  }
  if(c_sharp.checked){
    result += c_sharp.value + " ";
  }
  if(java.checked){
    result += java.value + " ";
  }
  if(javascript.checked){
    result += javascript.value + " ";
  }
  if(python.checked){
    result += python.value + " ";
  }
  if(react.checked){
    result += react.value + " ";
  }
  if(angular.checked){
    result += angular.value + " ";
  }
  if(django.checked){
    result += django.value + " ";
  }
  if(spring.checked){
    result += spring.value + " ";
  }
  console.log("languages: " + result);

  if(result.length === 0){
    alert("Please select at least one language");
  }

  var suggestions = document.getElementById("suggestions").value;
  console.log("suggestions: " + suggestions);

  // create a JSON object
  var data = {
    name: name,
    email: email,
    age: age,
    studentType: studentType,
    recommend: recommend,
    languages: result,
    suggestions: suggestions
  };

  //fetch the API endpoint and send the data
  fetch("http://localhost:8080/user-info/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    alert("Details saved successfully")
    console.log(data);
  })
  .catch(function(error){
    console.log(error);
  });
});