import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
    // default route
    {
        path: '',
        redirectTo: 'app-home',
        pathMatch: 'full'
    },

    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'app-navbar',
                component: NavbarComponent
            },
            
            {
                path: 'app-about',
                component: AboutComponent
            },

            {
                path: 'app-contact',
                component: ContactComponent
            },


            {
                path: 'app-footer',
                component: FooterComponent
            },

            {
                path: 'app-card',
                component: CardComponent
            },
        ]
    },

    {
        path: '**',
        redirectTo: 'app-home'
    }
];
