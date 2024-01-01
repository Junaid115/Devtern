let data = [
    {username: "devtern", password: "devtern00"},
    {username: "internship", password: "intern"},
    {username: "computer", password: "engineering"},
    {username: "degree", password: "ongoing"},
    ]
    function getValue(){

      let inputvalue = document.getElementById('email').value;
      let inputpass = document.getElementById('password').value;

    let a = false;
    for(let i=0; i<4; i++){
      if(inputvalue === data[i].username && inputpass === data[i].password){
          a = true;
      }
    }
    if(a == true){
      alert("Login successfull!!")
      window.location.href = 'content.html'
    }
    else{
      alert("Invalid Credentials")
    }
    
  }
  
  localStorage.setItem('data',JSON.stringify(data));
