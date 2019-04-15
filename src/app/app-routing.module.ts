import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcComponent } from './calculator/calculator.component';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './product/product.edit.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  { path: 'calculator', component: CalcComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/edit', component: EditProductComponent },
  { path: 'api', component: ApiComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
