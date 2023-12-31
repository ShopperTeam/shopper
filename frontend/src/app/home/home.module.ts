import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        HomeComponent,
        NotFoundComponent
    ]
})
export class HomeModule { }
