import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences'

const storageUsuario = 'usuarioData'; //Variable 

@Injectable({
  providedIn: 'root'
})



export class StorageService {

  constructor() { }

  async setItem(llave:string,valor:string){
    await Preferences.set({key:llave,value:valor})
  }

  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }

  async guargarUsuario(user:any[]){
    var userStorage = await this.obtenerUsuario();

    for (const i of userStorage) {
      if (i) {
        user.push(i);
      }
    }
    this.setItem(storageUsuario,JSON.stringify(user));
  }

  async obtenerUsuario(){
    const storageData = await this.getItem(storageUsuario);

    if (storageData == null) {
      return [];
    }

    const data:any[] = JSON.parse(storageData);

    if (data) {
      return data;
    }
    else{
      return [];
    }
  }

}
