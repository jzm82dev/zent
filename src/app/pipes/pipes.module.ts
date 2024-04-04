import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { MycurrencyPipe } from './mycurrency.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
import { AbsolutePipe } from './absolute.pipe';



@NgModule({
  declarations: [FiltroPipe, MycurrencyPipe, ImageSanitizerPipe, AbsolutePipe],
  exports: [FiltroPipe, ImageSanitizerPipe, AbsolutePipe ]
})
export class PipesModule { }
