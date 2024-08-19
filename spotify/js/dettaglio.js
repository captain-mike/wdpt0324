window.onload = function(){

    async function call(){

        const url = new URLSearchParams(location.search);

        const id = url.get('album');

        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);
        const dati = await response.json();

        let temp = document.getElementsByTagName("template")[0];
        let clone = temp.content.cloneNode(true);

        const image = clone.querySelector('.image')
        const trackName = clone.querySelector('.track-name')
        const albumName = clone.querySelector('.album-name')

        image.src = dati.cover_medium
        albumName.textContent = dati.title
        trackName.textContent = dati.tracks.data[0].title


        console.log(dati);
        

        


    }

    call()

}