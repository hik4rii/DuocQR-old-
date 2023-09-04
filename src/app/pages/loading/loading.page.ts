import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['login']);
<<<<<<< HEAD
    },1500);
=======
    },1000);
>>>>>>> 0f64813ab593701c09fe33cd10fe0da0509ce472
  }

}
