import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="h-14 pl-2 pr-4 md:px-4 flex items-center justify-between border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-gray-200">
      <div class="flex items-center gap-3 min-w-0">
        <!-- Sidebar toggle always visible -->
        <button
          (click)="toggleSidebar.emit()"
          class="p-2 rounded hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition"
          [attr.aria-pressed]="!collapsed"
          [attr.aria-label]="collapsed ? 'Expandir menú lateral' : 'Colapsar menú lateral'"
          title="{{ collapsed ? 'Mostrar menú' : 'Ocultar menú' }}"
        >
          @if (collapsed) {
            <!-- Icono abrir -->
            <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h10M4 18h16" />
            </svg>
          } @else {
            <!-- Icono cerrar/colapsar -->
            <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h12M10 12h8M6 18h12" />
            </svg>
          }
        </button>
        <div class="flex items-center gap-2 font-semibold text-primary truncate">
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow">FA</span>
          <span class="hidden sm:inline-block tracking-tight truncate">Facturación</span>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <div class="hidden md:flex flex-col items-end leading-tight">
          <span class="text-xs uppercase tracking-wide text-gray-400">Usuario</span>
          <span class="text-sm font-medium text-gray-700">admin@demo</span>
        </div>
        <button class="relative h-9 w-9 rounded-full bg-secondary text-primary font-semibold flex items-center justify-center shadow hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary">
          <span class="sr-only">Abrir menú usuario</span>
          <span class="text-xs">AD</span>
        </button>
      </div>
    </header>
  `,
})
export class NavbarComponent {
  @Input() collapsed = true;
  @Output() toggleSidebar = new EventEmitter<void>();
}
