let retrievedData = localStorage.getItem('data');
let newData = JSON.parse(retrievedData);

function setpass(){
    var inputid = document.getElementById('userid').value
    var inputpass = document.getElementById('password').value
    
    for(var i=0; i<4; i++){
        if(inputid === newData[i].username){
            newData[i].password = inputpass
        }
    }
    alert("New password accepted!")
    localStorage.setItem('updatedData', JSON.stringify(newData));
}