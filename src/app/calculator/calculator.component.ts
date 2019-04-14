import { Component } from '@angular/core';
import { CalcService } from '../services/calculator.services';
import { HttpServices } from '../services/httpServices';
import { HttpResponse } from '@angular/common/http';

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
  httpValueObject;
  
  constructor(private calcService: CalcService,private httpService:HttpServices) { }

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
  getHttpClient(){

   this.httpService.getHttpClients()
    .subscribe(
      (response:Response)=> {
        // console.log(response);
        this.httpValueObject = response;
        console.log(this.httpValueObject);
      }
    );

  // this.httpService.getHttpClients()
  //   .subscribe(data =>this.httpValueObject = data);
  console.log(this.httpValueObject);

  // this.httpService.getHttpClients().subscribe((res:Response)=>{return res});

    // console.log(this.httpValueObject);
  }
}

