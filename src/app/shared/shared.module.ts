import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimplist/twimp-list/twimp-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TwimpCardComponent, TwimpListComponent],
  exports: [TwimpCardComponent, TwimpListComponent]
})
export class SharedModule { }
