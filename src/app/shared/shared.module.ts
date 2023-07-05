import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralItemComponent } from './components/central-item/central-item.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CentralItemComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CentralItemComponent],
})
export class SharedModule {}
