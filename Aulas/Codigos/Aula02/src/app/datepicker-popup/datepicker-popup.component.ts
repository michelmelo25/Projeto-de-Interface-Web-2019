import { Component, Output, EventEmitter} from '@angular/core';

@Component({
 selector: 'app-datepicker-popup',
 templateUrl: './datepicker-popup.component.html',
 styleUrls: ['./datepicker-popup.component.css']
})

export class DatepickerPopupComponent{
  model;

  @Output() minhaData = new EventEmitter<Object>();
  selecionouData(){
    this.minhaData.emit(this.model);
    // console.log(this.model);
  }

}