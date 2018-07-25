import {Injectable} from "@angular/core";

export interface Movie{
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
  movies: Array<Movie> = require("../sample-movies.js");
  getMovies(): Array<Movie>{return this.movies};
  getMovie(id: number): Movie{
    return this.movies.filter(e=>e.id==id)[0];
  }
}