import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { InstructionsComponent } from './instructions/instructions.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
  },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
