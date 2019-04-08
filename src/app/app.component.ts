import { Component } from '@angular/core';
// import { MoviesService } from './services/movies.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'movie-app';

  constructor( ) {
    // this.movieService.getTopMovies()
    //   .subscribe( data => console.log(data));
  }
}
