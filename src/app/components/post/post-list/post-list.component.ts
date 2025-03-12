import { Component, Input } from '@angular/core';
import { Post } from '../../../types';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from "../post-card/post-card.component";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  @Input() posts: Post[] = [];
}
