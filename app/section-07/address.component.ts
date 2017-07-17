import { Component, Input } from '@angular/core';

import { Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'address',
  templateUrl: 'address.component.html'
})

export class AddressComponent {
  @Input()
  address: Address;

  showAddress = true;

  regions   = ['East', 'Midwest', 'North', 'South', 'West'];
  states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];
}
