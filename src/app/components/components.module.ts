import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { TradeTableComponent } from './trade-table/trade-table.component';
import { FolexImageComponent } from './folex-image/folex-image.component';
import { FeatuesComponent } from './featues/featues.component';
import { PlatformComponent } from './platform/platform.component';
import { HighestSecurityComponent } from './highest-security/highest-security.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { FolexDownloadComponent } from './folex-download/folex-download.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    TradeTableComponent,
    FolexImageComponent,
    FeatuesComponent,
    PlatformComponent,
    HighestSecurityComponent,
    HowWorksComponent,
    FolexDownloadComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
