import { Injectable, Injector, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})


export class UsuariosService {
  private _httpClient = inject(HttpClient);

  private  URL_USUARIOS = "http://localhost:9000/usuarios";


  //PETICION POST
  postUsuarios(user: Usuarios) {
    return this._httpClient.post(this.URL_USUARIOS + "/crear", user);

  }

  //PETICION GET
  getUsuarios() {
    return this._httpClient.get(this.URL_USUARIOS + "/obtener");
  }


}
