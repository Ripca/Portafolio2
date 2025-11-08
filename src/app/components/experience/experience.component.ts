import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone: false
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'SEGUROS MAPFRE GUATEMALA',
      position: 'Desarrollador Full Stack',
      period: 'Marzo 2024 - Actualidad',
      provider: 'IT Profis (Proveedor de Servicios Informáticos)',
      description: 'Desarrollo y mantenimiento de aplicaciones empresariales, implementación de APIs REST, y gestión de procesos CI/CD.',
      responsibilities: [
        'Desarrollo de aplicaciones web con ASP.NET y Angular',
        'Implementación y consumo de APIs REST con .NET Framework y .NET Core',
        'Gestión de autenticación con JWT, JWS y JWE',
        'Desarrollo de servicios SOAP para integración con sistemas legacy',
        'Automatización de procesos con Power Automate',
        'Implementación de autenticación con Microsoft Entra ID (2FA)',
        'Administración de servidores IIS y Apache Tomcat',
        'Generación de reportes con Jasper Reports'
      ]
    }
  ];
}

