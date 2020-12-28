import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string = Global.url;
  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          //console.log(response);
          if(response.article){
            this.article = response.article;
          }else{
            this._router.navigate(['/home']);
          }
        }, error => {
          //console.log(error);
          this._router.navigate(['/home']);
        }
      );
    })
  }

  delete(_id){
    swal({
      title: "Estás Seguro?",
      text: "Una vez eliminado no se podrá recuperar la información",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    }).then((willDelete) => {
      if(willDelete){
        this._articleService.delete(_id).subscribe(
          response => {
            swal(
              "Poof! el registro se ha eliminado correctamente!",{
                icon: "success",
              }
            );
            this._router.navigate(['/blog']);
          },error => {
            console.log(error);
            this._router.navigate(['/blog']);
          }
        );
      }else{
        swal("El registro no se eliminará");
      }
    });
  }
}
