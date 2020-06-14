import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'select-ticket',
    loadChildren: () => import('./select-ticket/select-ticket.module').then( m => m.SelectTicketPageModule)
  },
  {
    path: 'buy-ticket',
    loadChildren: () => import('./buy-ticket/buy-ticket.module').then( m => m.BuyTicketPageModule)
  },
  {
    path: 'edit-ticket',
    loadChildren: () => import('./edit-ticket/edit-ticket.module').then( m => m.EditTicketPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'payment-detail',
    loadChildren: () => import('./payment-detail/payment-detail.module').then( m => m.PaymentDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
