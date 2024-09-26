import { Component, inject, Renderer2 } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss'
})
export class TopnavComponent {

  private renderer = inject(Renderer2);
  private authService = inject(AuthService);
  private router = inject(Router);
  userName: String = '';
  userRole: string = '';
  email: String = '';

  ngOnInit(): void {
    // Obtener los datos del usuario al cargar el componente
    const user = this.authService.getUserData();
    this.userName = user.name;
    this.userRole = user.rol;
    this.email = user.email;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    const body = document.body;
    
    if (body.classList.contains('sidebar-collapse')) {
      // Remover clase para expandir
      this.renderer.removeClass(body, 'sidebar-collapse');
      this.renderer.addClass(body,"sidebar-open");
    } else {
      // Añadir clase para colapsar
      this.renderer.removeClass(body,'sidebar-open');
      this.renderer.addClass(body, 'sidebar-collapse');
    }
  }

}
