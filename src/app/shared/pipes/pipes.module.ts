import { NgModule } from '@angular/core';
import { FilterPipe } from "app/shared/pipes/filter.pipe";

@NgModule({
  imports: [],
  declarations: [FilterPipe],
  exports: [FilterPipe]
})
export class PipesModule {}
