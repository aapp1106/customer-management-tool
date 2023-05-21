import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './core/services/service.service';
import { DialogAgreeComponent } from './shared/components/dialog-agree/dialog-agree.component/dialog-agree.component.component';
import { MaterialModule } from './shared/modules/material.module';



@NgModule({
  declarations: [
    AppComponent,
    DialogAgreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
