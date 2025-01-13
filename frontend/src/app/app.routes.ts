import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginUsuariosComponent } from './paginas/login/login-usuarios/login-usuarios.component';
import { RegisterUsuarioComponent } from './paginas/registro/register-usuario/register-usuario.component';

export const routes: Routes = [
    {path: '', component: InicioComponent, title: 'inicio'},
    {path: 'login', component: LoginUsuariosComponent, title: 'login'},
    {path: 'registro', component: RegisterUsuarioComponent, title: 'registro'},
];