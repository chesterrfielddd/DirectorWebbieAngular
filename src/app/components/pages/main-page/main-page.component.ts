import { Component } from '@angular/core';
import { HeroViewComponent } from "./views/hero-view/hero-view.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { PortfolioViewComponent } from "./views/portfolio-view/portfolio-view.component";
import { AboutViewComponent } from "./views/about-view/about-view.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { PopupComponent } from "../../shared/popup/popup.component";

@Component({
  selector: 'app-main-page',
  imports: [HeroViewComponent, HeaderComponent, PortfolioViewComponent, AboutViewComponent, FooterComponent, PopupComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {

}
