import { Routes } from '@angular/router';
import { MainLayout } from './@common/layouts/main/main.layout';
import { HomePage } from './home/home.page';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import('./@common/layouts/auth/auth.layout').then(m => m.AuthLayout),
        loadChildren: () => import('./auth/routes')
    },
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: HomePage,
            },
            {
                path: 'products',
                loadChildren: () => import('./products/routes')
            }
        ]
    }
];
