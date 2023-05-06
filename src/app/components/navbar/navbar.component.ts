import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  aboutUs = false;
  services = false;
  toggleMobileMenu = false;

  ngOnInit(): void {}

  onShowAboutUsMenu() {
    this.aboutUs = !this.aboutUs;
    this.services = false;
  }

  onServicesMenu() {
    this.services = !this.services;
    this.aboutUs = false;
  }

  onCloseDropdownMenu() {
    this.aboutUs = false;
    this.services = false;
    this.toggleMobileMenu = false;
  }

  onToggleMenu() {
    this.toggleMobileMenu = !this.toggleMobileMenu;
  }
}
