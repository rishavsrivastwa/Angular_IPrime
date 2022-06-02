import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  slideIndex: number = 1;
  style = document.querySelector("style");

  constructor() { }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }
   plusSlides(n:number) {
    this.showSlides(this.slideIndex += n);
  }
  
   currentSlide(n:number) {
    this.showSlides(this.slideIndex = n);
  }
  showSlides(n:number) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      // slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    // slides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " active";
  }

}
