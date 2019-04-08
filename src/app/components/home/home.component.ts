import { Component, OnInit } from '@angular/core';
import { MoviesService} from 'src/app/services/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  billboards: any[];
  topMovies: any[];
  moviesKids: any[];

  constructor( public movieService: MoviesService) {
    this.movieService.getBillboardMovies()
    .subscribe( data => {
      this.billboards = data;

    });

    this.movieService.getTopMovies()
    .subscribe( data => {
      this.topMovies = data;

    });

    this.movieService.getTopMoviesKids()
    .subscribe( data => {
      this.moviesKids = data;

    });
   }

  ngOnInit() {
  }

}
