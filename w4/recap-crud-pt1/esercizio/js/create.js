const crea = document.getElementById('crea')

crea.addEventListener('click', e => {
    e.preventDefault()
    
    const gusto = document.getElementById('gusto')
    const prezzo = document.getElementById('prezzo').value
    const disponibile = document.getElementById('disponibile').checked

    //qui dovrei controllare che tutti i valori siano disponibili
    //e fare una validazione avvisando l'utente su quali campi vanno compilati

    const pizza = {
        gusto:gusto.value,
        prezzo:Number(prezzo),
        disponibile:disponibile
    }

    
    async function call(){
        const response = await fetch('http://localhost:3000/pizze', {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pizza)
        })

        const dati = await response.json()

        //faccio operazioni finali
        //mostro un feedback all'utente oppure faccio un redirect
    }
    
    call()


    // fetch('http://localhost:3000/pizze', {
    //     method: 'POST',
    //     headers:{
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(pizza)
    // })
    // .then(res => res.json())
    // .then(res => {
    //     //faccio operazioni finali
    //     //mostro un feedback all'utente oppure faccio un redirect
    // })



})