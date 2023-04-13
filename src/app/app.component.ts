import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyDzBCoaDMY955ygrfPkiQHsmA_2ULwB9jo",
      authDomain: "firebox-754d7.firebaseapp.com",
      databaseURL: "https://firebox-754d7-default-rtdb.firebaseio.com",
      projectId: "firebox-754d7",
      storageBucket: "firebox-754d7.appspot.com",
      messagingSenderId: "456061245370",
      appId: "1:456061245370:web:fa43ef76f2d97d7ca8ef83",
      measurementId: "G-BND4R0YFSR"
    };

    
    
    firebase.initializeApp(firebaseConfig)
  }
  title = 'app3';
}
