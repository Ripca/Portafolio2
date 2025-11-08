import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
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
    { name: 'GitHub', url: 'https://github.com/devgerrod', icon: '💻' },
    { name: 'LinkedIn', url: '#', icon: '💼' }
  ];
}

