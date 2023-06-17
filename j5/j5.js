var container = document.getElementById("container");
    container.innerHTML = "";
    // Clear the container
  
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
  
      container.innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${key}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">${value}</p>
        </div>
      </div>`;
    }

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission (to avoid page reload)
  
    // Retrieve input values
    var name = document.getElementById("nameInput").value;
    var desc = document.getElementById("descInput").value;
  
    localStorage.setItem(name, desc);
  
    var cont = document.getElementById("container");
    cont.innerHTML = "";
    // Clear the container
  
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
  
      cont.innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${key}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">${value}</p>
        </div>
      </div>`;
    }
    
  
    // Reset the form
    document.getElementById("myForm").reset();
  });

  
  