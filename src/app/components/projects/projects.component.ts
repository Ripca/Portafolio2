import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: false
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portafolio Web Personal',
      description: 'Mi primer portafolio web desarrollado con HTML, CSS y JavaScript vanilla. Incluye cambio de tema (oscuro/claro), selector de colores personalizados, diseño responsive y animaciones suaves.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      repoUrl: 'https://github.com/Ripca/Portafolio',
      liveUrl: 'https://ricardoarrecisportfolio.netlify.app/',
      status: 'completed'
    }
  ];

  projectImages: { [key: string]: string } = {
    'Portafolio Web Personal': 'assets/images/PortafolioImage1.PNG'
  };

  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      'completed': 'Completado',
      'in-progress': 'En Desarrollo',
      'planned': 'Planeado'
    };
    return statusMap[status] || status;
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }
}

