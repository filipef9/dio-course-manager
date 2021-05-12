import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StarComponent } from "./star.component";

@NgModule({
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent
    ]
})
export class StarModule { }