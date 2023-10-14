import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { ThemeService } from '@core/services/theme.service';
import { HomeLayoutComponent } from '@home/home-layout.component';
import { MonComponentComponent } from './mon-component/mon-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MonComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    HomeLayoutComponent
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
