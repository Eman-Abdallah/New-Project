import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AudioComponent } from './audio/audio.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    StartComponent,
    HeaderComponent,
    MainComponent,
    AudioComponent,
    AboutComponent,
    WorkComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [SwiperModule]

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
