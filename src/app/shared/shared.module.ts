import { NgModule } from "@angular/core";
import { PowiadomienieComponent } from "./powiadomienie/powiadomienie.component";

@NgModule({
    declarations: [PowiadomienieComponent],
    exports: [PowiadomienieComponent]
})
export class SharedModule{}