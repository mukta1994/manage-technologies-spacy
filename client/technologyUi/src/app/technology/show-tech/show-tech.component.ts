import { Component, OnInit } from '@angular/core';
import {SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-show-tech',
  templateUrl: './show-tech.component.html',
  styleUrls: ['./show-tech.component.css']
})
export class ShowTechComponent implements OnInit {

  constructor(private service:SharedService,
     private router: Router,
     private _Activatedroute: ActivatedRoute,
     private toastr:ToastrService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';
   }

  TechnologyList:any=[];
  ModalTitle:String;
  ActivateAddEditComp:boolean;
  page_num:number;
  rec_per_page:number;
  tot_pages:number;
  tech:any;

  ngOnInit(): void {
    this.page_num=1;
    this.rec_per_page=5;
    if (this._Activatedroute.snapshot.paramMap.get('page_num') && this._Activatedroute.snapshot.paramMap.get('rec_per_page')) {    
      this.page_num=parseInt(this._Activatedroute.snapshot.paramMap.get('page_num'));
      this.rec_per_page=parseInt(this._Activatedroute.snapshot.paramMap.get('rec_per_page'));
    }
     this.ActivateAddEditComp=false;
    let element:HTMLElement=document.getElementById('closebutton') as HTMLElement;
      element.click()
    this.refreshTechnologyList(this.page_num,this.rec_per_page);
  }

  addClick(){
    this.tech={
      Id:0, Name:"", Description:"", rec_per_page:this.rec_per_page,page_num:this.page_num
    }
    this.ModalTitle="Add Technology";
    this.ActivateAddEditComp=true;
    
  }

  editClick(item){
    this.tech=item;
    this.tech.rec_per_page=this.rec_per_page;
    this.tech.page_num=this.page_num;
    this.ModalTitle="Edit Technology";
    this.ActivateAddEditComp=true;
  }

  deleteClick(item){
    console.log(item,"item")
    this.service.deleteTechnology(item).subscribe(res=>{
      this.toastr.success("Technology deleted successfully")
      this.refreshTechnologyList(this.page_num,this.rec_per_page);
        },
    (error) => {
      this.toastr.error("Something went wrong with status code: "+error.status)  
    })
  }


  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshTechnologyList(this.page_num,this.rec_per_page);
  }

  pagination(val){
    if(val=="Next")
      this.page_num=this.page_num+1;
    else
      this.page_num=this.page_num-1;
       this.router.navigate(['/technology', this.page_num,this.rec_per_page]);
  }


  refreshTechnologyList(page_num,rec_per_page){
    this.service.getTechnologyList(page_num,rec_per_page).subscribe(data=>{
      this.TechnologyList=data[0].technologies;
      this.tot_pages=data[0].total_pages;
    },
    (error) => {
      this.toastr.error("Something went wrong with status code: "+error.status)  
    })
  }
}
