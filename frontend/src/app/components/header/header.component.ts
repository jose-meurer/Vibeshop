import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../core/services/config.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <a routerLink="/" class="flex items-center gap-3">
            <img 
              src="/mascote.png" 
              alt="Vibeshop Mascote" 
              class="w-10 h-10"
            />
            <span class="font-display text-xl font-bold gradient-text">
              Vibeshop
            </span>
          </a>
        </div>

        <div class="flex items-center gap-4">
          <ng-container *ngIf="authService.currentUser$ | async as user; else loginLink">
            <span class="text-sm font-medium text-foreground">
              Olá, {{ user.name }}
            </span>
            <button 
              (click)="logout()"
              class="text-sm font-medium text-destructive hover:text-destructive/80 transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
            >
              Sair
            </button>
          </ng-container>
          
          <ng-template #loginLink>
            <a 
              routerLink="/login"
              class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Entrar / Cadastrar
            </a>
          </ng-template>

          <a 
            [href]="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="gradient-border rounded-lg px-4 py-2 bg-card hover:bg-muted transition-colors duration-200 font-medium"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  public authService = inject(AuthService);
  private configService = inject(ConfigService);
  private router = inject(Router);

  get whatsappLink(): string {
    return this.configService.getWhatsappLink('Olá! Vim pelo site e gostaria de saber mais sobre os produtos.');
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
