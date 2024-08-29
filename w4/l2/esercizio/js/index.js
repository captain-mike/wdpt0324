import { startLoading, stopLoading } from "./loader.js"


async function call(){
    startLoading()

    try{
      const response = await fetch('http://localhost:3000/pizze')
      const pizze = await response.json()
    }catch(err){
      //gestione errore
      stopLoading()
    }
    const target = document.getElementById('target')
    
    setTimeout(function(){
      
      stopLoading()
    
    
      pizze.forEach(p => {
          
          const col = document.createElement('div')
          const card = document.createElement('div')
          const cardBody = document.createElement('div')
          const title = document.createElement('h5')
          const a = document.createElement('a')
          const deleteButton = document.createElement('button')
          const editButton = document.createElement('a')

          col.classList.add('col-6')
          card.classList.add('card')
          cardBody.classList.add('card-body')
          title.classList.add('card-title')
          a.classList.add('btn','btn-primary')
          deleteButton.classList.add('btn','btn-danger')
          editButton.classList.add('btn','btn-warning')
          

          title.textContent = p.gusto
          a.innerText = 'Visualizza'
          a.href = 'dettaglio.html?id=' + p.id
          deleteButton.innerText = 'Elimina'
          editButton.href = 'modifica.html?id=' + p.id
          editButton.innerText = 'Modifica'

          deleteButton.addEventListener('click',function(){

            const conf = confirm('Sei sicuro di voler eliminare?')
            if(conf){

              startLoading()
              fetch(`http://localhost:3000/pizze/${p.id}` ,{
                method: 'DELETE',
                headers:{
                  'Content-Type': 'Application/json'
                }
              })
              .then(res => res.json())
              .then(() =>{
                stopLoading()
                col.remove()
              })
              
            }

          })
          
          cardBody.append(title,a,editButton,deleteButton)
          card.append(cardBody)
          col.append(card)

          target.append(col)

      });
    
    
    }, 5000)
    
}

call()



{/* <div class="col-6">
                <div class="card">
                   <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div> */}