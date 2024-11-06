import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountUpModule],
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
