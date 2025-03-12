export interface Card {
  imageSrc: string;
  imageAlt: string;
  title: string;
  author: string;
  timeAgo: string;
}

export interface Post {
  postId: string;
  title: string;
  content: string;
  userName: string;
  imageUrl: string;
  publicationDate: Date;
  category: string;
}

export interface GetAllPostsResponse {
  posts: Post[];
}
