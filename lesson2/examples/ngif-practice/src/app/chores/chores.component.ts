import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Complete LaunchCode prep work', 'Buy groceries', 'yeet something', 'cheese it'];

   targetImage = 'https://cdnb.artstation.com/p/assets/images/images/021/086/513/large/ilia-gorbunov-207.jpg?1570357571';

   constructor() { }

   ngOnInit() {
   }

}
