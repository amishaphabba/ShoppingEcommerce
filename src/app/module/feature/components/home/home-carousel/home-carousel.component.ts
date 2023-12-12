import { Component } from '@angular/core';
import { HomeCarouselData } from 'src/Data/homeCarouselData';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})

export class HomeCarouselComponent {
  carouselData:any
  currentSlide:number=0;
  interval!:number;

  ngOnInit(){
    this.carouselData = HomeCarouselData;
    this.autoPlay()
  }

  autoPlay(){
    setInterval(()=>{
      this.nextSlide();
    },2000)
  }

  nextSlide(){
    this.currentSlide=(this.currentSlide+1) % (this.carouselData.length)
  }

}
