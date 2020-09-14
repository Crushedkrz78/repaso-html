import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {
  public title: string;

  constructor(
    private _articleService: ArticleService
  ) {
    this.title = "Blog";
  }

  ngOnInit(): void {
    //console.log(this._articleService.test());
    this._articleService.getArticles().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
