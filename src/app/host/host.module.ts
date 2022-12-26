import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HostComponent } from "./host.component";
import { TworzenieComponent } from "./tworzenie/tworzenie.component";

@NgModule({
    declarations: [HostComponent, TworzenieComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: '', component: HostComponent},
            {path: 'tworzenie', component: TworzenieComponent}
        ])
    ]
})
export class HostModule{}