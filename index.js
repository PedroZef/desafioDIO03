class Heroi {
   constructor(nome, idade, genero) {
     this.nome = nome;
     this.idade = idade;
     this.genero = genero;
   }
 
   atacar() {
     this.exibirAtaque(this.calcularAtaque());
   }
 
   calcularAtaque() {
     // Usando um objeto para armazenar os tipos de ataque
     const ataques = {
       mago: "magia",
       guerreiro: "espada",
       monge: "artes marciais",
       ninja: "shuriken",
     };
 
     // Usando o operador lógico OR para definir um valor padrão
     return ataques[this.genero] || "um ataque desconhecido";
   }
 
   exibirAtaque(ataque) {
     console.log(`O ${this.genero} atacou usando a ${ataque}`);
   }
 }
 
 // Exemplo de uso da classe
 const meuHeroi = new Heroi("Herói Exemplo", 30, "guerreiro");
 meuHeroi.atacar();
 
