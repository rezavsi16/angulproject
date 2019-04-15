import { Component } from '@angular/core';
import { HttpServices } from '../services/httpServices';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html'
})
export class ApiComponent {
  
constructor(private httpService:HttpServices) { }
    
    httpValueObject;
    httpUserValueObject;
    employee_name;
    employee_salary;
    employee_age;
    jsonObject;
    employee_id;

    getHttpClient(){
    this.httpService.getHttpClients("http://dummy.restapiexample.com/api/v1/employees")
    .subscribe(
        (response:Response)=> {
         this.httpValueObject = response;
            if(response != null || response != ''){
                alert("Get Data Berhasil");
            }
        }
    );
    }

    postHttpClient(){
        this.jsonObject = {"name":this.employee_name,"salary":this.employee_salary,"age":this.employee_age};
        this.httpService.postsHttpClients("http://dummy.restapiexample.com/api/v1/create",this.jsonObject).subscribe(
            (response:Response)=>{
                console.log(response);
                if(response != null || response != ''){
                    alert("Post Data Berhasil");
                }
            }
        );
    }
    putHttpClient(){
        this.jsonObject = {"name":this.employee_nameUP,"salary":this.employee_salaryUP,"age":this.employee_ageUP};
        let url="http://dummy.restapiexample.com/api/v1/update/"+this.employee_idUP;
        this.httpService.putHttpClients(url,this.jsonObject).subscribe(
            (response:Response) =>{
                console.log(response.name);
                if(response.name != null || response.name != ''){
                    alert("Update Berhasil");
                }
            }
        );
    }
    getHttpUser(){
    this.httpService.getHttpClients("https://jsonplaceholder.typicode.com/users")
    .subscribe(
        (response:Response)=> {
        this.httpUserValueObject = response;
        });
    }
}

