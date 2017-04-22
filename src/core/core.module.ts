import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from "./user.service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        { provide: UserService, useClass: UserService }
    ],
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if(parentModule) {
            throw new Error('CoreModule is already loaded!');
        }
    }
}