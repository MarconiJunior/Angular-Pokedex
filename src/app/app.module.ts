import { provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    bootstrap: [ AppComponent ],
    providers: [
        provideAnimationsAsync(),
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "outline" }  },
        provideHttpClient()
    ]
})
export class AppModule { }