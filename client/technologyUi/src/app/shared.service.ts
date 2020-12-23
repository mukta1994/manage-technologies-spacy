import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl="http://localhost:5000/api";


  constructor(private http:HttpClient) { }

  getTechnologyList(page_num:number,rec_per_page:number){
    return this.http.get<any>(this.ApiUrl+"/technology/"+page_num+"/"+rec_per_page);
  }

  getTechnologyDetail(id:number){
    return this.http.get<any>(this.ApiUrl+"/technology/detail/"+id);
  }

  addTechnology(val:any){
    return this.http.post(this.ApiUrl+"/technology",val);
  }

  updateTechnology(val:any){
    console.log(this.ApiUrl+"/technology/"+val.Id)
    return this.http.put(this.ApiUrl+"/technology/"+val.Id,val);
  }

  deleteTechnology(val:any){
    return this.http.delete(this.ApiUrl+"/technology/"+val.id);
  }

  getSearchResultList(val:any){
    return this.http.get<any>(this.ApiUrl+"/technology/search/"+val);
  }
 
  getNounChounks(val:any){
    return this.http.post("http://0.0.0.0:5005/",{ "text": val } );
  }

}
