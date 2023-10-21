import { Component } from '@angular/core'
import { ThemeService } from '@core/services/theme.service'
import { initFlowbite } from 'flowbite'
import { OnInit } from '@angular/core'
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'frontend'

  constructor(private themeService: ThemeService) {
    this.themeService.initTheme()
  }
  ngOnInit(): void {
    initFlowbite()
  }
}
