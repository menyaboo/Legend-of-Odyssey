interface ILink {
    id: number;
    name: string;
    url: string;
}

const links: ILink[] = [
    {
        id: 1,
        name: 'Roadmap',
        url: '/',
    },
    {
        id: 2,
        name: 'NFT',
        url: '/',
    },
    {
        id: 3,
        name: 'Docs',
        url: '/',
    }
]

const socialLinks: (ILink & { image: string })[] = [
    {
        id: 1,
        name: 'Discord',
        url: 'https://discord.gg/gRP2tWtY9B',
        image: '/images/usage/discord.png',
    },
    {
        id: 2,
        name: 'Twitter',
        url: 'https://twitter.com/LegendofOdyssey',
        image: '/images/usage/twitter-black.png',
    },
]

export {links, socialLinks}