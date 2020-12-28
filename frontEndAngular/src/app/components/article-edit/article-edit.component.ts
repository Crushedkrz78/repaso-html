import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {
  public article: Article;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  public url: string = Global.url;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url+'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el artículo',
      afterUploadMsg_success: 'Successfully Uploaded!',
      afterUploadMsg_error: 'Upload Failed!'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.is_edit = true;
    this.page_title = "Editar Artículo";
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit(){
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.articleUpdated;
          //Alert
          swal(
            'Articulo Editado!!',
            'El articulo se ha editado correctamente',
            'success'
          );
          this._router.navigate(['/blog/articulo', this.article._id]);
        }else{
          this.status = 'error';
          swal(
            'Edición fallida!!',
            'El articulo no se ha editado correctamente',
            'error'
          );
        }
      },
      error => {
        console.log(error)
        this.status = 'error';
      }
    );
  }

  imageUpload(data){
    let image_data = data.body;
    this.article.image = image_data.image;
  }

  getArticle(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          console.log(response);
          if(response.article){
            this.article = response.article;
          }else{
            this._router.navigate(['/home']);
          }
        }, error => {
          this._router.navigate(['/home']);
        }
      );
    })
  }

}
