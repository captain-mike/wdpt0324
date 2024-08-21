import { Loader } from './loader.js'


window.onload = function(){

    const player = document.querySelector('#player')

    async function call(){

        //L'utente che atterra in questa pagina lo farà dopo aver cliccato una delle card della pagina index.html, di conseguenza all'interno della barra degli indirizzi, sarà disponibile un query param chiamato album a cui è assegnato l'ID di un album.
        const url = new URLSearchParams(location.search);//Utilizziamo URLSearchParams per poter leggere e manipolare i valori legati ai query params. 
        if(!url.has('album')) {
            location.href = '/'
            return
        }

        const id = url.get('album');//Recupero dall'url il valore legato al parametro album (L'ID dell'album )

        Loader.showLoader()

        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);//Faccio una chiamata all'endpoint specifico che mi permette di recuperare un singolo album, fornendo anche un id. 
        const dati = await response.json();//Converto la response in json.
        
        Loader.hideLoader()
        
        //Da qui in poi il codice effettua operazioni simili a quelle nel file Index JS. 
        let temp = document.getElementsByTagName("template")[0];
        let clone = temp.content.cloneNode(true);
        

        const image = clone.querySelector('.image')
        const trackName = clone.querySelector('.track-name')
        const albumName = clone.querySelector('.album-name')
        const play = clone.querySelector('.play')

        image.src = dati.cover_medium
        albumName.textContent = dati.title
        trackName.textContent = dati.tracks.data[0].title

        play.addEventListener('click',()=>{
            player.src = dati.tracks.data[0].preview
            player.load()
            console.log(player.playing);
            
            player.play()

        })

        target.append(clone)

        
    }

    call()

}