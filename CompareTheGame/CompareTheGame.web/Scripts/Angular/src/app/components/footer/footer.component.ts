import { Component } from '@angular/core';

@Component({
  selector: 'custom-footer',
  templateUrl: './footer.component.html'
})

export class Footer {
  date = new Date().getFullYear().toString();
}
