import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeadModule } from './components/head/head.module';

@NgModule({
    exports: [
        CommonModule,
        RouterModule,
        HeadModule
    ],
    declarations: []
})
export class SharedModule { }
