function validateForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message=document.getElementById('message').value
    let msgErr=document.getElementById('msgErr')
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let phoneRegex = /^\d{10}$/;
    
    if (username == "" || username.length<3) {
      alert("Username is required and length muxt be greater than 3");
      return false;
    }
    
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return false;
    }
    
    if (!phoneRegex.test(phone) || phone.length<10) {
      alert("Invalid phone number");
      return false;
    }

    if(message===""){
        msgErr.innerText='Message field cannot be empty'
        return false;
    }
    if(message.length<20){
        msgErr.innerText='Minimum 20 words required'
        return false;
    }
 
    return true;
  }
  