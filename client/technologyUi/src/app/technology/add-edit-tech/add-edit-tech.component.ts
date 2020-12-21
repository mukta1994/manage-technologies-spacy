import { Component, OnInit, Input } from '@angular/core';
import {SharedService } from 'src/app/shared.service'


@Component({
  selector: 'app-add-edit-tech',
  templateUrl: './add-edit-tech.component.html',
  styleUrls: ['./add-edit-tech.component.css']
})
export class AddEditTechComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() tech:any;
  Id:String;
  Name:String;
  Description:String;

  ngOnInit(): void {
    this.Id=this.tech.id;
    this.Name=this.tech.name;
    this.Description=this.tech.description;
    console.log(this.tech);

  }
  addTechnology(){
    var val={Id:this.Id,Name:this.Name,Description:this.Description}
    this.service.addTechnology(val).subscribe(res=>{
      alert("added")
    })
  }

  updateTechnology(){
    var val={Id:this.Id,Name:this.Name,Description:this.Description}
    this.service.updateTechnology(val).subscribe(res=>{
      alert("updated")
    })
  }

}
