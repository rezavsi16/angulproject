import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcComponent } from './calculator/calculator.component';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './product/product.edit.component';

const routes: Routes = [
  { path: 'calculator', component: CalcComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/edit', component: EditProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
