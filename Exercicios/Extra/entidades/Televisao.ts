export class Televisao{

    private canal: number;
    private volume: number;
    private valumeMaximo: number;
    private ultimoCanal: number;

    constructor(numeroCanais: number){
        this.canal = 1;
        this.volume = 5;
        this.valumeMaximo = 50;
        this.ultimoCanal = numeroCanais;
    }

    public getCanal(): number{
        return this.canal;
    }

    public getVolume(): number{
        return this.volume;
    }

    public getVolumeMaximo(): number{
        return this.valumeMaximo;
    }

    public getUltimoCanal(): number{
        return this.ultimoCanal;
    }

    public setCanal(canal: number){
        this.canal = canal;
    }

    public setVolume(volume: number){
        this.volume = volume;
    }

    public setVolumeMaximo(valumeMaximo: number){
        this.valumeMaximo = valumeMaximo;
    }

    public setUltimoCanal(ultimoCanal: number){
        this.ultimoCanal = ultimoCanal;
    }
}