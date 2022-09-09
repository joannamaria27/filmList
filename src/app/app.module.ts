import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule  } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CardComponent } from './card/card.component';
import { FilmlistComponent } from './filmlist/filmlist.component';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    CardComponent,
    FilmlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule 
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
