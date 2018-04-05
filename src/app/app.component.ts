import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {auth, User} from "firebase";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import GoogleAuthProvider = auth.GoogleAuthProvider;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  user: User | null;
  lat:number;
  lng:number;
  constructor(
    public service: AngularFireAuth,
  ) {
    this.service.authState.subscribe(value => {
      this.user = value
    })

  }
  onSubmit(){
    this.lat = this.form.value.latitude;
    this.lng = this.form.value.longitude

  }


  ngOnInit(): void {
    this.form = new FormGroup({
      latitude: new FormControl(51.678418, [
        Validators.required,
      ]),
      longitude: new FormControl(7.809007, [
        Validators.required,
      ]),
    });

  }

  login() {
    this.service.auth.signInWithPopup(new GoogleAuthProvider())
  }
  logout() {
    this.service.auth.signOut();
  }
}
