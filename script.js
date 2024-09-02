function validateFormName() {
    let x = document.forms["searchForm"]["searchInput"].value;
    if (x == "") {
      alert("Please enter a food");
      return false;
    }
    return true;
  }
  
  const form = document.getElementById("searchForm");
  
  form.addEventListener('submit', function(event) {
    if (validateFormName()) {
      const s = form.elements.name.searchInput;
      var sum = 0;
      
  
      //Output the responses
      const text = document.createElement("p");
      const response = document.createTextNode(s + ", Total Calorie Count: " );
      text.appendChild(response);
      const textSection = document.getElementById("responses");
      textSection.appendChild(text);
      sum += response; 
      
  
      form.reset();
      
    }
  
    event.preventDefault();
  });
  
  
  
  
  }
  
  