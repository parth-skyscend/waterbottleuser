import { product_class } from './homepage/product_class';


export class cartDetail{
  public constructor(
    public productItem:product_class,
    public qty:number,
    public SubTotal?:number
  ){}
}
