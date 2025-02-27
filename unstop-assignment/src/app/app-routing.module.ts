import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutePathEnum } from './shared/app.routes.enum';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './generic-components/page-not-found/page-not-found.component';
const getRoute = (routeName:AppRoutePathEnum) => routeName.replace('/', '');
const routes: Routes = [
  {
    path:getRoute(AppRoutePathEnum.ROOT),
    component:UserDashboardComponent
  },
  {
    path:getRoute(AppRoutePathEnum.DASHBOARD),
    component:UserDashboardComponent
  },
  {
    path:'',
    redirectTo:getRoute(AppRoutePathEnum.ROOT),
    pathMatch:'full'
  },
  {
    path:'add-user',
    loadChildren:()=>import('./views/user-action/user-actions.module').then((m)=>m.UserActionsModule)
  },

  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
