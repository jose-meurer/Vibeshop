import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <section class="py-12 relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Nossos <span class="gradient-text">Produtos</span>
          </h2>
          <p class="text-muted-foreground max-w-xl mx-auto">
            Confira nossa seleção de eletrônicos premium. Clique para conversar no WhatsApp!
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          @for (product of products(); track product.name) {
            <app-product-card 
              [product]="product"
            ></app-product-card>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProductsComponent {
  private productService = inject(ProductService);
  products = toSignal(this.productService.getProducts(), { initialValue: [] });
}
