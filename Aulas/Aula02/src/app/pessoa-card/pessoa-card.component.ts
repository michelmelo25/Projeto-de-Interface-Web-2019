import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-card',
  templateUrl: './pessoa-card.component.html',
  styleUrls: ['./pessoa-card.component.css']
})
export class PessoaCardComponent {

  @Input() pessoa:any;
}
