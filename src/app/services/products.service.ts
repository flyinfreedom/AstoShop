import { Http, Response } from '@angular/http';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'


@Injectable()
export class ProductsService {

  constructor(private http:Http) { }

  Get(): Observable<Product> {
    let model:Product;
    return  this.http.get('../../assets/product.json')
              .map(this.extractData)
              .catch(this.handleError);
  }
  
  private extractData(res: Response):Product {
    let model:Product = res.json()[0];
    return model || { name: '', desc: '', price: 0 };
  }
  
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
