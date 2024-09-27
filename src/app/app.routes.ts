import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { ProgramasComponent } from './pages/programas/programas.component';
import { MaestraComponent } from './pages/maestra/maestra.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { authGuard } from './guards/auth.guard';
import { DeniedComponent } from './pages/denied/denied.component';

export const routes: Routes = [
    { path: 'login', title: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, 
        children: [
        { path: 'profesor', title: 'Profesores', component: ProfesoresComponent,canActivate:[authGuard], data:{roles: ['Profesor','Administrador','Estudiante'] } },
        { path: 'estudiante', title: 'Estudiantes', component: EstudiantesComponent,canActivate:[authGuard], data:{roles: ['Profesor','Administrador','Estudiante'] } },
        { path: 'programa', title: 'Programas académicos', component: ProgramasComponent,canActivate:[authGuard], data:{roles: ['Profesor','Administrador','Estudiante'] } },
        { path: 'usuario', title: 'Usuarios', component: UsuariosComponent,canActivate:[authGuard], data:{roles: ['Administrador'] } },
        { path: 'maestra', title: 'Tabla maestra', component: MaestraComponent,canActivate:[authGuard], data:{roles: ['Profesor','Administrador','Estudiante'] } },
        { path: 'access-denied', title: 'Access denied', component: DeniedComponent },
        { path: 'inicio', title: 'Principal', component: InicioComponent,canActivate:[authGuard], data:{roles: ['Profesor','Administrador','Estudiante'] }
    }
    ]},
    { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirección inicial
    { path: '**', redirectTo: 'login' }  // Manejo de rutas no definidas

];