import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LikeComponent } from './like/like.component';
import { ComentariosSectionComponent } from './comentarios-section/comentarios-section.component';
import { ComentarioComponent } from './comentario/comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavBarComponent,
    LikeComponent,
    ComentariosSectionComponent,
    ComentarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
