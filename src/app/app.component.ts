import { Component, OnInit, Output, Input } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  d:any;
 
  server="false";
  constructor(private http: HttpClient){
    
  }
  getoptions(selecteditem:any){
   this.d=selecteditem.target.value;
    console.log(selecteditem.target.value);
  }
  ngOnInit(){
    
      this.http.get('https://ca.platform.simplifii.xyz/api/v1/static/assignment4')
      .subscribe(
        (response:any)=>{
          
          const data=response.response.data;
          console.log(data);
          this.d=data;
        },
     
  
    );
  
     };
  

 
}
