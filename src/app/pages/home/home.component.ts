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
  animatedClientValue: number = 0;
  animatedProjectValue: number = 0;
  animatedAffiliateValue: number = 0;

  constructor() {
    this.startAnimation();
  }

  private startAnimation() {
    this.animateValue(0, 250, 3000, (value) => {
      this.animatedClientValue = value;
    });

    this.animateValue(0, 314, 3000, (value) => {
      this.animatedProjectValue = value;
    });

    this.animateValue(0, 27, 3000, (value) => {
      this.animatedAffiliateValue = value;
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
