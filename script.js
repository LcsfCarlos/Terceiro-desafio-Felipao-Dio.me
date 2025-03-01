class heroi{
	constructor(name, age, type){
    	this.name = name;
        this.age = age;
        this.type = type;
        this.ataque = "";
    }
    
    atacar(){
    	console.log(`O ${this.type} atacou usando ${this.ataque}`)
    }
    
    definirAtaque() {
        if (this.type === "mago") {
            this.ataque = "magia";
        } else if (this.type === "guerreiro") {
            this.ataque = "espada";
        } else if (this.type === "monge") {
            this.ataque = "artes marciais";
        } else if (this.type === "ninja") {
            this.ataque = "shuriken";
        }
    }
}
 
let personagem1 = new heroi("Gandalf", 31, "mago");
personagem1.definirAtaque();
personagem1.atacar(); 

let personagem2 = new heroi("God Of War", 29, "guerreiro");
personagem2.definirAtaque();
personagem2.atacar();