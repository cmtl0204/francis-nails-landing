import {Component, HostListener, OnInit, inject} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {HeaderComponent} from '../../components/header/header.component';
import {HeroComponent} from '../../components/hero/hero.component';
import {ServicesComponent} from '../../components/services/services.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {Service} from '../../models/service.interface';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    FooterComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  isScrolled = false;
  navbarHeight = 0;
  isVisibleModalService = false;
  selectedService!: Service;
  services: Service[] = [];
  servicesFiltered: Service[] = [];

  ngOnInit() {
    this.navbarHeight = 120;

    this.applySeo();

    this.services = this.getServices();
    this.servicesFiltered = this.getServices();
  }

  applySeo() {
    const pageTitle = 'Francis Nails & Beauty Spa | Uñas, Cejas y Pestañas';
    const description = 'Manicura, uñas en gel, pedicura spa, diseño de cejas y pestañas. Reserva tu cita online en Francis Nails & Beauty Spa.';

    this.title.setTitle(pageTitle);

    this.meta.updateTag({name: 'description', content: description});
    this.meta.updateTag({name: 'robots', content: 'index,follow,max-image-preview:large'});

    // Open Graph (compartir en redes)
    this.meta.updateTag({property: 'og:title', content: pageTitle});
    this.meta.updateTag({property: 'og:description', content: description});
    this.meta.updateTag({property: 'og:type', content: 'website'});
    this.meta.updateTag({property: 'og:url', content: 'https://francis-nails.com/'});
    this.meta.updateTag({property: 'og:image', content: 'https://francis-nails.com/og-home.jpg'});

    // Twitter
    this.meta.updateTag({name: 'twitter:card', content: 'summary_large_image'});
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 700; // px antes de activar fondo
  }

  reserve() {
    window.location.href = "https://app.francis-nails.com/public/appointments";
  }

  getServices() {
    return [
      {
        id: 'manicure',
        category: 'nails',
        title: 'Manicura Clásica',
        price: '6$',
        duration: '60 minutos',
        serviceDuration: 'Duración 2-3 semanas',
        description: 'Tratamiento completo de uñas que incluye limado, forma, cuidado de cutículas, masaje de manos y aplicación de esmalte de larga duración.',
        includes: ['Limado y forma de uñas', 'Cuidado de cutículas', 'Exfoliación de manos', 'Masaje hidratante', 'Esmalte de calidad premium', 'Acabado brillante'],
        image: '/services/manicure.png'
      },
      {
        id: 'gel',
        category: 'eyelashes',
        title: 'Uñas de Gel',
        price: '15$',
        duration: '90 minutos',
        serviceDuration: 'Duración 1-2 semanas',
        description: 'Manicura de gel con acabado brillante y resistente que dura hasta 3 semanas sin descascararse.',
        includes: ['Preparación de uñas', 'Aplicación de base gel', 'Color gel premium', 'Sellado con top coat', 'Curado UV/LED', 'Acabado perfecto'],
        image: '/services/gel.png'
      },
      {
        id: 'pedicure',
        category: 'eyebrows',
        title: 'Pedicura Spa',
        price: '20$',
        duration: '75 minutos',
        serviceDuration: 'Duración 1 semana',
        description: 'Tratamiento completo para pies con exfoliación, masaje relajante y esmalte duradero.',
        includes: ['Baño de pies aromático', 'Exfoliación profunda', 'Cuidado de cutículas', 'Masaje de pies y piernas', 'Hidratación intensiva', 'Esmalte premium'],
        image: '/services/pedicure.png'
      },
    ]
  };

  selectService(serviceId: string) {
    this.selectedService = this.services.find(item => item.id == serviceId)!;
    this.isVisibleModalService = true;
  }

  filterServices(category: string) {
    console.log(category);
    if (category == 'all') {
      this.servicesFiltered = this.services;
      return;
    }

    this.servicesFiltered = this.services.filter(item => item.category == category);
  }

  closeModal() {
    this.isVisibleModalService = false;
  }
}
