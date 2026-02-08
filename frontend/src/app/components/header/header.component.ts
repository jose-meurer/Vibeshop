import { Component } from '@angular/core';
import { ConfigService } from '../../core/services/config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img 
            src="/mascote.png" 
            alt="Vibeshop Mascote" 
            class="w-10 h-10"
          />
          <span class="font-display text-xl font-bold gradient-text">
            Vibeshop
          </span>
        </div>

        <a 
          [href]="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="gradient-border rounded-lg px-4 py-2 bg-card hover:bg-muted transition-colors duration-200 font-medium"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  constructor(private configService: ConfigService) { }

  get whatsappLink(): string {
    return this.configService.getWhatsappLink('Olá! Vim pelo site e gostaria de saber mais sobre os produtos.');
  }
}
