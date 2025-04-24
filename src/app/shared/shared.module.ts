import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    MovieCardComponent
  ]
})
export class SharedModule { }
