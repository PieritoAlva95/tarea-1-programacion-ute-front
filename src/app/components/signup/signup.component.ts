import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(public signUpService: SignupService) {}

  ngOnInit(): void {}

  signUp() {
    this.signUpService
      .signUp(this.signUpService.contact)
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('_id_Contact', res.contact_created._id);
        this.getLogin();
      });
  }

  getLogin() {
    this.signUpService.getLogin().subscribe((res: any) => {
      console.log(res);
      });
  }
}
