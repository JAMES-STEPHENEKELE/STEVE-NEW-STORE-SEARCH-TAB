import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
hearts = faHeart
@Input()
product :{
  id:number,
  name: string, 
  description: string, 
  brand:string, 
  gender: string, 
  category: string, 
  size: number[], 
  color:string[], 
  price:number, 
  discountedPrice?: number, is_in_inventory: boolean, items_left: number, imageURL:string, 
  slug: string
};

}
