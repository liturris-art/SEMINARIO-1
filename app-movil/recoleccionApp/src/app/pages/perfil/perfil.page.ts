import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule]
})
export class PerfilPage implements OnInit {

  usuario: any = {};

constructor(private authService: AuthService){}

async ngOnInit(){
  const user = await this.authService.getUser();

  this.usuario = {
    email: user?.email,
    id: user?.id
  };
}
}


