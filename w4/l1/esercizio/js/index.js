
async function call(){

    const response = await fetch('http://localhost:3000/pizze')
    const pizze = await response.json()

    pizze.forEach(p => {
        
        const col = document.createElement('div')
        const card = document.createElement('div')
        const cardBody = document.createElement('div')
        const title = document.createElement('h5')
        const a = document.createElement('a')

        col.classList.add('col-6')
        card.classList.add('card')
        cardBody.classList.add('card-body')
        title.classList.add('card-title')
        a.classList.add('btn','btn-primary')
        

        title.textContent = p.gusto
        a.href = 'dettaglio.html?id=' + p.id
        //lo finiamo la volta prossima

    });
    
}



{/* <div class="col-6">
                <div class="card">
                   <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div> */}