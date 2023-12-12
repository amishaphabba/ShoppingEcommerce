import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {

  starRating:Array<number>
  maxRating:number = 5
  currentRating:number = 0
  initialRating:number = 3

  constructor(){
    // first fill 0 into array then map _,i means take previous value _ then add 1 to it
    this.starRating = Array(this.maxRating).fill(0).map((_,i)=>i+1)
    // console.log(this.starRating)
    this.currentRating = this.initialRating
  }

  rate(rating:number){
    this.currentRating = rating
  }


}
