import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';



const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "details/:id", component: DettagliComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
