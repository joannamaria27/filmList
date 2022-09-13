import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { OmdbDetails } from '../api-service/omdb';
import { OmdbService } from '../api-service/omdb.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html'
})

export class WishlistComponent implements OnInit {
  public omdbWish: OmdbDetails[]=[];
  public wish : string = "";
  constructor(private cookieService: CookieService,private omdbS: OmdbService) {}

  ngOnInit(): void {
    this.wish=JSON.parse(this.cookieService.get('id_film_wishlist'));
    for(let w of this.wish)
    {
      this.omdbS.getOmdbDetailsId(w).subscribe(
        (data : OmdbDetails) => {
          this.omdbWish.push(data);
        })
    }
  }

}

