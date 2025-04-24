import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    
  ]
})
export class MoviesModule { }
