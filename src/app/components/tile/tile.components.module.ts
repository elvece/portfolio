import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GridListDynamicComponent } from './tile.component'
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  declarations: [
    GridListDynamicComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [GridListDynamicComponent],
})
export class GridListDynamicComponentModule { }
