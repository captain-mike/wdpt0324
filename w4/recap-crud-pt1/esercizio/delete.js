const id = 13
fetch(`http://localhost:3000/pizze/${id}`,{
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
})
.then(res => res.json())
.then(res => alert('Elemento eliminato'))