import { Injectable } from '@angular/core';

export enum ThemeType {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'color-theme';

  initTheme() {
    this.setTheme(this.getTheme());
  }
  setTheme(theme: ThemeType): void {
    const resolvedTheme =
      theme === ThemeType.System ? this.getSystemThemePreference() : theme;
    document.documentElement.classList.remove(ThemeType.Dark, ThemeType.Light);
    document.documentElement.classList.add(resolvedTheme);

    localStorage.setItem(this.THEME_KEY, theme);
  }

  getTheme(): ThemeType {
    const storedTheme = localStorage.getItem(this.THEME_KEY);

    if (storedTheme) {
      return storedTheme as ThemeType;
    }

    return this.getSystemThemePreference();
  }

  private getSystemThemePreference(): ThemeType {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return ThemeType.Dark;
    } else {
      return ThemeType.Light;
    }
  }



  constructor() {}
}
