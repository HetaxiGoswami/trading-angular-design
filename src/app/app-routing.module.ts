import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './comman/header/header.component';
import { FooterComponent } from './comman/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FeatuesComponent } from './components/featues/featues.component';
import { FolexDownloadComponent } from './components/folex-download/folex-download.component';
import { FolexImageComponent } from './components/folex-image/folex-image.component';
import { HighestSecurityComponent } from './components/highest-security/highest-security.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'features',
    component: FeatuesComponent,
  },
  {
    path: 'folex-download',
    component: FolexDownloadComponent,
  },
  {
    path:'folex-image',
    component:FolexImageComponent
  },
  {
    path:'highest-security',
    component:HighestSecurityComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
