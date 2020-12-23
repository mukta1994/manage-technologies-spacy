import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {SharedService } from 'src/app/shared.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter();
  SearchResults:any=[];
  Chunks:any;
  Id:any;
  queryStr=this._Activatedroute.snapshot.paramMap.get("query");
  message:string;
  
  constructor(private service:SharedService, 
    private router: Router,
    private _Activatedroute: ActivatedRoute,
    private toastr:ToastrService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    //this.router.onSameUrlNavigation = 'reload';

  }
  

  ngOnInit(): void {
    //this.refreshResultList();
    this.message='';
    if(this.queryStr=='' || this.queryStr==null)
    {
      this.refreshTechnologyList();
    }
    else{
      this.refreshResultList(this.queryStr)
    }
  }

  clearSearchField() {
    this.queryStr = '';
  }


  refreshTechnologyList(){
    this.service.getTechnologyList(1,10).subscribe(data=>{
      this.SearchResults=data[0].technologies;
    },
    (error) => {
      this.toastr.error("Something went wrong with status code: "+error.status)  

    })
  }

  getData(query){
    if(query.length>=4){
      this.router.navigate(['/search', query]);
    }
    else
    this.toastr.error("Search term should have atleast 4 characters")  

  }

  refreshResultList(query){
    this.service.getSearchResultList(query).subscribe(data=>{
      this.SearchResults=data;
      if(data.length==0){
        this.message="No data found for this word. Find with other words"
      }
    },
    (error) => {
      this.toastr.error("Something went wrong with status code: "+error.status)  
    })
 
  }

  handleKeyUp(e){
    if(e.keyCode === 13 && e.target.value!=''){
      if(e.target.value.length>=4){
        this.router.navigate(['/search',  e.target.value]);
      }
      else 
           this.toastr.error("Search term should have atleast 4 characters")  

    }
  
    
 }

//get noun chunks by passing description
  generateChunks(item){
    console.log(item)
    this.service.getNounChounks(item.description).subscribe(data=>{
      this.Chunks=data;
      this.Id=item.id;
    },
    (error) => {
      this.toastr.error("Something went wrong with status code: "+error.status)  
    })
  }

}
