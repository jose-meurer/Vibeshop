import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [RouterLink],
    template: `
    <div class="min-h-screen bg-background flex items-center justify-center px-4">
      <div class="text-center">
        <h1 class="font-display text-6xl md:text-8xl font-bold mb-4">
          <span class="gradient-text">404</span>
        </h1>
        <h2 class="text-2xl md:text-3xl font-semibold mb-4">Página não encontrada</h2>
        <p class="text-muted-foreground mb-8">
          Desculpe, a página que você está procurando não existe.
        </p>
        <a
          routerLink="/"
          class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90"
          style="background: var(--gradient-primary)"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  `,
    styles: []
})
export class NotFoundComponent { }
