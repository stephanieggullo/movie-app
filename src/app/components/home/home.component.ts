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
      console.log( this.billboards);
    });

    this.movieService.getTopMovies()
    .subscribe( data => {
      this.topMovies = data;
      console.log( this.topMovies);
    });

    this.movieService.getTopMoviesKids()
    .subscribe( data => {
      this.moviesKids = data;
      console.log( this.moviesKids);
    });
   }

  ngOnInit() {
  }

}
