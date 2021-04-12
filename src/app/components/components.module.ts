import { NgModule } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [CabecalhoComponent, RodapeComponent],
  exports: [CabecalhoComponent, RodapeComponent],
})
export class ComponentsModule {}
