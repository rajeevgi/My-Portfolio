import { Injectable } from '@angular/core';
import { Project } from '../modal/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Expense Tracker',
      description: 'Track your expenses using Angular & Spring Boot.',
      image: 'assets/expense-tracker.png',
      category: 'Web',
      link: 'https://github.com/your-repo'
    },
    {
      id: 2,
      title: 'Hospital Management',
      description: 'Manage hospital operations efficiently.',
      image: 'assets/hospital-management.png',
      category: 'Enterprise',
      link: 'https://github.com/your-repo'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio built with Angular.',
      image: 'assets/portfolio.png',
      category: 'Web',
      link: 'https://yourportfolio.com'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
