import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular'; 
import { ToastController } from '@ionic/angular'; 
import { Region } from '../models/region';
import { Comuna } from '../models/comuna';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  username: string = '';
  password: string = '';
  cpassword: string = '';
  name: string = '';
  lname: string = '';
  rut: string = '';
  car: string = '';
  regionSel: number = 0;
  comunaSel: number = 0;
  seleccionComuna: boolean = true;
  regiones: Region [] = [];
  comunas: Comuna [] = [];

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    private authService: AuthService, 
    private router: Router,
    private locationService : LocationService) { }

  async registrarse() {
    if (this.username === '' || this.password === '' || this.cpassword === '' || this.name === '' || this.lname === '' || this.rut === '' || this.car === '' || this.regionSel === 0 || this.comunaSel === 0) {
      this.showToast('Por favor, complete todos los campos');
      return;
    }

    if (this.rut.length != 8 &&  isNaN(+this.password)) {
      this.showToast('El rut no debe de contener guion ni digito verificador.');
      return;
    }

    if (this.username.length < 4 && this.username.length > 8) {
      this.showToast('El nombre de usuario debe contener 4 a 8 caracteres.');
      return;
    }
    
    if (this.password.length < 4 && this.username.length > 8) {
      this.showToast('La contraseña debe ser un número de 4 dígitos.');
      return;
    }

    if (this.name.length <= 1 && this.username.length > 8) {
      this.showToast('El nombre debe contener 4 a 8 caracteres.');
      return;
    }

    if (this.lname.length <= 1 && this.password.length  > 8) {
      this.showToast('El apellido debe contener 4 a 8 caracteres.');
      return;
    }

    if (this.car.length <= 1) {
      this.showToast('Ingrese una carrera valida.');
      return;
    }

    if (this.password !== this.cpassword) {
      this.showToast('Las contraseñas deben de ser iguales.');
      return;
    }    

    try {
      const registroExitoso = await this.authService.registro(
        this.username,
        this.password,
        this.name,
        this.lname,
        this.rut,
        this.car,
        this.regionSel,
        this.comunaSel
      );

      if (registroExitoso) {
        this.router.navigate(['/login']);
      } else {
        this.showToast('Este usuario ya existe.');
      }
    } catch (error) {
      console.error(error);
      this.showToast('Error al registrar usuario.');
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

  iraInicio() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.cargarRegion();
  }

  async cargarRegion(){
    const req = await this.locationService.getRegion();
    this.regiones = req.data;
  }

  async cargarComuna(){
    this.seleccionComuna = false;
    const req = await this.locationService.getComuna(this.regionSel);
    this.comunas = req.data;
  }
  

}
