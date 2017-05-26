import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RefComponent } from './ref-details.component';

@NgModule({
  declarations: [
    RefComponent
  ],
  imports: [FormsModule, HttpModule],
  exports: [RefComponent],
  providers: []
})
export class RefDetailsModule { }
