import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncDecComponent } from './inc-dec.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('IncDecComponent Suit block', () => {
  let component: IncDecComponent;
  let fixture: ComponentFixture<IncDecComponent>;
  let debug:DebugElement;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[IncDecComponent],

    }).compileComponents();
    fixture=TestBed.createComponent(IncDecComponent); // instance of incdec created
    console.log("Fixture...",fixture);
    debug = fixture.debugElement;
     
  })

  it("should increment/decrement value Test happy flow",()=>{
    expect(fixture.componentInstance).toBeTruthy()
    // for increment method
    fixture.componentInstance.increment()
    expect(fixture.componentInstance.value).toEqual(1);
    expect(fixture.componentInstance.message).toEqual("You can still Increase the Value");  
    // for decrement method
    fixture.componentInstance.decrement()
    expect(fixture.componentInstance.value).toEqual(0);
    expect(fixture.componentInstance.message).toEqual("You can still Decrease the Value");  

  })

  it("should have html Template Test happy Flow",()=>{
    debug.query(By.css('button.increment')).triggerEventHandler('click',null)
    debug.query(By.css('button.increment')).triggerEventHandler('click',null)

    fixture.detectChanges();
    var val=debug.query(By.css('h1')).nativeElement.innerText;
    // console.log(val);
    expect(val).toEqual("2")
    
  })

  
})