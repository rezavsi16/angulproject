import { Component } from '@angular/core';
import { CalcService } from '../services/calculator.services';

@Component({
  selector: 'app-calc',
  templateUrl: './calculator.component.html'
})
export class CalcComponent {
  title = 'Calculator';
  bil_pertama = 0;
  bil_kedua = 0;
  hasil = 0;
  hasils = Array();
  loop = 0;
  servicesValue = '';
  
  constructor(private calcService: CalcService) { }

  calculatedValue(){
    this.hasil = this.bil_pertama + this.bil_kedua;
    this.hasils[this.loop] = this.hasil;
    this.loop = this.loop +1;
  }
  getServicesCalculator(){
    this.servicesValue =  this.calcService.getCalcServices();
    console.log( this.calcService.getCalcServices() );
  }
  clearList(){
      this.hasils = Array();
      this.loop = 0;
  }
}

