    function getValue(){

      let inputvalue = document.getElementById('email').value;
      let inputpass = document.getElementById('password').value;

      const data = JSON.parse(localStorage.getItem('data'));

    let a = false;
    for(let i=0; i<4; i++){
      if(inputvalue === data[i].username && inputpass === data[i].password){
        a = true;
        alert("Login successfull!!")
        window.location.href = 'content.html'
      }
    }
    if(!a){
      alert("Invalid Credentials")
    }
    
  }
