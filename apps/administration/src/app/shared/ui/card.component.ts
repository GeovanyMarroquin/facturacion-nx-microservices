import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-3" [class]="extraClasses">
      @if (title || subtitle) {
        <div class="space-y-1">
          @if (title) {
            <h3 class="text-sm font-semibold text-gray-700 tracking-tight">{{ title }}</h3>
          }
          @if (subtitle) {
            <p class="text-xs text-gray-500">{{ subtitle }}</p>
          }
        </div>
      }
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() extraClasses = '';
}
