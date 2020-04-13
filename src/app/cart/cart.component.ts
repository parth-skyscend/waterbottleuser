import { Component, OnInit } from '@angular/core';
import { CartDataService } from './cart-data.service';
import { Router } from '@angular/router';
import { cartDetail } from '../cart_details';
import { Cart } from '../cart_class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _cartservice:CartDataService,private _router:Router) { }
  numArr:number[]=[1,2,3,4,5,6,7,8,9,10]
  GrandTotal:number=0;
  arrcartItem:cartDetail[]=[];
  txtQuantity:string;
  cart:Cart=JSON.parse(localStorage.getItem('cart'));

  ngOnInit(): void {
    console.log(this.cart);
    if (this.cart!=null){
      if(this.cart.CartItems.length>=0){
        this.arrcartItem=this.cart.CartItems;
      }
      this.GrandTotal=this.cart.GrandTotal;
    }

  }
  onRemoveFromCart(selectedProductId,index){
    console.log(selectedProductId);
    this.GrandTotal=this._cartservice.onRemoveFromCart(selectedProductId);
    this.arrcartItem.splice(index,1);
  }

  onQuantityincr(item:cartDetail,txtQty:string, index:number){
    // console.log(txtQty);
    let x=parseInt(txtQty);
    x+=1;
    txtQty=x+"";
    console.log(txtQty);
    this.onQtyChange(item,txtQty,index);
  }

  onQuantitydecr(item:cartDetail,txtQty:string, index:number){
    // console.log(txtQty);
    let x=parseInt(txtQty);
    x-=1;
    if (x<1){
      this.onRemoveFromCart(item.productItem.pro_id,index);
    }
    else{
      txtQty=x+"";
      console.log(txtQty)
      this.onQtyChange(item,txtQty,index);
    }
  }


  onQtyChange(item:cartDetail,txtQty:string, index:number){
    item.qty = +txtQty;
    console.log(item.qty);
    item.SubTotal = this._cartservice.doSubTotal(item.productItem.pro_price,item.qty);

    this.cart.CartItems[index]=item;
    this.cart.GrandTotal=this._cartservice.doGrandTotal(this.cart.CartItems);
    this.GrandTotal = this.cart.GrandTotal;
    localStorage.setItem('cart',JSON.stringify(this.cart));
  }

  onProceedTOCheckOut(){
    this._router.navigate(['/checkout'])
  }
}
