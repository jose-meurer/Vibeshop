import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor() { }

    private productsSubject = new BehaviorSubject<Product[]>([
        {
            name: "iPhone 15 Pro Max",
            price: "R$ 7.499",
            originalPrice: "R$ 8.999",
            description: "256GB, Titânio Natural, câmera de 48MP, chip A17 Pro",
            image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
        },
        {
            name: "Samsung Galaxy S24 Ultra",
            price: "R$ 6.299",
            originalPrice: "R$ 7.499",
            description: "256GB, Titânio Violeta, S Pen inclusa, câmera 200MP",
            image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
        },
        {
            name: "MacBook Air M3",
            price: "R$ 9.999",
            originalPrice: "R$ 12.499",
            description: "13 polegadas, 8GB RAM, 256GB SSD, chip M3",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        },
        {
            name: "iPad Pro 12.9\"",
            price: "R$ 8.499",
            originalPrice: "R$ 10.999",
            description: "256GB, Wi-Fi, chip M2, tela Liquid Retina XDR",
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        },
        {
            name: "AirPods Pro 2",
            price: "R$ 1.799",
            originalPrice: "R$ 2.299",
            description: "Cancelamento de ruído ativo, áudio espacial, estojo MagSafe",
            image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop",
        },
        {
            name: "Apple Watch Ultra 2",
            price: "R$ 5.999",
            originalPrice: "R$ 7.299",
            description: "49mm, GPS + Celular, caixa de titânio, pulseira Alpine",
            image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
        },
        {
            name: "Sony WH-1000XM5",
            price: "R$ 2.199",
            originalPrice: "R$ 2.799",
            description: "Headphone Bluetooth, cancelamento de ruído líder do mercado",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        },
        {
            name: "Nintendo Switch OLED",
            price: "R$ 2.299",
            originalPrice: "R$ 2.699",
            description: "Tela OLED 7\", 64GB, dock com porta LAN, branco",
            image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop",
        },
    ]);

    getProducts(): Observable<Product[]> {
        return this.productsSubject.asObservable();
    }
}
