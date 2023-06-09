import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    MenuModule,
  ]
})
export class PrimeNgModule { }
