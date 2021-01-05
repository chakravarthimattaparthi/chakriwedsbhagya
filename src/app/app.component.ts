import { Component, ElementRef, ViewChild, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var google;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  title = 'wedding';
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  videoTag;
  imageGallry = [
    {
      type : 'pre-wedding',
      src: 'https://photos.app.goo.gl/txtgDr4PQQuUxiqQ7'
    },
    {
      type : 'pre-wedding',
      src: 'https://photos.google.com/album/AF1QipP0K-Z74tl75WBmROv0dgiHmOY5qXFd3vlPRrjz/photo/AF1QipOIx4VcC81Lpkdnqy4uPa3PhJ7vsRlK7uazGCeN'
    }
  ]
  constructor(private sanitizer: DomSanitizer) {
    //this.videoTag = this.getVideoTag();
    
  }
  ngOnChanges() {
    this.setCountDown()
  }
  ngOnInit() {
    this.setCountDown();
    this.initMap();
  }
  ngAfterViewInit() {
   // document.getElementById('video').play();
  }
  setCountDown() {
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("seconds").innerHTML = this.seconds;
      document.getElementById("days").innerHTML = this.days;
      document.getElementById("minutes").innerHTML = this.minutes;
      document.getElementById("hours").innerHTML = this.hours;
    }, 1000);
  }
  private getVideoTag() {
    return this.sanitizer.bypassSecurityTrustHtml(
      ``
    );
  }
  initMap(): void {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 4,
        center: uluru,
      }
    );
  
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
}


