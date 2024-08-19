window.onload = () => {

    async function call(){
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`)
        const risultato = await response.json()

        const target = document.querySelector('#target')

        risultato.data.forEach(el=>{

            let temp = document.getElementsByTagName("template")[0];
            let clone = temp.content.cloneNode(true);

            const artistLink = clone.querySelector('.artist-link')
            const image = clone.querySelector('.image')
            const albumName = clone.querySelector('.album-name')
            const artistName = clone.querySelector('.artist-name')



            artistLink.href = `dettaglio.html?album=${el.album.id}`
            image.src = el.album.cover_medium
            albumName.textContent = el.album.title
            artistName.textContent = el.artist.name

            target.appendChild(clone);

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