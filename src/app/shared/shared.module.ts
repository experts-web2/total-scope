import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusModule } from '@progress/kendo-angular-menu';
import { ContextMenuModule } from '@progress/kendo-angular-menu';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [CommonModule,MenusModule],
  exports: [MenusModule, ContextMenuModule,HeaderComponent,FooterComponent],
})
export class SharedModule {}
