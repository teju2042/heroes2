import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroBirthdayComponent } from './hero-birthday/hero-birthday.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { NgrxStoreComponent } from './ngrx-store/ngrx-store.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {UiModule} from './ui/ui.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatIconModule,MatSelectModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import { SocialLoginModule, AuthServiceConfig } from "angular-6-social-login";
import { GoogleLoginProvider, FacebookLoginProvider} from "angular-6-social-login";


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1316825368444193")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("851831748812-gp8ud9ctaq221eft61374ii3utr29vps.apps.googleusercontent.com")
        },
      ]
  )
  return config;
}




export function HttpLoaderFactory(http: HttpClient) {
 
  return new TranslateHttpLoader(http);
  
 }

 

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FilterPipeModule,
    MatMenuModule,
    OrderModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SocialLoginModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule ,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    AppRoutingModule,
    HttpClientModule,
   
    

    StoreModule.forRoot({ count: counterReducer }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  }
  
),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),*/

    UiModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    NgrxStoreComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroBirthdayComponent,
    HeroSearchComponent,
    TestComponent,
    SocialLoginComponent,
    LoginComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }