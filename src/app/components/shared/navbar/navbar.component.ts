import { Component, OnInit } from '@angular/core';
import { MoviesService } from "src/app/services/movies.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  inputTxt: string;

  constructor( public movieService: MoviesService, private router: Router) { }

  ngOnInit() {
  }

  searchTxt(){
    if (this.inputTxt.length == 0) {
      return;
    }
    this.router.navigate(['search', this.inputTxt]);
    // this.inputTxt = '';
  }

}
