import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private metaThemeColor = document.querySelector('meta[name=theme-color]');

  currentTheme = this.getTheme();
  isDark = this.currentTheme === 'dark-theme';

  private getTheme() {
    const theme = window.localStorage && window.localStorage.getItem('theme');
    return theme === 'light-theme' ? 'light-theme' : 'dark-theme';
  }

  private setTheme(theme: string) {
    window.localStorage && window.localStorage.setItem('theme', theme);
  }

  private setColor(color: string) {
    this.metaThemeColor?.setAttribute('content', color);
  }

  themeToggle = () => {
    this.isDark = !this.isDark;
    this.currentTheme = this.isDark ? 'dark-theme' : 'light-theme';
    this.setTheme(this.currentTheme);
    this.setColor(this.isDark ? '#252627' : '#fafafa');
  };
}
