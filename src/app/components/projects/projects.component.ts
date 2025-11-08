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
      title: 'Portafolio Web',
      description: 'Mi primer portafolio web desarrollado con HTML, CSS y JavaScript vanilla. Incluye cambio de tema (oscuro/claro), selector de colores, y diseño responsive.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      repoUrl: 'https://github.com/Ripca/Portafolio',
      liveUrl: 'https://ricardoarrecisportfolio.netlify.app/',
      status: 'completed'
    }
  ];

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

