import { Routes } from '@angular/router';
import { ChatComponent } from './features/chat/chat.component';
import { DocumentAnalysisComponent } from './features/document-analysis/document-analysis.component';
import { FinanceComponent } from './features/finance/finance.component';

export const routes: Routes = [
    {
    path: 'aima',
    component: ChatComponent
  },
  {
    path: 'financas',
    component: FinanceComponent
  },
  {
    path: 'documents',
    component: DocumentAnalysisComponent
  },

  {
    path: '',
    redirectTo: 'aima',
    pathMatch: 'full'
  }
];
