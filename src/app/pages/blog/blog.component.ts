import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Post } from '../../types';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { CommonModule } from '@angular/common';
import { PostListComponent } from "../../components/post/post-list/post-list.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ButtonComponent, CommonModule, PostListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getAllPosts();
    console.log('this.posts:', this.posts);
  }

  public getAllPosts() {
    this.apiService.getAllPosts().subscribe({
      next: (response) => {
        this.posts = response.posts;
        console.log('Posts:', this.posts);
      },
      error: (error) => {
        console.error('Erro na listagem dos posts:', error);
      },
    });
  }
}
