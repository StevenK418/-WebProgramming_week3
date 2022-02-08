import { Component } from '@angular/core';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movies=[] as any;
  // title = 'movie-list';

  constructor(private movieService: MovieService)
  {

  }

  ngOnInit()
  {
    this.movies = this.movieService.getMovies();
  }


}
