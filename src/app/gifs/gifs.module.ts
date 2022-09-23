import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoComponent } from './components/listado/listado.component';



@NgModule({
  declarations: [
    HomeComponent,
    FormularioComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HomeComponent,
    FormularioComponent,
    ListadoComponent
  ]
})
export class GifsModule { }
