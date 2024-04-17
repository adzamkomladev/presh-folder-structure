import { Route } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./index/index.page').then(
                (m) => m.IndexPage
            ),
    },
    {
        path: ':id/details',
        loadComponent: () =>
            import('./details/details.page').then(
                (m) => m.DetailsPage
            ),
    },

] as Route[];
