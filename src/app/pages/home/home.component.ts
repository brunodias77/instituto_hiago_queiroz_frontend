import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { Card } from '../../types';
import { ButtonComponent } from '../../components/shared/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountUpModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  culturalClass: number = 0;
  SocialPsychology: number = 0;
  Assisted: number = 0;
  collectedFood: number = 0;
  socialActions: number = 0;
  plasticLid: number = 0;
  cards: Card[] = [
    {
      imageSrc: 'https://pagedone.io/asset/uploads/1696244553.png',
      imageAlt: 'Harsh image',
      title: 'Fintech 101: Exploring the Basics of Electronic Payments',
      author: 'Harsh C.',
      timeAgo: '2 year ago',
    },
    {
      imageSrc: 'https://pagedone.io/asset/uploads/1696244579.png',
      imageAlt: 'John image',
      title:
        'From Classroom to Cyberspace: The Growing Influence of EdTech in Fintech',
      author: 'John D.',
      timeAgo: '2 year ago',
    },
    {
      imageSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      imageAlt: 'Alexa image',
      title:
        'Fintech Solutions for Student Loans: Easing the Burden of Education Debt',
      author: 'Alexa H.',
      timeAgo: '2 year ago',
    },
  ];

  constructor() {
    this.startAnimation();
  }

  private startAnimation() {
    this.animateValue(0, 150, 2000, (value) => {
      this.culturalClass = value;
    });

    this.animateValue(0, 100, 2000, (value) => {
      this.SocialPsychology = value;
    });

    this.animateValue(0, 300, 2000, (value) => {
      this.Assisted = value;
    });
    this.animateValue(0, 550, 2000, (value) => {
      this.collectedFood = value;
    });
    this.animateValue(0, 9, 2000, (value) => {
      this.socialActions = value;
    });
    this.animateValue(0, 3000, 2000, (value) => {
      this.plasticLid = value;
    });
  }

  private animateValue(
    start: number,
    end: number,
    duration: number,
    update: (value: number) => void
  ) {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 a 1
      const value = Math.floor(progress * (end - start) + start);

      update(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}
