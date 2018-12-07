import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {DateService} from  './myservice/date.service';

import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { FeedbackComponent } from './feedback/feedback.component';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
 
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ServicesComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
