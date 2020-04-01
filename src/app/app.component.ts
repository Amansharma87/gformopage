import { Component, OnInit} from '@angular/core';
import {  HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  [x: string]: any;
  d:any;
  ch:any;
  valuechanged="false";
 object={
  };
  temp=[]
 
  server="false";
  constructor(private http: HttpClient){
    
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
     }
     onSubmit(f:any){
      console.log(f.value);
      for (let i = 0; i < this.d.length; i++) {
        if(this.d[i].type=='button'){
          this.http.post(this.d[i].api.uri,f.value).subscribe(
            (response:any)=>{
              console.log(response)
            }
          )
        }
        
      }
    
    }
    onchange(x:any,key:string,k:number){
        this.valuechanged="false";
       for (let i = k+1;i<this.d.length; i++)
       {
        if("showIf" in this.d[i]){
          if(this.d[i].showIf.value==x){
           this.ch=this.d[i]
            this.object[this.d[i].name]=i;
            break;
          }
          if(key!=this.d[i].name){
           delete this.object[this.d[i].name];
            }
            
          
       }
       
       }
       console.log(this.object)
      }

 
}
