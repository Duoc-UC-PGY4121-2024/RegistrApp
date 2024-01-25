import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular'; 
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private authService: AuthService, private router: Router) { }

  iraLogin(){
    this.router.navigate(['/login']);
  }

  iraRegistro(){
    this.router.navigate(['/registro']);
  }

  ngOnInit() {
  }

}
