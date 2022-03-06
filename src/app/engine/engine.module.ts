import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamModule } from './exam/exam.module';
import { ScpModule } from './scp/scp.module';
import { StandaloneModule } from './standalone/standalone.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExamModule,
    ScpModule,
    StandaloneModule
  ]
})
export class EngineModule { }
