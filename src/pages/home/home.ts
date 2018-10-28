import { Component } from '@angular/core';
import { NavController, AlertController, ToastController,LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { TiposExamesPage } from '../tipos-exames/tipos-exames'
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public loadingCtrl: LoadingController, public ApiProvider: ApiProvider,private toast: ToastController) {

  }
  presentLoadig(){
    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 1000
    });
    loader.present();
  }

  delay(ms: number) {
    return new Promise<void>(function (resolve) {
      setTimeout(resolve, ms);
    });
  }
  async ionViewDidEnter() {
    this.presentLoadig();
    this.users = [];
    await this.delay(1000);
    this.getUsers();
  }
  getUsers() {
    var users = [];
    for (var i = 0; i < localStorage.length; i++) {
        try {
          if (!!JSON.parse(localStorage.getItem(localStorage.key(i))).id) {
            this.users.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          }
        } catch (e) {
          console.log('Erro request localStorage: ', e);
        }
    }
  }

  addCardSUS() {
    const prompt = this.alertCtrl.create({
      title: 'Adicionar cartão SUS',
      message: "Entre com o cartão SUS do paciente",
      inputs: [
        {
          name: 'nlCard',
          placeholder: 'Número'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Adicionar',
          handler: data => {
            this.ApiProvider.getCardSUS(data['nlCard']);
            this.ionViewDidEnter();
          }
        }
      ],
      cssClass: 'alert-list'
    });
    prompt.present();
  }

  irParaExames(matricula: string) {
    this.navCtrl.push(TiposExamesPage, {
      matricula_id: matricula
    });
  }

}
