import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { username: string; password: string; name: string; lname: string, rut: string, car: string ; region: number; comuna: number}[] = [];
  private isAuthenticated: boolean = false;

  constructor(private storage: Storage) {}
  
  async cargarUsuariosStorage() {
    const usuariosGuardados = await this.storage.get('usuariosRegistrados');
    if (usuariosGuardados) {
      this.users = usuariosGuardados;
    }
  }

  async registro(username: string, password: string, name: string, lname: string, rut: string, car: string, region: number, comuna: number): Promise<boolean> {
    await this.storage.create();
    const usuarioExistente = this.users.find(user => user.username === username);
    if (usuarioExistente) {
      console.log("Este usuario ya existe");
      return false;
    }

    const usuarioReg = { username, password, name, lname, rut, car, region, comuna };
    this.users.push(usuarioReg);

    await this.storage.set('usuariosRegistrados', this.users);
    await this.storage.set('usuarioLogg', usuarioReg);

    return true;
  }

  async login(username: string, password: string): Promise<boolean> {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      this.isAuthenticated = true;
      await this.storage.set('usuarioLogg', user);
      return true;
    }

    console.log("No se encuentra el usuario");
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
  }

  getLoggedInUser() {
    return this.isAuthenticated;
  }

  restaurarpass(username: string, npass: string): boolean {
    const buscarUsuario = this.users.findIndex(user => user.username === username);
    if (buscarUsuario !== -1) {
      this.users[buscarUsuario].password = npass;

      this.storage.set('usuariosRegistrados', this.users);
      return true;
    }

    console.log("No se a encontrado el usuario");
    return false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}