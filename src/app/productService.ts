import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ProductService{
getProducts(): Product[]{
    return[
            {name:"mouse",quantity:25},
            {name:"keyboard",quantity:50}
    ]
}
}

export class Product{
    name:string | undefined;
    quantity:number | undefined;
}