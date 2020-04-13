import { cartDetail } from './cart_details';



export class Cart {
  public constructor(
    public CartItems: cartDetail[],
    public GrandTotal:number
  ) {}
}
