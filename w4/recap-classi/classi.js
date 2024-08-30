class Persona{
    constructor(nome, cognome){
        this.nome = nome
        this.cognome = cognome
    }
    presentazione(){
        return `Ciao, mi chiamo ${this.nome} ${this.cognome}`;
    }
}

const mario = new Persona('Mario','Rossi');
const giuseppe = new Persona('Giuseppe','Borrino');

console.log(mario, giuseppe);

console.log(mario.presentazione())
console.log(giuseppe.presentazione())


class Admin extends Persona{

    constructor(nome, cognome){
        super(nome, cognome)
        this.ruolo = 'Amministratore'
    }

    presentazione(){
        return super.presentazione() + ` e svolgo il ruolo di ${this.ruolo}`
    }

}

const capo = new Admin('Pippo','Franco')

console.log(capo);

console.log(capo.presentazione())

