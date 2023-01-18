import { Component, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { MatPaginator  } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
import { ICompany } from './model/compdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APICRUDApp';

  CompanyData?: ICompany[];       

  // displayedColumns = ['id', 'name', 'created', 'modified','country_check_severity'];
  // dataSource!: MatTableDataSource<ICompany>;
 
  // @ViewChild(MatPaginator, { static: false })
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort!: MatSort;

  constructor(private httpClient: HttpClient) {      
  }
  
  ngOnInit(){
    this.httpClient.get("assets/data.json").subscribe((response:any) =>{
    console.log(response);
    // this.dataSource = new MatTableDataSource(response.results);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;    
    })      
  } 

  applyFilter($event: any) {     
    // this.dataSource.filter = $event.target.value;
  }
}
