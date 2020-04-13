import { cartDetail } from '../cart_details';

export class addToCart{
  constructor(
    public cart:cartDetail[],
    public order_date:string,
    public fk_customer_id:number,
    public order_status:string
  ){}
}
