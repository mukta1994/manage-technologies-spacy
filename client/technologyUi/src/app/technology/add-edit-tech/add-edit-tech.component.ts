import { Component, OnInit, Input } from '@angular/core';
import {SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-edit-tech',
  templateUrl: './add-edit-tech.component.html',
  styleUrls: ['./add-edit-tech.component.css']
})
export class AddEditTechComponent implements OnInit {
  constructor(private service:SharedService,private router: Router,private toastr: ToastrService) { }
  @Input() tech:any;
  Id:String;
  Name:String;
  Description:String;

  ngOnInit(): void {
    this.Id=this.tech.id;
    this.Name=this.tech.name;
    this.Description=this.tech.description;
  }


  addTechnology(){
    var val={Id:this.Id,Name:this.Name,Description:this.Description}
    this.router.navigate(['/technology/1/',this.tech.rec_per_page]);
    this.service.addTechnology(val).subscribe(res=>{
      this.toastr.success("Technology added successfully")
      this.router.navigate(['/technology/1/',this.tech.rec_per_page]);
    },
    (error) => {
      this.toastr.success("Something went wrong with status code: "+error.status)

    })
  }

  updateTechnology(){
    var val={Id:this.Id,Name:this.Name,Description:this.Description}
  this.router.navigate(['/technology/',this.tech.page_num,this.tech.rec_per_page]);

    this.service.updateTechnology(val).subscribe(res=>{
      this.toastr.success("Technology updated successfully")
      this.router.navigate(['/technology/',this.tech.page_num,this.tech.rec_per_page]);
        },
    (error) => {
      this.toastr.error("Something went wrong with status code: "+error.status)  
    })
  } 

}
