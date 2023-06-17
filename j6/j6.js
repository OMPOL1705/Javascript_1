Run = () => {
    event.preventDefault(); // Prevent form submission (to avoid page reload)
    let length = document.getElementById("length").value;
    let passwordElement = document.getElementById("password");
  
    let uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    let specialChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  
    let allChars = uppercaseChars + lowercaseChars + specialChars;
    let password = '';
    let hasUppercase = false;
    let hasLowercase = false;
    let hasSpecialChar = false;
  
    for (let i = 0; i < length; i++) {
      let randomChar = allChars[Math.floor(Math.random() * allChars.length)];
      password += randomChar;
  
      if (uppercaseChars.includes(randomChar)) {
        hasUppercase = true;
      } else if (lowercaseChars.includes(randomChar)) {
        hasLowercase = true;
      } else if (specialChars.includes(randomChar)) {
        hasSpecialChar = true;
      }
    }
  
    if (hasUppercase && hasLowercase && hasSpecialChar) {
      passwordElement.innerHTML = password;
    } else {
      Run(); // Regenerate the password
    }
  }
  