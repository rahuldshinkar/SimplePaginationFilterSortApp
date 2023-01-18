import { Injectable } from '@angular/core';
import { ICompany } from '../app/model/compdata'; 
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {  
  CompanyData?: ICompany[];   
  constructor(private http: HttpClient) { 
     this.http.get("../assets/data.json").subscribe(data =>{
      // console.log(data);
       return this.CompanyData = <ICompany[]>data;   
      })      
  }

}
