import { NgModule } from "@angular/core";

import { PhotoModule } from "./photo/photo.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoDetailsModule } from "./photo-details/photo-details.module";
import { DirectivesModule } from "../shared/directives/directives.module";



@NgModule({
    declarations: [],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        PhotoDetailsModule,
        DirectivesModule
    ],
})
export class PhotosModule { }