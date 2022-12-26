import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { JoinComponent } from "./join.component";
import { JoiningComponent } from "./joining/joining.component";

@NgModule({
    declarations: [JoinComponent, JoiningComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'joining', component: JoiningComponent},
            {path: ':id', component: JoinComponent},
        ])
    ]
})
export class JoinModule{}