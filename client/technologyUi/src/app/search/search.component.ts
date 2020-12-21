import { Component, OnInit } from '@angular/core';
import {SharedService } from 'src/app/shared.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:SharedService) { }
  SearchResults:any=[];
  queryStr:any;
  Chunks:any;
  Id:any;

  ngOnInit(): void {
    //this.refreshResultList();
  }

  refreshResultList(query){
    this.service.getSearchResultList(query).subscribe(data=>{
      this.SearchResults=data;
    })
  }

  generateChunks(item){
    console.log(item)
    this.service.getNounChounks(item.description).subscribe(data=>{
      this.Chunks=data;
      this.Id=item.id;
      console.log(this.Chunks);
    })
  }

}
