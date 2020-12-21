import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl="http://localhost:5000/api";


  constructor(private http:HttpClient) { }

  getTechnologyList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/technology");
  }

  addTechnology(val:any){
    return this.http.post(this.ApiUrl+"/technology",val);
  }

  updateTechnology(val:any){
    console.log(this.ApiUrl+"/technology/"+val.Id)
    return this.http.put(this.ApiUrl+"/technology/"+val.Id,val);
  }

  getSearchResultList(val:any){
    return this.http.get<any>(this.ApiUrl+"/technology/search/"+val);
  }
 
  getNounChounks(val:any){
    console.log(val)
    return this.http.post("http://0.0.0.0:5005/",{ "text": val } );
  }

}
