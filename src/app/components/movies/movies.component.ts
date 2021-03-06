import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Input('allMovies') allMovies;
  @Input('title') title;

  constructor() {
  }

  ngOnInit() {
  }

}
