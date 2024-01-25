import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { LocationService } from '../services/location.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController, ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

declare global {
  interface HTMLCanvasElement {
    getContext(contextId: '2d'): CanvasRenderingContext2D | null;
  }
}


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  loggedInUser: { username: string; password: string; name: string; lname: string; rut: string; car: string; region: number; comuna: number} | null = null;
  regionName: string = '';
  comunaName: string = '';
  latitud: number = 0;
  longitud: number = 0;

  qrData: any;

  capturedPhoto?: Photo ;


  constructor(private authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private storage: Storage, 
    private locationService: LocationService, 
    private geolocation: Geolocation,) {}

  iraInicio() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  async ngOnInit() {
  await this.storage.create(); 
  

  const datosUsuario = await this.storage.get('usuarioLogg'); 

  if (datosUsuario) {
    this.loggedInUser = datosUsuario;
  }
  
    this.route.queryParams.subscribe((params) => {
      if (params && params['qrData']) { 
        this.qrData = JSON.parse(params['qrData']); 
      }
    });
  }

  obtenerUbicacion() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitud = resp.coords.latitude;
        this.longitud = resp.coords.longitude;
      })
      .catch((error) => {
        console.error('Error obteniendo la ubicación', error);
      });
  }

  selfieImageSrc: string | null = null;

  ionViewDidEnter() {
  //  this.tomarSelfie();
    this.obtenerUbicacion();
  }


/*  async tomarSelfie() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      video.setAttribute('playsinline', 'true');
      video.play();
  
      video.addEventListener('loadeddata', () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
        this.selfieImageSrc = canvas.toDataURL('image/png');
  
        stream.getTracks().forEach((track) => track.stop());
        video.remove();
        canvas.remove();
      });
    } catch (error) {
      console.error('Error al tomar la selfie');
    }
  }*/

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
    this.capturedPhoto = image;
  }

  borrarFoto() {
    this.capturedPhoto = undefined; // Borra la foto asignándole un valor undefined
  }
  
}