import {Component, Input, OnInit} from '@angular/core';
import {trigger} from "@angular/animations";
import {animationCarousel} from "./animations";
import {DirectionType} from "./types/DirectionType";
import {SlideControlType} from "./types/SlideControlType";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('animateCarousel', animationCarousel),
  ]
})
export class CarouselComponent implements OnInit{
  currentImageImage = 0
  slideControl: SlideControlType[] = [];

  @Input() set listOfImages(listOfImages: string[]) {
    this._listOfImages = listOfImages
    this.slideControl = listOfImages.map((image, index) => (index ? 'outleft' : 'inleft'));
  }

  _listOfImages: string[] = []

  change(direction: DirectionType) {
    const increment = direction === 'right' ? -1 : +1;
    const prevImageIndex = this.currentImageImage;
    this.currentImageImage =
      (this.currentImageImage + this._listOfImages.length + increment) % this._listOfImages.length;
    this.onSlide(prevImageIndex, direction);
  }

  onSlide(prevImageIndex: number, direction: DirectionType) {
    this.slideControl[this.currentImageImage] = direction === "left" ? "inleft" : "inright"
    this.slideControl[prevImageIndex] = direction === "left" ? "outleft" : "outright"
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.change("left")
    },6000)
  }

}
