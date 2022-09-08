import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OmdbService } from './omdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Task';

  public OmdbDetails: any;

  constructor(private omdbService: OmdbService) {

  }



ngOnInit() {

}


}

