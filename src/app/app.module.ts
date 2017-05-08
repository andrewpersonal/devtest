import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageFeedComponent } from './image-feed/image-feed.component';
import { GrabImagesService } from './grab-images.service';
import { PostImageService } from './post-image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GrabImagesService, PostImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
