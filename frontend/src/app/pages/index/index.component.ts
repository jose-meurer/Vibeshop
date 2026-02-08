import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProductsComponent } from '../../components/products/products.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-index',
    standalone: true,
    imports: [HeaderComponent, HeroComponent, ProductsComponent, FooterComponent],
    template: `
    <div class="min-h-screen bg-background">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-products></app-products>
      </main>
      <app-footer></app-footer>
    </div>
  `,
    styles: []
})
export class IndexComponent { }
