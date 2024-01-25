import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StorageService } from '../services/storage.service';
import { NavController } from '@ionic/angular'; 
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    private authService: AuthService, 
    private router: Router, 
    private storage : StorageService) { }
    
  async login() {
    if (this.username === '' || this.password === '') {
      this.showToast('Por favor, ingrese los valores solicitados.');
      return;
    }
    
    if (this.username.length < 4 && this.username.length > 8) {
      this.showToast('El nombre de usuario debe contener 4 a 8 caracteres.');
      return;
    }

    if (this.password.length < 4 && this.password.length  > 8) {
      this.showToast('La contraseña debe ser un número de 4 dígitos.');
      return;
    }

    try {
      const loginResult = await this.authService.login(this.username, this.password);
      if (loginResult) {
        this.router.navigate(['/qr']);
      } else {
        this.showToast("Credenciales incorrectas");
      }
    } catch (error) {
      console.error(error);
      this.showToast("Error al intentar iniciar sesión");
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    await toast.present();
  }

  iraRestaurar() {
    this.router.navigate(['/restaurar']);
  }

  iraInicio() {
    this.router.navigate(['/home']);
  }
  
  navigateToLogin() {
    this.router.navigate(['/login']); 
  }

  navigateToRegistro() {
    this.router.navigate(['/registro']); 
  }
}