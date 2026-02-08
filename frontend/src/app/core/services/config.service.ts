import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    readonly WHATSAPP_NUMBER = '5511999999999';
    readonly DEFAULT_MESSAGE = 'Olá! Vim pelo site e gostaria de saber mais sobre os produtos.';

    getWhatsappLink(message: string = this.DEFAULT_MESSAGE): string {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodedMessage}`;
    }
}
