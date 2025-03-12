import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { Post } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  post: Post | null = null;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getPostById(id).subscribe({
        next: (response) => {
          this.post = response.post;
          this.errorMessage = null;
          console.log('Post:', this.post);
        },
        error: () => {
          this.errorMessage = 'Erro ao carregar o post.';
        },
      });
    } else {
      this.errorMessage = 'ID do post não foi fornecido.';
    }
  }
}
