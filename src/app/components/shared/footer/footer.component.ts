import { Component } from '@angular/core';
import { FOOTER_CONFIG } from './footer.config';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly content = FOOTER_CONFIG;
}
