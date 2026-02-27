import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../core/services/user.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <div class="absolute inset-0 opacity-30" style="background: var(--gradient-glow)"></div>
      <app-header></app-header>
      
      <main class="flex-grow flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-xl w-full space-y-8 bg-card p-10 rounded-2xl border border-border card-glow">
          <div>
            <h2 class="text-center font-display text-2xl md:text-3xl lg:text-4xl font-bold">
              <span class="gradient-text">Crie sua conta</span>
            </h2>
          </div>
          
          <form class="mt-8 space-y-6" [formGroup]="registerForm" (ngSubmit)="onSubmit()">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-foreground mb-1">Nome</label>
                  <input id="name" formControlName="name" type="text" required 
                    class="appearance-none rounded-lg block w-full px-3 py-2 bg-input border border-border placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all" 
                    placeholder="Nome">
                </div>
                <div>
                  <label for="surname" class="block text-sm font-medium text-foreground mb-1">Sobrenome</label>
                  <input id="surname" formControlName="surname" type="text" required 
                    class="appearance-none rounded-lg block w-full px-3 py-2 bg-input border border-border placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all" 
                    placeholder="Sobrenome">
                </div>
              </div>
              
              <div>
                <label for="email-address" class="block text-sm font-medium text-foreground mb-1">E-mail</label>
                <input id="email-address" formControlName="email" type="email" autocomplete="email" required 
                  class="appearance-none rounded-lg block w-full px-3 py-2 bg-input border border-border placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all" 
                  placeholder="E-mail">
              </div>
              
              <div>
                <label for="password" class="block text-sm font-medium text-foreground mb-1">Senha</label>
                <input id="password" formControlName="password" type="password" autocomplete="new-password" required 
                  class="appearance-none rounded-lg block w-full px-3 py-2 bg-input border border-border placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all" 
                  placeholder="Senha">
              </div>
            </div>

            <div *ngIf="errorMessage" class="text-destructive text-sm text-center p-2 bg-destructive/10 rounded-lg border border-destructive/20">
              {{ errorMessage }}
            </div>

            <div *ngIf="successMessage" class="text-green-500 text-sm text-center p-2 bg-green-500/10 rounded-lg border border-green-500/20">
              {{ successMessage }}
            </div>

            <div class="pt-2">
              <button type="submit" [disabled]="registerForm.invalid || isLoading"
                class="w-full flex justify-center py-2.5 px-4 rounded-lg font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-4">
                <span *ngIf="isLoading">Carregando...</span>
                <span *ngIf="!isLoading">Cadastrar</span>
              </button>

              <div class="relative flex py-4 items-center">
                <div class="flex-grow border-t border-border"></div>
                <span class="flex-shrink-0 mx-4 text-muted-foreground text-sm">Já possui cadastro?</span>
                <div class="flex-grow border-t border-border"></div>
              </div>

              <a routerLink="/login"
                class="w-full flex justify-center py-2.5 px-4 rounded-lg font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition-all cursor-pointer">
                Fazer Login
              </a>
            </div>
          </form>
        </div>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);

  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      const userPayload = {
        ...this.registerForm.value,
        roles: [] // Array vazio, o backend cuidará de atribuir a role padrão
      };

      this.userService.createUser(userPayload).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.successMessage = 'Usuário criado com sucesso!';
          setTimeout(() => this.router.navigate(['/']), 2000);
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err.error?.message || 'Erro ao criar usuário. Verifique os dados e tente novamente.';
        }
      });
    }
  }
}
