import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-view-tech',
  templateUrl: './view-tech.component.html',
  styleUrls: ['./view-tech.component.css']
})
export class ViewTechComponent implements OnInit {
  id = this._Activatedroute.snapshot.paramMap.get("id");
  details: any[];
  Id:String;
  Name:String;
  Description:String;
  Chunks:any;

  constructor(private _Activatedroute: ActivatedRoute,
    private service:SharedService, 
    private router: Router,
    private toastr:ToastrService) { }


  ngOnInit(): void {
    this.service.getTechnologyDetail(parseInt(this.id)).subscribe(data=>{
      this.details=data;
      this.Id=data.id;
      this.Name=data.name;
      this.Description=data.description;
    },
    (error) => {
      this.toastr.error("Something went wrong with status code: "+error.status+" Or the technology is not available")  
      console.log(error)

    }) 
  }

  //call api to get noun chunks of description 
  generateChunks(description){
    this.service.getNounChounks(description).subscribe(data=>{
      this.Chunks=data;
    },
    (error) => {
      this.toastr.error("Something went wrong with status code: "+error.status)  
    })
  }

  hideChunks(){
    this.Chunks=null;
  }


}
