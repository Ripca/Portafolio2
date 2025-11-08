import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: false
})
export class AboutComponent {
  personalInfo = {
    name: 'Gerson Rodríguez',
    title: 'Desarrollador Full Stack',
    email: 'grodriguez@mapfre.com.gt',
    phone: '+502 XXXX-XXXX',
    location: 'Guatemala',
    description: 'Desarrollador Full Stack con experiencia en tecnologías web modernas, especializado en desarrollo de aplicaciones empresariales y servicios en la nube.'
  };

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/devgerrod', icon: 'github.svg' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin.svg' },
    { name: 'Twitter', url: '#', icon: 'twitter.svg' }
  ];

  scrollToContact(): void {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

