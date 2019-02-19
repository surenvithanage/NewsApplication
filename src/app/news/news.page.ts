import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data : any;

  constructor(private newsService : NewsService , private _router : Router) { }

  ngOnInit() {
    this.newsService.getData('everything?q=bitcoin&from=2019-01-19&sortBy=publishedAt').subscribe(
      data => { this.data = data; console.log(this.data); }
    )
  }

  onGoToNewsSinglePage(article){
    this.newsService.currentArticle = article;
    this._router.navigate(['/tabs/news-single']);
  }

}
