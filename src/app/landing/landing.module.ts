import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { LandingComponent } from "./landing.component";

@NgModule({
    declarations: [LandingComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: LandingComponent}
        ]),
        SharedModule
    ]
})
export class LandingModule{}