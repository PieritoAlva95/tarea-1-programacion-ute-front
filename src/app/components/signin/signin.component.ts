import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(public signInService: SigninService, private router: Router) {}

  ngOnInit(): void {}

  signIn(form: NgForm) {
    this.signInService
      .signIn(this.signInService.contact)
      .subscribe((res: any) => {
        sessionStorage.setItem('token', res.token);
        form.reset();
        this.router.navigate(['/notes']);
      });
  }
}
