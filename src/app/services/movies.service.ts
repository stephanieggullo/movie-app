import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class MoviesService {
  private apiKey: string = "3d83068242df1cce6c25a35655f05f3f";
  private movieUrl: string = "https://api.themoviedb.org/3";
  movies: any;

  constructor(private http: HttpClient) {}

  getBillboardMovies() {
    let dateStart = new Date();
    let dateEnd = new Date();
    dateEnd.setDate( dateEnd.getDate() + 7);
    let start = `${ dateStart.getFullYear()}-${ dateStart.getMonth()+1}-${ dateStart.getDate()}`;
    let end = `${ dateEnd.getFullYear()}-${ dateEnd.getMonth()+1}-${ dateEnd.getDate()}`;

    const url = `${this.movieUrl}/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "").pipe(map(res => res["results"]));
  }

  getTopMovies() {
    const url = `${this.movieUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "").pipe(map(res => res["results"]));
  }

  getTopMoviesKids() {
    const url = `${this.movieUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "").pipe(map(res => res["results"]));
  }

  movieSearch( inputText: string) {
    const url = `${this.movieUrl}/search/movie?query=${inputText}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, '').pipe(map( res =>  {
      this.movies = res["results"] ;
      return res["results"] }
      ));
  }

  getMovieDetail( id: string) {
    const url = `${this.movieUrl}/movie/${ id }?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "").pipe(map(res => res));
  }
}
