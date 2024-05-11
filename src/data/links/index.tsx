interface ILink {
    id: number;
    name: string;
    url: string;
}

const links: ILink[] = [
    {
        id: 1,
        name: 'Roadmap',
        url: '#roadmap',
    },
    {
        id: 2,
        name: 'NFT',
        url: '/nft',
    },
    {
        id: 3,
        name: 'Docs',
        url: '/docs',
    }
]

const socialLinks: (ILink & { image: string })[] = [
    {
        id: 1,
        name: 'Discord',
        url: 'https://discord.gg/misguidedworld',
        image: '/images/используемое/дс.png',
    },
    {
        id: 2,
        name: 'Twitter',
        url: 'https://twitter.com/MisguidedWorld',
        image: '/images/используемое/твиттер черный фон.png',
    },
]

export {links, socialLinks}