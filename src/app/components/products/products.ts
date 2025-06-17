import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
whatsappNumber = '9182017832';

  batters = [
    { name: 'Dosa Batter (1kg)', price: 50, image: 'https://t4.ftcdn.net/jpg/03/62/50/43/240_F_362504388_tOrDPYiAo1USxH3yPi4ypKZmKW0Y0cMj.jpg' },
    { name: 'Idly Batter (1kg)', price: 50, image: 'https://t4.ftcdn.net/jpg/03/49/20/81/240_F_349208187_4pxNYUEREjquLHnL2XDGHPnYAysrKL8E.jpg' },
    { name: 'Vada Batter (1kg)', price: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBCybPPlKpdGK6Vk94y3YM8Xxr9_omy_FDQ&s' }
  ];

  pickles = [
    { name: 'Mango Pickle (250g)', price: 60, image: 'https://t4.ftcdn.net/jpg/01/43/08/01/360_F_143080110_bhy9PAHvK2A5K2HrlJqEnhHlJOXEZ8k0.jpg' },
    { name: 'Red Chili Pickle (250g)', price: 60, image: 'https://t4.ftcdn.net/jpg/01/87/97/95/360_F_187979567_L9oyfU7CT1Cj04UMcELPa9bJWtdLF5GQ.jpg' },
    { name: 'Tomato Pickle (250g)', price: 60, image: 'https://t3.ftcdn.net/jpg/01/17/38/76/240_F_117387626_RAlFnR7oZ3vUU6MaYfi2Yex41FNStjuA.jpg' }
  ];

  readyToCook = [
    { name: 'Chapati (10 pcs)', price: 70, image: 'https://t3.ftcdn.net/jpg/10/38/56/96/240_F_1038569673_XQaSZipQIIxiXpu2DDGpOMIjC238lNpZ.jpg' },
    { name: 'Parota (5 pcs)', price: 80, image: 'https://t4.ftcdn.net/jpg/04/08/80/19/240_F_408801957_BFxS4BRLj3zWspKSH2eoGkGXwJ48akXb.jpg' },
    { name: 'Poori (10 pcs)', price: 60, image: 'https://t3.ftcdn.net/jpg/14/46/01/94/240_F_1446019482_CPyc2CaX199SbdVQdVJIT68oa8l5IcM9.jpg' }
  ];

  getWhatsAppLink(product: any): string {
    const msg = `Hi, I'm interested in ordering: ${product.name} for ₹${product.price}`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }
}



