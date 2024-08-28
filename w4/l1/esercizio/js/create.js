const crea = document.getElementById('crea')

crea.addEventListener('click', e => {
    e.preventDefault()//Ricordati di usare preventi, fault per prevenire l'invio del Form che ricaricherebbe la pagina bloccando l'esecuzione dello script. 

    //Procedo a prelevare i valori dai campi del Form che mi serviranno per poter creare l'oggetto da inviare al server in modo che quest'ultimo si occupi di salvarlo nel database. 
    const gusto = document.getElementById('gusto').value
    const prezzo = document.getElementById('prezzo').value
    const disponibile = document.getElementById('disponibile').checked

    //qui dovrei controllare che tutti i valori siano disponibili
    //e fare una validazione avvisando l'utente su quali campi vanno compilati

    //Preparo l'oggetto 
    //L'oggetto deve avere proprietà e valori che corrispondano a quelli richiesti dalle specifiche del backend 
    //In fase di richiesta post non definire mai un ID perchè è compito del backend, al termine della richiesta, in caso di successo di quest'ultima, sarà il backend a fornirci l'oggetto inserito nel database, corredato anche di ID ed eventualmente di altri campi che vengono generati dal back end stesso 
    const pizza = {
        gusto:gusto,
        prezzo:Number(prezzo),
        disponibile:disponibile
    }

    //La funzione call è definita in fondo al documento ed è quella che si occuperà di effettuare la richiesta POST
    call(pizza)


    // Al posto della funzione call è possibile eseguire la richiesta direttamente con fetch, come vedi in questo commento 
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

async function call(pizza){
    //Per effettuare la richiesta di tipo post non basta inserire l'indirizzo dell'endpoint, ma bisogna fornire un secondo argomento che sarà un oggetto contenente la proprietà metod con valore POST, la proprietà body che conterrà i dati inviati al server(L'oggetto che stiamo creando), ed eventualmente gli headers del caso
    const response = await fetch('http://localhost:3000/pizze', {
        method: 'POST',//Con questa proprietà comunico al backend che sto facendo una richiesta di creazione. 
        headers:{
            "Content-Type": "application/json",//Ove necessario, inserisco degli ethers, ad esempio content Type, in questo caso dichiara che la codifica dei dati sarà in json 
        },
        body: JSON.stringify(pizza)//Il body non è altro che il dato che noi andiamo a inserire nel database, questo dato è in formato json, ecco perché stiamo usando stringify. 
    })

    const dati = await response.json()

    //Se il codice arriva fin qui significa che la richiesta è andata a buon fine Quindi posso usare la variabile dati per Svolgere le operazioni successive 
    //Sarebbe opportuno inserire la fetch all'interno di un blocco try catch 

    //faccio operazioni finali
    //mostro un feedback all'utente oppure faccio un redirect
}