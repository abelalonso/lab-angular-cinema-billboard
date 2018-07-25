import {Injectable} from "@angular/core";

interface Movie{
id: number;
title: string;
poster: string;
synopsis: string;
genres: Array <string>;
year: number
director: string;
actors: Array <string>
hours: Array <string>;
room: number;
}

@Injectable()
export class MoviesService{
  movies: Array<Movie>;
  getMovies(): Array<Movie>{return this.movies};
  getMovie(id: number): Movie{
    this.movies.forEach(e=>{
      if (e.id === id){
        return e;
      }
    });
    return;
  }
}