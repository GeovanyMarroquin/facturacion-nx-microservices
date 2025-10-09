import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './core/layout/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainComponent } from './shared/components/main/main.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  imports: [RouterModule, SidebarComponent, HeaderComponent, MainComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  protected title = 'administration';
  sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
