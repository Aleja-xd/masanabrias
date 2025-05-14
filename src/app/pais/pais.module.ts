import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pais.component';
import { PaisListComponent } from '../pais-list/pais-list.component';

@NgModule({
  imports: [
    CommonModule,
    PaisListComponent
  ],
  declarations: [PaisComponent,PaisListComponent]
})
export class PaisModule { }
