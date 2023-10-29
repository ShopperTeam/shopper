import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ThemeService } from '@core/services/theme.service'
import { HomeLayoutComponent } from '@home/home-layout.component'
import { AdminModule } from './admin/admin.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AdminModule,
        HomeLayoutComponent,
    ],
    providers: [ThemeService],
    bootstrap: [AppComponent],
})
export class AppModule {}
