import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { HeaderComponent } from './organisms/header/header.component';
import { FooterComponent } from './organisms/footer/footer.component';
import { CourseCardComponent } from './molecules/course-card/course-card.component';
import { MainLayoutComponent } from './templates/main-layout/main-layout.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    CourseCardComponent,
    MainLayoutComponent,
    MainComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
