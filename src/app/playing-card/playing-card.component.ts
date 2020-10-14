import { Component, Input } from '@angular/core';

import { PlayingCard } from './playing-card.model';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.scss'],
})
export class PlayingCardComponent {
  @Input() card: PlayingCard;
}
