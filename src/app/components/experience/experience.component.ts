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
      position: 'Desarrollador',
      period: 'Marzo 2024 - Actualidad',
      provider: 'IT Profis (Proveedor de Servicios Informáticos)',
      description: 'Desarrollo y mantenimiento de aplicaciones, implementación de APIs REST.',
      responsibilities: [
        'Desarrollo de aplicaciones web con ASP.NET',
        'Implementación y consumo de APIs REST con .NET Framework y .NET Core',
        'Gestión de autenticación con JWT, JWS y JWE',
        'Desarrollo de servicios SOAP',
        'Automatización de procesos con Power Automate',
        'Implementación de autenticación con Microsoft Entra ID (2FA)',
        'Conocimiento general de administración de servidores IIS y Apache Tomcat',
        'Creación de reportes con Jasper Reports'
      ]
    }
  ];
}

