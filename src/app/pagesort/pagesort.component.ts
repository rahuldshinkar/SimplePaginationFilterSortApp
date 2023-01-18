import { HttpClient } from '@angular/common/http';
import { Component, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-pagesort',
  templateUrl: './pagesort.component.html',
  styleUrls: ['./pagesort.component.css']
})
export class PagesortComponent {

  CompanyData?: any; 
  pageConfig: any;
  searchText: any;
  isDesc: boolean = false;

  constructor(private httpClient: HttpClient) {
 
    this.pageConfig = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.CompanyData,
    };
  }

  ngOnInit(){ 
    this.httpClient.get("assets/data.json").subscribe((response:any) =>{
      console.log(response);
      this.CompanyData =  response.results;    
    }) 
  } 

  pageChanged(event:any){
    this.pageConfig.currentPage = event;
  }
  
  sort(colName:any) {  
    this.isDesc = !this.isDesc; //change the direction
    let direction = this.isDesc ? 1 : -1;
    // this.CompanyData.sort((a:any, b:any) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)

    this.CompanyData.sort(function (a:any, b:any) {
      if (a[colName] < b[colName]) {
        return -1 * direction;
      }
      else if (a[colName] > b[colName]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }
 
}
