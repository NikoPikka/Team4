import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data: any;

  public setData(data){
    this.data = data;
  }

  public getData(){
    return this.data;
  }
  
}
