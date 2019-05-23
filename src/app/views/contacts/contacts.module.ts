import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactsComponent } from './pages/contacts.component';
import { HeadModule } from 'src/app/shared/components/head/head.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ContactsComponent],
  imports: [
    ContactsRoutingModule,
    SharedModule],
  exports:[ContactsComponent]

})

export class ContactsModule {}
