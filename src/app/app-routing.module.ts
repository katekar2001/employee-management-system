import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowdataComponent } from './showdata/showdata.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

const routes: Routes = [
  {path:"showdata",component:ShowdataComponent},
  {path:"addemployee",component:AddemployeeComponent},
  {path:"deleteemployee",component:DeleteemployeeComponent},
  {path:"updateemployee/:id",component:UpdateemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
