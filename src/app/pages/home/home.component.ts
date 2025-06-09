import { Component } from '@angular/core';
import { RandomMovieComponent } from '../../components/random-movie/random-movie.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { DUMMY_MOVIES } from '../../data/dummy-movies';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RandomMovieComponent, MovieListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  movies = DUMMY_MOVIES

  get bestFourMovies() {
    return [...this.movies]
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 4)
  }
}
