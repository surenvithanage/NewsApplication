import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';
import { NewsPageModule } from '../news/news.module';
import { NewsSinglePageModule } from '../news-single/news-single.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    NewsPageModule,
    NewsSinglePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
