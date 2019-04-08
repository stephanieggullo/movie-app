import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  inputText: string;

  constructor(public movieService: MoviesService, public router: ActivatedRoute) {
    this.router.params.subscribe( params => {
      this.inputText = params['text'];
      this.searchMovie();
    });
  }

  ngOnInit() {}

  searchMovie() {
    if(this.inputText){
      if (this.inputText.length == 0) {
        return;
      }
    }
    this.movieService.movieSearch(this.inputText)
      .subscribe();

    // this.inputText = '';
  }
}
