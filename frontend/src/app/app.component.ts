import { Component } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'frontend';

  constructor(private themeService: ThemeService) {
    this.themeService.initTheme();
  }
  ngOnInit(): void {
    initFlowbite();
  }
}
