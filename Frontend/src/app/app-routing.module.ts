import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./core/home/home-page.component";

const routes: Routes = [{ path: "", component: HomePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
