import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OmdbService } from '../api-service/omdb.service';

@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.component.html',
  styleUrls: ['./filmlist.component.css']
})
export class FilmlistComponent implements OnInit {

  title = 'Task';
  status: string | undefined;
  error: string | undefined;
  errorMessage: string | undefined;
  requestFinished = false;
  requestValid = false;
  newForm = new FormGroup({
    fieldVal: new FormControl("Guardians of the Galaxy")
  });

  public omdbDetails: any;
  
  constructor(private omdbS: OmdbService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  onSearch() {
    let enteredPinCode = this.newForm.get('fieldVal')?.value;
    this.omdbS.getOmdbDetails(enteredPinCode).subscribe(
     (data : any) => {
       console.log(data)
       this.omdbDetails = data.Search;
       console.log(data.Search)
       this.status = data.Status;
       this.requestFinished = true;
       if (this.status === "404" || this.status === "Error") {
         this.errorMessage = "Invalid title!"
         this.requestValid = false;
       }
       else {
         this.errorMessage = "";
         this.requestValid = true;
       }
     },(error: any) => {
         this.errorMessage = "Unexpected Error!";
         this.requestValid = false;
         console.log(this.errorMessage);
       }
     );
  }

}
