import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { CardComponent } from '../../ui/card.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, DecimalPipe, CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
