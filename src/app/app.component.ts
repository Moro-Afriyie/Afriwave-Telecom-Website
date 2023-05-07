import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
import { gsap, Expo } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'voltican';
  isClientRoute = false;
  @ViewChild('overlayRef') overlayRef!: ElementRef;
  // @ViewChild('logoRef') logoRef!: ElementRef;
  // @ViewChild('navRef') navRef!: ElementRef;
  // @ViewChild('sideStripRef') sideStripRef!: ElementRef;
  // @ViewChild('rowRef') rowRef!: ElementRef;
  // @ViewChild('headerRef') headerRef!: ElementRef;

  private gsapContext: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Route has changed, perform actions or logic here
        this.isClientRoute = this.router.url === '/about/clients';
      }
    });
  }

  ngAfterViewInit(): void {
    this.gsapContext = gsap.timeline();
    this.gsapContext
      .to(this.overlayRef.nativeElement.querySelector('h1'), {
        opacity: 0,
        y: -60,
        duration: 3,
        ease: Expo.easeInOut,
      })
      .to(
        this.overlayRef.nativeElement,
        {
          top: '-100%',
          duration: 2,
          ease: Expo.easeInOut,
        },
        '-=2'
      )
      .from(
        '.logo',
        {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: Expo.easeInOut,
        },
        '-=2.4'
      );
    /*
      .from(
        this.navRef.nativeElement.querySelectorAll('ul li'),
        {
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut,
          stagger: 0.2,
        },
        '-=2.4'
      )
      .from(
        this.sideStripRef.nativeElement,
        {
          opacity: 0,
          y: 40,
          duration: 2,
          ease: Expo.easeInOut,
        },
        '-=2.4'
      )
      .from(
        this.rowRef.nativeElement,
        {
          opacity: 0,
          x: 40,
          duration: 2,
          ease: Expo.easeInOut,
        },
        '-=2.4'
      )
      .from(
        this.rowRef.nativeElement.querySelector('h6'),
        {
          opacity: 0,
          y: 40,
          duration: 2,
          ease: Expo.easeInOut,
        },
        '-=3'
      )
      .from(
        this.rowRef.nativeElement.querySelector('p'),
        {
          opacity: 0,
          y: 20,
          duration: 2,
          ease: Expo.easeInOut,
        },
        '-=3.2'
      )
      .from(
        this.headerRef.nativeElement.querySelector('h1'),
        {
          opacity: 0,
          y: 20,
          duration: 2,
          ease: Expo.easeInOut,
        },
        '-=3.2'
      )
      .from(
        this.headerRef.nativeElement.querySelector('p'),
        {
          opacity: 0,
          y: 20,
          duration: 2,
          ease: Expo.easeInOut,
        },
        '-=3.4'
      )
      .from(
        this.headerRef.nativeElement.querySelector('button'),
        {
          opacity: 0,
          y: 20,
          duration: 2,
          ease: Expo.easeInOut,
        },
        '-=3.6'
      );
      */
  }

  ngOnDestroy(): void {
    if (this.gsapContext) {
      this.gsapContext.kill();
      this.gsapContext.clear();
    }
  }
}
