import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { ProgramasComponent } from './pages/programas/programas.component';

export const routes: Routes = [
    {path:'login',title:'Login',component:LoginComponent},
    {path:'home',title:'Principal',component:HomeComponent,children:[
        {path:'profesor',title:'Profesores',component:ProfesoresComponent},
        {path:'estudiante',title:'Estudiantes',component:EstudiantesComponent},
        {path:'programa',title:'Programas academicos',component:ProgramasComponent}
    ]},
    {path:'',redirectTo:'login',pathMatch:'full'}
];
