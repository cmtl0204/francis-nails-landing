import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Service} from '../../models/service.interface';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  @Input() services: Service[] = [];
  @Input() servicesFiltered: Service[] = [];
  @Input() isVisibleModalService = false;
  @Input() selectedService!: Service;
  
  @Output() filterServicesEvent = new EventEmitter<string>();
  @Output() selectServiceEvent = new EventEmitter<string>();
  @Output() closeModalEvent = new EventEmitter<void>();

  filterServices(category: string) {
    this.filterServicesEvent.emit(category);
  }

  selectService(serviceId: string) {
    this.selectServiceEvent.emit(serviceId);
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  reserve() {
    window.location.href = "https://app.francis-nails.com/public/appointments";
  }
}