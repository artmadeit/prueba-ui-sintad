import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButtonModule],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout()
    this.router.navigateByUrl("/")
  }
}
