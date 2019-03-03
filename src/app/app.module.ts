import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { AvatarComponent } from './avatar/avatar.component';
import { PruebaDestroyComponent } from './prueba-destroy/prueba-destroy.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    SortPipe,
    FilterPipe,
    AvatarComponent,
    PruebaDestroyComponent,
    FeedComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
