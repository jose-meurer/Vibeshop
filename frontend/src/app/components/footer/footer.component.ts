import { Component } from '@angular/core';
import { ConfigService } from '../../core/services/config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="py-10 border-t border-border">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <img 
              src="/mascote.png" 
              alt="Vibeshop" 
              class="w-12 h-12"
            />
            <div>
              <span class="font-display text-lg font-bold gradient-text block">
                Vibeshop
              </span>
              <span class="text-sm text-muted-foreground">
                Eletrônicos Premium
              </span>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row items-center gap-4 text-muted-foreground text-sm">
            <a 
              [href]="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-foreground transition-colors"
            >
              WhatsApp: {{ whatsappNumberDisplay }}
            </a>
          </div>
        </div>
        
        <div class="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 Vibeshop. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  constructor(private configService: ConfigService) { }

  get whatsappLink(): string {
    return this.configService.getWhatsappLink('');
  }

  get whatsappNumberDisplay(): string {
    // Simple formatter for (11) 99999-9999 assuming the number is 5511999999999
    const raw = this.configService.WHATSAPP_NUMBER.replace('55', ''); // Remove country code
    return `(${raw.substring(0, 2)}) ${raw.substring(2, 7)}-${raw.substring(7)}`;
  }
}
