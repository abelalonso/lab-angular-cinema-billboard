import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'services/movies.service';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [MoviesService]
})
export class MyHomeComponent implements OnInit {

  constructor(private ms: MoviesService) { 

  }

  ngOnInit() {
  }

}
