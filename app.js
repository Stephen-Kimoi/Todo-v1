checkboxes = document.querySelectorAll('.check-completed'); 
for (let i = 0; i < checkboxes.length; i++){
   const checkbox = checkboxes[i]; 
   checkbox.onchange = (e) => {
       console.log('event', e)
   }
}

document.getElementById('form').onSubmit = (e) => {
    e.preventDefault(); 

    fetch('/todos/create', {
        method: 'POST', 
        body: json.Stringify({
            'description': document.getElementById('description').value
        }), 
        header: {
            'Content-Type': 'application/json'
        }
    }) 
    .then( (response) => {
        return response.json() 
    }
    )
    .then( (responsejson) => {
        console.log(responsejson); 
        const liItem = document.createElement('LI'); 
        liItem.innerHTML = responsejson['description']; 
        document.getElementById('todos').appendChild(liItem); 
        document.getElementById('error').className = 'hidden'; 
    }
    )
    .catch( (error) => {
        doument.getElementById('error').className = ''; 
    })
}















































// USING XMLHTTPREQUESTS TO SEND DATA TO FLASK
// const xhttp = new XMLHttpRequest(); 

// description = document.getElementById('description').value; 

// xhttp.open("GET", '/todos/create?description=' + description)

// xhttp.send()

// xhttp.onreadystatechange = () => {
//     if(this.readyState === 4 && this.status === 200){
//         console.log(xhttp.responseText)
//     }
// }

// USING FETCH TO SEND DATA TO FLASK
// fetch('/my/request', {
//     method: 'POST',
//     body: JSON.stringify({
//       'description': 'some description here'
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }); 


