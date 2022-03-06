import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillInComponent } from './components/fill-in/fill-in.component';
import { GroupingComponent } from './components/grouping/grouping.component';
import { MultiChoiceComponent } from './components/multi-choice/multi-choice.component';
import { PairingComponent } from './components/pairing/pairing.component';
import { SequenceOrderComponent } from './components/sequence-order/sequence-order.component';
import { SingleChoiceComponent } from './components/single-choice/single-choice.component';
import { ControllerModule } from './controller/controller.module';
import { MapperModule } from './mapper/mapper.module';



@NgModule({
  declarations: [
    FillInComponent,
    SequenceOrderComponent,
    SingleChoiceComponent,
    MultiChoiceComponent,
    PairingComponent,
    GroupingComponent
  ],
  imports: [
    CommonModule,
    ControllerModule,
    MapperModule
  ]
})
export class ExerciseModule { }
