import {AfterViewInit, Component, HostListener, signal} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgClass
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit{
  isScrolled = false;
  navbarHeight = 0;

  ngAfterViewInit() {
    const nav = document.querySelector('nav');
    this.navbarHeight = nav?.clientHeight ?? 0;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 700; // px antes de activar fondo
  }

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  // (Opcional) si cambias a desktop, cierra el menú
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768) this.closeMobileMenu();
  }
}
