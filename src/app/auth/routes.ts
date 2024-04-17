import { Route } from '@angular/router';

export default [
    {
        path: 'login',
        loadComponent: () =>
            import('./login/login.page').then(
                (m) => m.LoginPage
            ),
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./register/register.page').then(
                (m) => m.RegisterPage
            ),
    },

] as Route[];
