import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(public signUpService: SignupService, private router: Router) {}

  ngOnInit(): void {}

  signUp(form: NgForm) {
    this.signUpService.signUp(this.signUpService.user).subscribe((res: any) => {
      sessionStorage.setItem('token', res.token);
      form.reset();
      this.router.navigate(['/notes']);
    });
  }
}
