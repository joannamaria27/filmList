import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { OmdbService } from '../api-service/omdb.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit {
  public omdbWish: string[]=[];
  public wish:any
  constructor(private cookieService: CookieService,private omdbS: OmdbService) {}

  ngOnInit(): void {
    this.wish=JSON.parse(this.cookieService.get('id_film_wishlist'));
   
    for(let w of this.wish)
    {
      this.omdbS.getOmdbDetailsId(w).subscribe(
        (data : any) => {
          this.omdbWish.push(data);
        })
    }
  }

}

