import { Component, ElementRef, ViewChild, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  @ViewChild('myVideo', { read: ElementRef }) myVideo: ElementRef;
  title = 'wedding';
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  ngOnChanges() {
    this.setCountDown()
  }
  ngOnInit() {
    this.setCountDown()
  }
  setCountDown() {
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

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
  console.log(this.seconds)
}, 1000);
  }
}
