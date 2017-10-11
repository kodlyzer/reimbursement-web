import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SignUpComponent } from "./sign-up.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'signup',
                component: SignUpComponent
            }
        ])
    ],
    exports: [RouterModule] 
})
export class SignUpRoutingModule {

}