import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eaccess',
  templateUrl: './eaccess.page.html',
  styleUrls: ['./eaccess.page.scss'],
})
export class EaccessPage implements OnInit {

  constructor(private router: Router) { }

  iraInicio() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
