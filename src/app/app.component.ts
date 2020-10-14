import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './game-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private gameService: GameService) {}
  title = 'Memory Game';

  public onNewGameClick(): void {
    this.router.navigate(['/']);
    this.gameService.shuffleDeck();
  }

  public onAboutClick(): void {
    this.router.navigate(['about']);
  }

  public onInstructionsClick(): void {
    this.router.navigate(['instructions']);
  }
}
