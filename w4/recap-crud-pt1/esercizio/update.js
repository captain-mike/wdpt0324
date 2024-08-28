const id = 12

const pizza = {
    gusto: "Capricciosa",
    prezzo: 9,
    disponibile: true
}

fetch(`http://localhost:3000/pizze/${id}`,{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(pizza)
})
.then((response) => response.json())
.then(pizzaRes => {

    alert(pizzaRes.gusto)

})