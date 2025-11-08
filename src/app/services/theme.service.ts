import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDark = true;
  private currentColor = '#3182ed';

  constructor() {
    // Cargar preferencias guardadas
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

  toggleTheme(): boolean {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    this.applyTheme();
    return this.isDark;
  }

  setColor(color: string): void {
    this.currentColor = color;
    localStorage.setItem('primaryColor', color);
    document.documentElement.style.setProperty('--primary-color', color);
  }

  private applyTheme(): void {
    if (this.isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    document.documentElement.style.setProperty('--primary-color', this.currentColor);
  }

  isDarkMode(): boolean {
    return this.isDark;
  }

  getCurrentColor(): string {
    return this.currentColor;
  }
}

