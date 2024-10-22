import { Component, inject, OnInit, signal } from '@angular/core';
import { CommentComponent } from "../components/comment/comment.component";
import { CommentService } from '../services/comment.service';
import { Comment } from '../interfaces/comment.interface';
import { CommentFormComponent } from "../components/comment-form/comment-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommentComponent, CommentFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  commentService = inject(CommentService);
  comments = signal<Comment[]>([]);

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentService.getComments().subscribe((comments) => {
      this.comments.set(comments)
    });
  }
}
