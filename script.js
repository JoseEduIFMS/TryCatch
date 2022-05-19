class Retangulo{
    constructor(largura,altura){
        this.largura = largura
        this.altura = altura
    }
    area(){
        try{
        if(this.largura > 0 && this.altura > 0){
            return this.calcularArea();
        }
        else{
            return "Altura e Largura não podem ser menores ou iguais a 0"
        }

        } catch (error) {

        }

        }
    calcularArea(){

        return this.largura*this.altura
    }
}
let retangulo = new Retangulo(85,85);
console.log(retangulo.area())