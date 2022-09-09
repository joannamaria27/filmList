import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CookieService]
})

export class CardComponent implements OnInit {
  @Input() o:any
  wish:string[] =[];
  
  constructor(private cookieService: CookieService) { }
  ngOnInit() {
    this.wish=JSON.parse(this.cookieService.get('id_film_wishlist'));
  }
  
  wishlistClick(o: any){
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
