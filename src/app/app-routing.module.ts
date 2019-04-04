import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcComponent } from './calculator/calculator.component';
import { ProductComponent, EditProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'calculator', component: CalcComponent },
  { path: 'product', component: ProductComponent },
  // { path: 'product/edit', component: EditProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
