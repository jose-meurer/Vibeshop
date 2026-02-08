import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [],
    template: `
    <section class="pt-24 pb-12 relative overflow-hidden">
      <div class="absolute inset-0 opacity-30" style="background: var(--gradient-glow)"></div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="mb-6 flex justify-center">
          <img 
            src="/mascote.png" 
            alt="Vibeshop Mascote" 
            class="w-32 h-32 md:w-40 md:h-40 animate-float drop-shadow-2xl"
          />
        </div>
        
        <h1 class="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span class="gradient-text">Vibeshop</span>
        </h1>
        
        <p class="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          Os melhores eletrônicos com preços que cabem no seu bolso. 
          Escolha e fale direto conosco pelo WhatsApp!
        </p>
      </div>
    </section>
  `,
    styles: []
})
export class HeroComponent { }
