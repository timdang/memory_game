import { Component, OnInit } from '@angular/core';
import { PlayingCard } from '../playing-card/playing-card.model';
import { sampleSize, shuffle, cloneDeep, isEqual } from 'lodash-es';

export const DECK: PlayingCard[] = [
  {
    suit: 'hearts',
    rank: 'a',
    show: false,
  },
  {
    suit: 'hearts',
    rank: 'k',
    show: false,
  },
  {
    suit: 'hearts',
    rank: 'q',
    show: false,
  },
  {
    suit: 'hearts',
    rank: 'j',
    show: false,
  },
  {
    suit: 'hearts',
    rank: '10',
    show: false,
  },
  {
    suit: 'hearts',
    rank: '9',
    show: false,
  },
  {
    suit: 'hearts',
    rank: '8',
    show: false,
  },
  {
    suit: 'hearts',
    rank: '7',
    show: false,
  },
  {
    suit: 'hearts',
    rank: '6',
    show: false,
  },
  {
    suit: 'hearts',
    rank: '5',
    show: false,
  },
  {
    suit: 'hearts',
    rank: '4',
    show: false,
  },
  {
    suit: 'hearts',
    rank: '3',
    show: false,
  },
  {
    suit: 'hearts',
    rank: '2',
    show: false,
  },
  {
    suit: 'diams',
    rank: 'a',
    show: false,
  },
  {
    suit: 'diams',
    rank: 'k',
    show: false,
  },
  {
    suit: 'diams',
    rank: 'q',
    show: false,
  },
  {
    suit: 'diams',
    rank: 'j',
    show: false,
  },
  {
    suit: 'diams',
    rank: '10',
    show: false,
  },
  {
    suit: 'diams',
    rank: '9',
    show: false,
  },
  {
    suit: 'diams',
    rank: '8',
    show: false,
  },
  {
    suit: 'diams',
    rank: '7',
    show: false,
  },
  {
    suit: 'diams',
    rank: '6',
    show: false,
  },
  {
    suit: 'diams',
    rank: '5',
    show: false,
  },
  {
    suit: 'diams',
    rank: '4',
    show: false,
  },
  {
    suit: 'diams',
    rank: '3',
    show: false,
  },
  {
    suit: 'diams',
    rank: '2',
    show: false,
  },
  {
    suit: 'spades',
    rank: 'a',
    show: false,
  },
  {
    suit: 'spades',
    rank: 'k',
    show: false,
  },
  {
    suit: 'spades',
    rank: 'q',
    show: false,
  },
  {
    suit: 'spades',
    rank: 'j',
    show: false,
  },
  {
    suit: 'spades',
    rank: '10',
    show: false,
  },
  {
    suit: 'spades',
    rank: '9',
    show: false,
  },
  {
    suit: 'spades',
    rank: '8',
    show: false,
  },
  {
    suit: 'spades',
    rank: '7',
    show: false,
  },
  {
    suit: 'spades',
    rank: '6',
    show: false,
  },
  {
    suit: 'spades',
    rank: '5',
    show: false,
  },
  {
    suit: 'spades',
    rank: '4',
    show: false,
  },
  {
    suit: 'spades',
    rank: '3',
    show: false,
  },
  {
    suit: 'spades',
    rank: '2',
    show: false,
  },
  {
    suit: 'clubs',
    rank: 'a',
    show: false,
  },
  {
    suit: 'clubs',
    rank: 'k',
    show: false,
  },
  {
    suit: 'clubs',
    rank: 'q',
    show: false,
  },
  {
    suit: 'clubs',
    rank: 'j',
    show: false,
  },
  {
    suit: 'clubs',
    rank: '10',
    show: false,
  },
  {
    suit: 'clubs',
    rank: '9',
    show: false,
  },
  {
    suit: 'clubs',
    rank: '8',
    show: false,
  },
  {
    suit: 'clubs',
    rank: '7',
    show: false,
  },
  {
    suit: 'clubs',
    rank: '6',
    show: false,
  },
  {
    suit: 'clubs',
    rank: '5',
    show: false,
  },
  {
    suit: 'clubs',
    rank: '4',
    show: false,
  },
  {
    suit: 'clubs',
    rank: '3',
    show: false,
  },
  {
    suit: 'clubs',
    rank: '2',
    show: false,
  },
];

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  cards: PlayingCard[];
  private shownCard: PlayingCard;
  private evaluatingMatch: boolean;

  ngOnInit(): void {
    const cardSet = sampleSize(DECK, 12);
    this.cards = shuffle([...cloneDeep(cardSet), ...cloneDeep(cardSet)]);
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

  private evaluateMatch(card: PlayingCard): void {
    this.evaluatingMatch = true;
    setTimeout(() => {
      if (
        isEqual(this.shownCard.suit, card.suit) &&
        isEqual(this.shownCard.rank, card.rank)
      ) {
        // remove cards from deck
        this.cards = this.cards.filter(
          (deckCard) =>
            !(deckCard.rank === card.rank && deckCard.suit === card.suit)
        );
        this.clearShownCard();
      } else {
        this.shownCard.show = false;
        card.show = false;
        this.clearShownCard();
      }
      this.evaluatingMatch = false;
    }, 500);
  }

  private clearShownCard(): void {
    this.shownCard = null;
  }
}
