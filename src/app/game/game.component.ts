import { Component, OnDestroy, OnInit } from '@angular/core';
import { isEqual, every } from 'lodash-es';
import { Subscription } from 'rxjs';

import { GameService } from '../game-service.service';
import { PlayingCard } from '../playing-card/playing-card.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  constructor(private gameService: GameService) {}

  cards: PlayingCard[];
  private shownCard: PlayingCard;
  private evaluatingMatch: boolean;
  private subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.gameService.deck$.subscribe((deck) => (this.cards = deck))
    );
    this.gameService.shuffleDeck();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onCardClick(card: PlayingCard): void {
    if (card.show || this.evaluatingMatch) {
      return;
    }
    card.show = true;
    if (!this.shownCard) {
      this.shownCard = card;
      return;
    }
    this.evaluateMatch(card);
  }

  private evaluateMatch(clickedCard: PlayingCard): void {
    this.evaluatingMatch = true;
    setTimeout(() => {
      if (
        isEqual(this.shownCard.suit, clickedCard.suit) &&
        isEqual(this.shownCard.rank, clickedCard.rank)
      ) {
        // remove cards from deck
        this.cards = this.cards.map((deckCard: PlayingCard) => {
          return {
            ...deckCard,
            matched:
              deckCard.matched ||
              (deckCard.rank === clickedCard.rank &&
                deckCard.suit === clickedCard.suit),
          };
        });
        this.clearShownCard();
        this.checkForGameOver();
      } else {
        this.shownCard.show = false;
        clickedCard.show = false;
        this.clearShownCard();
      }
      this.evaluatingMatch = false;
    }, 500);
  }

  private checkForGameOver(): void {
    if (every(this.cards, (card) => card.matched)) {
      alert('Game Over');
      this.gameService.shuffleDeck();
    }
  }

  private clearShownCard(): void {
    this.shownCard = null;
  }
}
