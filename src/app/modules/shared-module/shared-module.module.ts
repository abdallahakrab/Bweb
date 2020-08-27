import { NgModule, Directive,OnInit, EventEmitter, Output, OnDestroy, Input,ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from '../../components/profile-form/profile-form.component';

@NgModule({
  declarations: [
    ProfileFormComponent
  ],
  exports:[ProfileFormComponent]
})
export class SharedModule {}