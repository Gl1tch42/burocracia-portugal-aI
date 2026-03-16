import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    // TranslateModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  // providers: [TranslateService]
})
export class SidebarComponent {
  tab = 'aima';

  selectTab(name: string) {
    this.tab = name;
  }

  // constructor(private translate: TranslateService) {
  //   translate.use('pt');
  // }

  setLang(lang: string) {
    // this.translate.use(lang);
  }

}
