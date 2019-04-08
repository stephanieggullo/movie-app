import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetail: any;
  backTo: string = '';
  searchtext: string = '';

  constructor( public router: ActivatedRoute, public movieService: MoviesService) {
    this.router.params.subscribe( params => {

      console.log(params);
      this.backTo = params['pag'];

      if(params['search']){
        this.searchtext = params['search'];
      }

      this.movieService.getMovieDetail( params['id'])
        .subscribe( item => {
          this.movieDetail = item;
        });
    });
  }

  ngOnInit() {
  }

}
