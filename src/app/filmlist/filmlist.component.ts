import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OMDb, OmdbDetails } from '../api-service/omdb';
import { OmdbService } from '../api-service/omdb.service';

@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.component.html'
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

  public omdbDetails: OmdbDetails[] =[];
  
  constructor(private omdbS: OmdbService) {}
  ngOnInit(): void {}
  
  onSearch(): void {
    let enteredPinCode = this.newForm.get('fieldVal')?.value ?? "";
    this.omdbS.getOmdbDetails(enteredPinCode).subscribe({
      next: data => {
        this.omdbDetails = data.Search;
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
      },
      error: error => {
        this.errorMessage = "Unexpected Error!";
        this.requestValid = false;
      }

    });
  }
}
