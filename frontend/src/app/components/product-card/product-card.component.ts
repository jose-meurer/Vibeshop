import { Component, input, computed, inject } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { ConfigService } from '../../core/services/config.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  template: `
    <div class="group h-full flex flex-col gradient-border rounded-xl bg-card overflow-hidden transition-all duration-300 hover:scale-[1.02] card-glow isolate transform-gpu">
      <div class="aspect-square bg-muted flex items-center justify-center overflow-hidden rounded-t-xl">
        <img 
          [src]="product().image" 
          [alt]="product().name"
          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 transform-gpu"
        />
      </div>
      
      <div class="p-5 flex flex-col flex-1">
        <h3 class="font-display text-lg font-bold mb-2 text-foreground">
          {{ product().name }}
        </h3>
        
        <p class="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
          {{ product().description }}
        </p>
        
        <div class="flex items-baseline gap-2 mb-4">
          <span class="font-display text-2xl font-bold gradient-text">
            {{ product().price }}
          </span>
          @if (product().originalPrice) {
            <span class="text-sm text-muted-foreground line-through">
              {{ product().originalPrice }}
            </span>
          }
        </div>
        
        <a
          [href]="whatsappLink()"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90"
          style="background: var(--gradient-primary)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          Comprar via WhatsApp
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class ProductCardComponent {
  product = input.required<Product>();
  private configService = inject(ConfigService);

  whatsappLink = computed(() => {
    const p = this.product();
    const message = `Olá! Tenho interesse no produto: ${p.name} - ${p.price}`;
    return this.configService.getWhatsappLink(message);
  });
}
