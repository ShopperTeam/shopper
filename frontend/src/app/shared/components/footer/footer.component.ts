import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FacebookComponent } from '../icons/facebook.component'
import { InstagramComponent } from '../icons/instagram.component'
import { TiktokComponent } from '../icons/tiktok.component'
import { YoutubeComponent } from '../icons/youtube.component'
import { LogoComponent } from '../nav-logo/logo.component'

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
        CommonModule,
        LogoComponent,
        FacebookComponent,
        InstagramComponent,
        YoutubeComponent,
        TiktokComponent,
    ],
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    footerData = {
        footerHeader: {
            logo: {
                route: '/',
            },
            description: `Votre destination ultime pour le gaming et le high-tech.
                Découvrez les dernières tendances et innovations technologiques
                pour une expérience de jeu inégalée.`,
        },
        footerMain: {
            sections: [
                {
                    title: 'A propos',
                    links: [
                        { label: 'Qui sommes-nous?', url: '#' },
                        { label: 'Nos partenaires', url: '#' },
                        { label: 'Nos services', url: '#' },
                    ],
                },
                {
                    title: 'Produits',
                    links: [
                        { label: 'PC', url: '#' },
                        { label: 'Consoles', url: '#' },
                        { label: 'Accessoires', url: '#' },
                        { label: 'Jeux', url: '#' },
                    ],
                },
                {
                    title: 'Evenements',
                    links: [
                        { label: 'Evenements', url: '#' },
                        { label: 'Promotions', url: '#' },
                        { label: 'Partenaires', url: '#' },
                        { label: 'Soldes', url: '#' },
                    ],
                },
                {
                    title: "Besoin d'aide?",
                    links: [
                        { label: 'FAQ', url: '#' },
                        { label: 'Contactez-nous', url: '#' },
                        { label: 'Livraison', url: '#' },
                        { label: 'Retours', url: '#' },
                    ],
                },
            ],
            newsLetter: {
                title: 'Restez à jour',
                description: `Inscrivez-vous à notre newsletter pour recevoir
                    les dernières nouvelles et offres.`,
                form: {
                    placeholder: 'Votre adresse email',
                    buttonLabel: 'Souscrire',
                },
            },
        },
        footerBottom: {
            copyright: 'Copyright &copy; 2023. All rights reserved.',
            socials: [
                {
                    name: 'facebook',
                    url: '#',
                },
                {
                    name: 'twitter',
                    url: '#',
                },
                {
                    name: 'instagram',
                    url: '#',
                },
                {
                    name: 'youtube',
                    url: '#',
                },
            ],
        },
    }
}
