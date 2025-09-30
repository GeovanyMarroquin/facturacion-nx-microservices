import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './core/layout/sidebar.component';
import { NavbarComponent } from './core/layout/navbar.component';
import { CardComponent } from './shared/ui/card.component';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [RouterModule, SidebarComponent, NavbarComponent, CardComponent, DecimalPipe],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'administration';
  sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
