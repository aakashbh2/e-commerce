import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { BasicModule } from "../components/basic.module";
import { ContainerModule } from '../container/container.module';
import { routing } from "../routes/app.routing";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BasicModule,
        ContainerModule,
        RouterModule.forRoot(routing),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
