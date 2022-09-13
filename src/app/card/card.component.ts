import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { OmdbDetails } from '../api-service/omdb';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  providers: [CookieService]
})

export class CardComponent implements OnInit {
  @Input()
  o!: OmdbDetails;
  wish:string[] =[];
  constructor(private cookieService: CookieService) { }
  ngOnInit(): void {
    this.wish.includes(this.o.imdbID)
    this.wish=JSON.parse(this.cookieService.get('id_film_wishlist'));
  }
  
  wishlistClick(o: OmdbDetails) : void{
    if(this.wish.includes(o.imdbID))
    {
      const index: number = this.wish.indexOf(o.imdbID);
      if (index !== -1) {
          this.wish.splice(index, 1);
      }  
    }
     else
      this.wish.push(o.imdbID);
    this.cookieService.set('id_film_wishlist',JSON.stringify(this.wish));
  }

}
