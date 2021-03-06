import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Http, RequestOptions } from "@angular/http";
import { AuthHttp, AuthConfig } from "angular2-jwt";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroService } from "./hero.service";
import { MessagesComponent } from "./messages/messages.component";
import { MessageService } from "./message.service";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroSkillsComponent } from "./hero-skills/hero-skills.component";
import { BackofficeComponent } from "./backoffice/backoffice.component";
import { UserAuthService } from "./user-auth.service";
import { AuthGuardService } from './auth-guard.service';
import { AuthComponent } from './auth/auth.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeaderComponent,
    DashboardComponent,
    HeroSkillsComponent,
    BackofficeComponent,
    AuthComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    HeroService,
    MessageService,
    UserAuthService,
    AuthGuardService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AppModule {}
