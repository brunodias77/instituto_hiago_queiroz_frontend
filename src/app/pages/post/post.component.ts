import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/shared/button/button.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

}
