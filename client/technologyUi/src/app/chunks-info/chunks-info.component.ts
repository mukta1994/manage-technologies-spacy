import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chunks-info',
  templateUrl: './chunks-info.component.html',
  styleUrls: ['./chunks-info.component.css']
})
export class ChunksInfoComponent implements OnInit {

  constructor() { }
  @Input() Chunks:any;
  Chunks_info:any;

  ngOnInit(): void {
    this.Chunks_info=this.Chunks;
  }

}
