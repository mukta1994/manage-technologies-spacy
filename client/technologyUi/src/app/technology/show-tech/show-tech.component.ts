import { Component, OnInit } from '@angular/core';
import {SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show-tech',
  templateUrl: './show-tech.component.html',
  styleUrls: ['./show-tech.component.css']
})
export class ShowTechComponent implements OnInit {

  constructor(private service:SharedService) { }

  TechnologyList:any=[];
  ModalTitle:String;
  ActivateAddEditComp:boolean;
  tech:any;
  ngOnInit(): void {
    this.refreshTechnologyList();
  }

  addClick(){
    this.tech={
      Id:0, Name:"", Description:""
    }
    this.ModalTitle="Add Technology";
    this.ActivateAddEditComp=true;
  }

  editClick(item){
    this.tech=item;
    this.ModalTitle="Edit Technology";
    this.ActivateAddEditComp=true;
  }


  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshTechnologyList();
  }

  refreshTechnologyList(){
    this.service.getTechnologyList().subscribe(data=>{
      this.TechnologyList=data;
    })
  }
}
