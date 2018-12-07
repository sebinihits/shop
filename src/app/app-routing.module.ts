import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:"product",component:ProductComponent},
  {path:"service",component:ServicesComponent},
  {path:"feedback",component:FeedbackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
