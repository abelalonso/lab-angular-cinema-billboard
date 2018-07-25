import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MoviesService } from 'services/movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  providers: [MoviesService]
})
export class MyMovieComponent implements OnInit {
  movieId: number;
  thisMovie: Movie;
  constructor(private route: ActivatedRoute, private ms: MoviesService) { }
    
  ngOnInit() {
    this.route.params
    .subscribe((params)=>this.movieId=params['id']);
    this.thisMovie=this.ms.getMovie(this.movieId);
    console.log(this.ms.getMovie(this.movieId))
  }

}
