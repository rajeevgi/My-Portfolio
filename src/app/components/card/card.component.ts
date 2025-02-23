import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  services = [
    {
      icon: 'fa-solid fa-code',
      title: 'C/C++ Developer',
      description: 'Proficient in C/C++ programming, capable of developing efficient and scalable solutions for various applications.'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Web Developer',
      description: 'Experienced in web development, adapt at creating dynamic and responsive websites using modern front-end and backend technologies.'
    },
    {
      icon: 'fa-solid fa-database',
      title: 'SQL Developer',
      description: 'Specialized in database management with MySQL, capable of designing and optimizing databases to support scalable applications.'
    },
    {
      icon: 'fa-solid fa-file-code',
      title: 'Java Developer',
      description: 'Skilled Java developer with expertise in building robust applications using advanced frameworks like JSP, Servlet, Spring, Spring Boot, Spring MVC, and Hibernate.'
    }
  ];

}
