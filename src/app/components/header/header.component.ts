import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  isDarkMode = true;
  themeIcon = 'moon';
  themeText = 'Dark';

  colors = [
    { name: 'blue', value: '#3182ed' },
    { name: 'green', value: '#28e285' },
    { name: 'purple', value: '#a231ed' }
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeService.isDarkMode();
    this.updateThemeIcon();
  }

  toggleTheme(): void {
    this.isDarkMode = this.themeService.toggleTheme();
    this.updateThemeIcon();
  }

  changeColor(color: string): void {
    this.themeService.setColor(color);
  }

  private updateThemeIcon(): void {
    if (this.isDarkMode) {
      this.themeIcon = 'moon';
      this.themeText = 'Dark';
    } else {
      this.themeIcon = 'sun';
      this.themeText = 'Light';
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

