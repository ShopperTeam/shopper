import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FooterComponent } from './../shared/components/footer/footer.component'
import { HomeRoutingModule } from './home-routing.module'

@NgModule({
    declarations: [],
    imports: [CommonModule, HomeRoutingModule, FooterComponent],
})
export class HomeModule {}
