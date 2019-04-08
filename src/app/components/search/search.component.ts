import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  inputText: string;
  wantedMovie: any;

  constructor(public movieService: MoviesService) {}

  ngOnInit() {}

  searchMovie() {
    if (this.inputText.length == 0) {
      return;
    }

    this.movieService.movieSearch(this.inputText).subscribe(data => {
      this.wantedMovie = data;
      console.log("movies", this.wantedMovie);
    });
    console.log(this.inputText);
  }
}
