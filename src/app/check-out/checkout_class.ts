import { cartDetail } from '../cart_details';


export class addToCart{
  public constructor(
    public cart:cartDetail [],
    public fk_order_id:number,
    public comment:string
  ){}
}
