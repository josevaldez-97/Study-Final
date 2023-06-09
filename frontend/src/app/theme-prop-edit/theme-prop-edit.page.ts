import { CommonModule, formatDate } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, Platform, ToastController } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import axios from 'axios';

@Component({
  selector: 'app-theme-prop-edit',
  templateUrl: './theme-prop-edit.page.html',
  styleUrls: ['./theme-prop-edit.page.scss'],
})
export class ThemePropEditPage implements OnInit {
  public message!: Message;
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  theme_Prop: any = '';
  accion = 'Agregar Temas Propiedad';

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    let token = localStorage.getItem('token');
    let config = {
      headers: {
        Authorization: token,
      },
    };
    //con este comando se recupera el id que se pasa
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    // this.message = this.data.getMessageById(parseInt(id, 10));
    axios
      .get('http://localhost:3000/themes_properties/buscarPorCodigo/' + id, config)
      .then((result) => {
        if (result.data.success == true) {
          if (id !== '0') {
            this.accion = 'Editar Tema Propiedades';
          }
          if (result.data.theme_Prop != null) {
            this.theme_Prop = result.data.theme_Prop;
          } else {
            this.theme_Prop = {};
          }
        } else {
          console.log(result.data.error);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios');
    return isIos ? 'Inbox' : '';
  }

  saveUserTemaProp() {
    let token = localStorage.getItem('token');
    let config = {
      headers: {
        Authorization: token,
      },
    };
   
    var data = {
                id: this.theme_Prop.id,
      propety_name: this.theme_Prop.property_name,
    property_value: this.theme_Prop.property_value,
     owner_user_id: 1,
    };
    console.log('themes_properties: ', data);
    axios
      .post('http://localhost:3000/themes_properties/update', data, config)
      .then(async (result) => {
        if (result.data.success == true) {
          this.presentToast('Tema Propiedades  Guardado');
          this.router.navigate(['/theme-prop-list']);
        } else {
          this.presentToast(result.data.error);
        }
      })
      .catch(async (error) => {
        this.presentToast(error.message);
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
}
