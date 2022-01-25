import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore,{ SwiperOptions } from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images: string[] = [
    'assets/banner-1.jpg',
    'assets/banner-2.jpg',
    'assets/banner-3.jpg',
  ];

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
