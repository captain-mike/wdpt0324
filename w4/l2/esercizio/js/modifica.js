import { startLoading, stopLoading } from "./loader.js"


const gusto = document.getElementById('gusto')
const prezzo = document.getElementById('prezzo')
const disponibile = document.getElementById('disponibile')
const salva = document.getElementById('salva')
const url = new URLSearchParams(location.search)
const  id = url.get('id')


async function fillForm(){

    startLoading()
    const response =  await fetch('http://localhost:3000/pizze/' + id)
    const dati = await response.json()

    stopLoading()

    gusto.value = dati.gusto
    prezzo.value = dati.prezzo
    disponibile.checked = dati.disponibile

}

fillForm()

salva.addEventListener('click',updatePizza)


async function updatePizza(e){
    e.preventDefault()

    const pizza = {
        gusto : gusto.value,
        prezzo : Number(prezzo.value),
        disponibile : disponibile.checked
    }
    startLoading()
    const response =  await fetch('http://localhost:3000/pizze/' + id,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(pizza)
    })
    const dati = await response.json()
    stopLoading()
    
    alert('Pizza aggiornata con successo')
    
}