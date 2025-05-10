import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { TreeRoutingModule } from './tree-routing.module';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { TreeCanvasComponent } from './components/tree-canvas/tree-canvas.component';
import { MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ContextMenuModule } from 'primeng/contextmenu';

@NgModule({
  declarations: [TreeCanvasComponent],
  imports: [
    CommonModule,
    TreeRoutingModule,
    NgxGraphModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    SpeedDial,
    ToastModule,
    ContextMenuModule,
    RadioButtonModule,
  ],
  providers: [MessageService]
})
export class TreeModule {}
