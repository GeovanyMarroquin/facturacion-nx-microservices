import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  label: string;
  icon: string; // heroicon outline path d attribute
  path: string;
  badge?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, RouterModule],
  template: `
    <aside
      class="group fixed inset-y-0 left-0 z-40 w-64 transform bg-primary text-white shadow-lg transition-all duration-300 ease-in-out"
      [ngClass]="{ '-translate-x-full': collapsed }"
      [attr.aria-hidden]="collapsed"
    >
      <div class="h-14 border-b border-white/10 flex items-center px-4 font-semibold tracking-tight">
        <span class="text-secondary">Panel</span>
      </div>
      <nav class="p-3 space-y-1 text-sm overflow-y-auto h-[calc(100vh-3.5rem)]">
        @for (item of items; track item.path) {
          <a
            [routerLink]="item.path"
            routerLinkActive="!bg-white/10 text-secondary"
            class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-colors group/link"
          >
            <svg class="h-5 w-5 text-secondary group-hover/link:text-secondary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.icon" />
            </svg>
            <span class="font-medium flex-1">{{ item.label }}</span>
            @if (item.badge) {
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-secondary/20 text-secondary font-semibold">{{ item.badge }}</span>
            }
          </a>
        }
      </nav>
    </aside>
  `,
  styles: [
    `:host { display: contents; }`
  ]
})
export class SidebarComponent {
  @Input() collapsed = true;

  items: NavItem[] = [
    { label: 'Dashboard', path: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6' },
    { label: 'Facturas', path: '/invoices', icon: 'M9 12h6m-6 4h6M4 7h16M4 17h16M4 12h16' },
    { label: 'Clientes', path: '/clients', icon: 'M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { label: 'Productos', path: '/products', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { label: 'Reportes', path: '/reports', icon: 'M3 3v18h18M7 13l3 3 7-7' },
    { label: 'Configuración', path: '/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.757.426 1.757 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.757-2.924 1.757-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.757-.426-1.757-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];
}
