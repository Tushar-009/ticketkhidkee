import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  movies = [
    { title: 'Aamras Party with one day picnic', language: 'English', genre: 'Sci-Fi', poster: 'assets/aamras.jpg' },
    { title: 'Around The World in', language: 'Hindi', genre: 'Action', poster: 'assets/music.jpg' },
    { title: 'Turtle Festival', language: 'Telugu', genre: 'Drama', poster: 'assets/turtal.jpg' },
    { title: 'Krushnai Water World', language: 'Tamil', genre: 'Thriller', poster: 'assets/ultimate.jpeg' }
  ];

  trendingMovies = [
    {
      name: 'Dune: Part Two',
      language: 'English',
      genre: 'Sci-Fi',
      image: 'https://upload.wikimedia.org/wikipedia/en/d/db/Dune_Part_Two_poster.jpg'
    },
    {
      name: 'Pathaan',
      language: 'Hindi',
      genre: 'Action',
      image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Pathaan_film_poster.jpg'
    },
    {
      name: 'RRR',
      language: 'Telugu',
      genre: 'Drama',
      image: 'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg'
    },
    {
      name: 'Leo',
      language: 'Tamil',
      genre: 'Action',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Leo_film_poster.jpg/220px-Leo_film_poster.jpg'
    }
  ];
  offerImages = [
    'assets/banner1.jpeg',
    'assets/banner2.jpeg',
    'assets/banner3.jpeg',
    'assets/banner4.jpeg'
  ];
  
}
