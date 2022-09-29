import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  defaultQuestion = "pet";
  @ViewChild("f") signupForm: NgForm;
  answer: string = "";
  genders = ["male", "female"];

  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = "Superuser";

    // this.signupForm.setValue({
    //   userData: {
    //     userName: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });
  }

  // passed form object using local reference with ngForm from template
  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  // using @ViewChild
  onSubmit() {
    this.submitted = true;
    let formValue =  this.signupForm.value;
    this.user.userName = formValue.userData.userName;
    this.user.email = formValue.userData.email;
    this.user.secretQuestion = formValue.secret;
    this.user.answer = formValue.questionAnswer;
    this.user.gender = formValue.gender;

    // we can pass setValue object to reset method
    // to reset form to specific values
    this.signupForm.reset();
  }
}
