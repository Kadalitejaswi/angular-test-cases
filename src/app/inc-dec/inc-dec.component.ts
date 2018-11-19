import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inc-dec',
  templateUrl: './inc-dec.component.html',
  styleUrls: ['./inc-dec.component.css']
})
export class IncDecComponent implements OnInit {
    value=0;
    message:string;

  constructor() { }

  ngOnInit() {
  }
  increment(){
    if(this.value<15){
      this.value+=1;
      this.message="You can still Increase the Value"
    }else{
      this.message="Maximum Value reached"
    }
  }

  decrement(){
    if(this.value>0){
      this.value-=1;
      this.message="You can still Decrease the Value"
    }else{
      this.message="Minimum Value reached"
    }
  }
}
