import { Televisao } from './Televisao';

export class ControleRemoto{

    private televisao: Televisao;

    constructor(televisao: Televisao){
        this.televisao = televisao;
    }

    public almentarVolume(){
        if(this.televisao.getVolume() < this.televisao.getVolumeMaximo()){
            this.televisao.setVolume(this.televisao.getVolume() + 1);
        }
    }

    public diminuirVolume(){
        if(this.televisao.getVolume() > 0){
            this.televisao.setVolume(this.televisao.getVolume() - 1);
        }
    }

    public pasarCanal(){
        if(this.televisao.getCanal() < this.televisao.getUltimoCanal()){
            this.televisao.setCanal(this.televisao.getCanal() + 1);
        }else if(this.televisao.getCanal() == this.televisao.getUltimoCanal()){
            this.televisao.setCanal(1);
        }
    }

    public voltarCanal(){
        if(this.televisao.getCanal() > 0){
            this.televisao.setCanal(this.televisao.getCanal() - 1);
        }else if(this.televisao.getCanal() == 0){
            this.televisao.setCanal(this.televisao.getUltimoCanal());
        }
    }

    public irParaCanal(canal: number){
        if(canal <= this.televisao.getUltimoCanal() && canal >= 1 ){
            this.televisao.setCanal(canal);
        }
    }

    public info(){
        console.log("Canal: " + this.televisao.getCanal());
        console.log("Volume: " + this.televisao.getVolume() + "/" + this.televisao.getVolumeMaximo());
    }
}