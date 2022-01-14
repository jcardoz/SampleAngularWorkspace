import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'sample',
  //   loadChildren: () => import('app1/Module').then(m => m.SampleModule)
  // },
  {
    path: 'sample',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:8001/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.SampleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
