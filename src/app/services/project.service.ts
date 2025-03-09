import { Injectable } from '@angular/core';
import { Project } from '../modal/project'

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
      link: 'https://github.com/rajeevgi/Expense_Tracker'
    },
    {
      id: 2,
      title: 'Employee Management System',
      description: 'Manage employee operations efficiently.',
      image: 'assets/hospital-management.png',
      category: 'Enterprise',
      link: 'https://github.com/rajeevgi/Angular_Java_Employee_Management_System'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio built with Angular.',
      image: 'assets/portfolio.png',
      category: 'Web',
      link: 'https://github.com/rajeevgi/My-Portfolio'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
