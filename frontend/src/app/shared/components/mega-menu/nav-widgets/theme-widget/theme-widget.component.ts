import { ThemeService, ThemeType } from '@/core/services/theme.service'
import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { Flowbite } from '@core/services/flowbite-init'
import { SvgMoonComponent } from '@shared/components/icons/moon.component'
import { SvgSunComponent } from '@shared/components/icons/sun.component'
import { SvgSystemComponent } from '@shared/components/icons/system.component'

@Component({
    selector: 'app-theme-widget',
    standalone: true,
    imports: [
        CommonModule,
        SvgSunComponent,
        SvgMoonComponent,
        SvgSystemComponent,
    ],
    templateUrl: './theme-widget.component.html',
})
@Flowbite()
export class ThemeWidgetComponent implements OnInit {
    @Input({ required: true }) className = ''

    selectedTheme: ThemeType = ThemeType.System

    themes: { theme: ThemeType; label: string; component: unknown }[] = [
        { theme: ThemeType.Light, label: 'Light', component: SvgSunComponent },
        { theme: ThemeType.Dark, label: 'Dark', component: SvgMoonComponent },
        {
            theme: ThemeType.System,
            label: 'System',
            component: SvgSystemComponent,
        },
    ]

    constructor(private themeService: ThemeService) {}

    ngOnInit(): void {
        this.selectedTheme = this.themeService.getTheme()
    }

    setTheme(theme: ThemeType): void {
        this.selectedTheme = theme
        this.themeService.setTheme(theme)
    }
}
