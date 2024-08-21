import { Loader } from './loader.js'

window.onload = () => {

// Utilizziamo una funzione asincrona in modo da poter gestire in maniera semplice e con una sintassi facile da leggere le operazioni asincrone legate alla fecth
    async function call(){
        Loader.showLoader()
        //La parola chiave await mi permette di far sì che ci sia un'attesa che termina quando l'esecuzione asincrona è terminata 
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`)//Salvo nella variabile response, l'oggetto di tipo response restituito dalla chiamata fetch. 
        const risultato = await response.json()//Una volta ottenuta la response, La converto in json, ottenendo di fatto il contenuto dell'endpoint (I dati che devo utilizzare per costruire le card )

        Loader.hideLoader()

        const target = document.querySelector('#target')//Cerco l'elemento con ID target, ossia l'area in cui costruirò le card. 

        //Osservando l'endpoint potrai notare che restituisce un oggetto contenente una proprietà "data" che contiene un array di oggetti che rappresentano gli album.
        //Ciclando l'array data andiamo a costruire una card per ogni oggetto presente nella proprietà "data". 
        risultato.data.forEach(el=>{

            let temp = document.getElementsByTagName("template")[0];//Cerco il tag template presente in pagina. 
            let clone = temp.content.cloneNode(true);//Crea un clone del contenuto del tag template. 
            
            //Conversione del document fragment in un elemento DOM. 
            const div = document.createElement("div");
            div.append(clone);//Inserisco il clone in un DIV appena creato. 
            clone = div.firstElementChild//Lo estrapolo dal suddetto DIV e lo reinserisco nella variabile clone. 

            console.log(clone);//Come puoi vedere adesso clone non è più un document fragment 
            

            //Nella variabile clone ora abbiamo degli elementi HTML sotto forma di oggetti del DOM, di conseguenza posso usare querySelector direttamente sulla variabile clone per cercare le porzioni di codice che voglio manipolare 
            const artistLink = clone.querySelector('.artist-link')
            const image = clone.querySelector('.image')
            const albumName = clone.querySelector('.album-name')
            const artistName = clone.querySelector('.artist-name')
            const button = clone.querySelector('button')


            //Dopo aver selezionato tutti gli elementi da manipolare, procedo a scrivere al loro interno o ad assegnare valori ai loro attributi 
            artistLink.href = `dettaglio.html?album=${el.album.id}`//Imposto un query param che mi permetta di navigare verso la pagina dettaglio dell'album, portando con me l'Id dell'album in questo modo potrò successivamente visualizzare nella pagina dettaglio l'album selezionato. 
            image.src = el.album.cover_medium
            albumName.textContent = el.album.title
            artistName.textContent = el.artist.name

            button.addEventListener('click',()=>{
                button.parentElement.remove()
            })

            target.appendChild(clone);//Inserisco nella pagina la card appena creata 

        })

    }


    call()

}

/* <div class="col-3">
                <a href="#" class="d-block">
                    <img src="https://picsum.photos/200/300" height="100">
                    <div class="dettagli">
                        <p>Nome album</p>
                        <p>Nome artista</p>
                    </div>
                </a>
            </div> */