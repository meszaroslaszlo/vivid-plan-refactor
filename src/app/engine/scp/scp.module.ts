import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerModule } from './controller/controller.module';
import { MapperModule } from './mapper/mapper.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControllerModule,
    MapperModule
  ]
})
export class ScpModule { }
