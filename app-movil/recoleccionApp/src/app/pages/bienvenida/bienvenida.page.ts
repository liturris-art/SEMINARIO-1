import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonButton],
})
export class BienvenidaPage {
  constructor(private router: Router) {}

  comenzar() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
