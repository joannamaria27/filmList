import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { OmdbService } from './omdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

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

   constructor(private omdbS: OmdbService) {

   }



ngOnInit() {

}

 onSearch() {
   let enteredPinCode = this.newForm.get('fieldVal')?.value;
   this.omdbS.getOmdbDetails(enteredPinCode)
   .subscribe(
    (data : any) => {
      console.log(data)
      this.omdbDetails = data.Search;
      console.log(data.Search)
      this.status = data.Status;
      this.requestFinished = true;
      if (this.status === "404" || this.status === "Error") {
        this.errorMessage = "Invalid Pincode " + enteredPinCode + "! Enter a valid one."
        this.requestValid = false;
      }
      else {
        this.errorMessage = "";
        this.requestValid = true;
      }
    },
    (error: any) => {
        this.errorMessage = "Unexpected Error Occurred!";
        this.requestValid = false;
        console.log(this.errorMessage);
      }
    );


    }
  }
