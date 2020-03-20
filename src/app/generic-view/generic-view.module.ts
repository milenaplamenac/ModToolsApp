import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { GenericViewComponent } from './generic-view.component';
import { GenericViewRoutingModule } from './generic-view-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MainModule } from '../main/main.module';
import { DiagnoseViewComponent } from './diagnose-view/diagnose-view.component';
import { ProcessedWordComponent } from './processed-word/processed-word.component';
import { ProcessedTokenComponent } from './processed-token/processed-token.component';
import { ProcessedTopicComponent } from './processed-topic/processed-topic.component';
import { ProcessedPredictionComponent } from './processed-prediction/processed-prediction.component';
import { ProcessedPolicyGuideComponent } from './processed-policy-guide/processed-policy-guide.component';



@NgModule({
  declarations: [GenericViewComponent, DiagnoseViewComponent, ProcessedWordComponent, ProcessedTokenComponent, ProcessedTopicComponent, ProcessedPredictionComponent, ProcessedPolicyGuideComponent],
  imports: [
    CommonModule,
    GenericViewRoutingModule,
    SharedComponentsModule,
    BreadcrumbModule,
    MainModule
  ]
})
export class GenericViewModule { }
