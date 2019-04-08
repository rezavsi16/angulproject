import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private dataValue = new Object();

  private messageSource = new BehaviorSubject(this.dataValue);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: object) {
    this.messageSource.next(message)
  }

}