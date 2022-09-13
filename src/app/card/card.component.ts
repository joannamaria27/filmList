import { NonNullAssert } from '@angular/compiler';
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
  public wish:string[]=[];
  constructor(private cookieService: CookieService) { }
  ngOnInit(): void {
    if(!this.cookieService.check('id_film_wishlist'))
    {
      this.cookieService.set('id_film_wishlist',JSON.stringify(this.wish));
    }    
      this.wish=JSON.parse(this.cookieService.get('id_film_wishlist'));
  }
  
  wishlistClick(o: OmdbDetails) : void{
    this.wish=JSON.parse(this.cookieService.get('id_film_wishlist'));
    if(this.wish.includes(o.imdbID))
    {
      const index: number = this.wish.indexOf(o.imdbID);
      if (index !== -1) {
          this.wish.splice(index, 1);
      }  
      this.cookieService.set('id_film_wishlist',JSON.stringify(this.wish));
    }
     else{
      this.wish.push(o.imdbID);
      this.cookieService.set('id_film_wishlist',JSON.stringify(this.wish));
     }
      

    
  }

}
