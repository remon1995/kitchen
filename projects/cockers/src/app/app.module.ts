import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeatComponent } from './meat/meat.component';
import { ChickenComponent } from './chicken/chicken.component';
import { DesertComponent } from './desert/desert.component';
import { BakedComponent } from './baked/baked.component';
import { JointModule } from './joint/joint.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SlidComponent } from './slid/slid.component';

@NgModule({
  declarations: [
    AppComponent,
    MeatComponent,
    ChickenComponent,
    DesertComponent,
    BakedComponent,
    NavBarComponent,
    FooterComponent,
    SlidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JointModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
