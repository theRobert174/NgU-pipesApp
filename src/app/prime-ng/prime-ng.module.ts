import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';



@NgModule({
  exports: [
    MenuModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
