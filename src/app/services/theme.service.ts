import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDark = true;
  private currentColor = '#3182ed';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    // Solo cargar preferencias si estamos en el navegador
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme');
      const savedColor = localStorage.getItem('primaryColor');

      if (savedTheme) {
        this.isDark = savedTheme === 'dark';
      }

      if (savedColor) {
        this.currentColor = savedColor;
      }

      this.applyTheme();
    }
  }

  toggleTheme(): boolean {
    this.isDark = !this.isDark;

    if (this.isBrowser) {
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      this.applyTheme();
    }

    return this.isDark;
  }

  setColor(color: string): void {
    this.currentColor = color;

    if (this.isBrowser) {
      localStorage.setItem('primaryColor', color);
      document.documentElement.style.setProperty('--primary-color', color);
    }
  }

  private applyTheme(): void {
    if (this.isBrowser) {
      if (this.isDark) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      document.documentElement.style.setProperty('--primary-color', this.currentColor);
    }
  }

  isDarkMode(): boolean {
    return this.isDark;
  }

  getCurrentColor(): string {
    return this.currentColor;
  }
}

