export class Todo{
    constructor(selector){
        this.target = document.querySelector(selector);
        this.list = null
        this.input = null
        this.button = null
        this.renderHTML()
    }

    renderHTML(){

        const inputWrap = document.createElement('div')
        this.list = document.createElement('div')
        this.input = document.createElement('input')
        this.button = document.createElement('button')

        inputWrap.classList.add('container')
        this.list.classList.add('container')
        this.input.classList.add('form-control')
        this.button.classList.add('btn','btn-primary')

        this.button.innerHTML = 'Salva'
        this.button.addEventListener('click', () => {
            this.addTodo()
        })

        inputWrap.append(this.input, this.button)

        this.target.append(inputWrap, this.list)
    }

    addTodo(){
        const newTodo = document.createElement('div')
        newTodo.classList.add('alert','alert-info')
        newTodo.innerHTML = this.input.value

        this.list.append(newTodo)
        this.input.value = ''
    }
}