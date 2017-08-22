import { NgModule, Provider, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, ConnectionBackend } from '@angular/http';

import { provideAuth, JwtHelper } from 'angular2-jwt';

import { AppComponent } from './app';

import { routing, appRoutingProviders } from './app.routes';

//
// Providers       
import { Config } from './config';

//
// Directives
import { RibbonComponent } from './directives/ribbon';
import { CheckboxDirective, RadioDirective } from './directives/forms/components/form-controls'; 

// Pages
import { HomeComponent } from './pages/home';


import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        HttpModule,
        MultiselectDropdownModule
    ],
    declarations: [
        RibbonComponent,
        CheckboxDirective,
        RadioDirective,
        AppComponent,
        HomeComponent
    ],
    providers: [
        Config,
        appRoutingProviders,
        {
            provide: 'Window', 
            useValue: window  
        },
        RibbonComponent,
        JwtHelper,
        provideAuth({
            tokenName: 'sessionToken'
        })
    ],
    bootstrap: [ 
        AppComponent
    ]
})
export class AppModule {
}
