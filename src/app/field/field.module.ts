import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeogebraComponent } from './components/geogebra/geogebra.component';
import { ExerciseModule } from './exercise/exercise.module';
import { ImageComponent } from './components/image/image.component';
import { StructuralComponent } from './components/structural/structural.component';
import { TestComponent } from './components/test/test.component';
import { TextComponent } from './components/text/text.component';
import { VideoComponent } from './components/video/video.component';
import { ControllerModule } from './controller/controller.module';
import { MapperModule } from './mapper/mapper.module';



@NgModule({
  declarations: [
    StructuralComponent,
    TextComponent,
    TestComponent,
    ImageComponent,
    VideoComponent,
    GeogebraComponent
  ],
  imports: [
    CommonModule,
    ExerciseModule,
    ControllerModule,
    MapperModule
  ]
})
export class FieldModule { }
