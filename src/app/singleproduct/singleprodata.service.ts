import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SingleprodataService {
  public url:string=environment.url +"singlepro/";

  constructor(public _http:HttpClient) { }
  getAllproduct()
  {
    return this._http.get(this.url);
  }
}
