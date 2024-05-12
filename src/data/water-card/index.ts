interface IWaterCard {
    id: number
    title: string
    description: string
    image: string
}

const waterCards: IWaterCard[] = [
    {
        id: 1,
        title: "Community-Building",
        description: "Play with friend or meet new one to invite them to  the housewarming party.",
        image: "/images/usage/gifs/house.gif",
    },
    {
        id: 2,
        title: "Collect everything",
        description: "Farm, Gather, cook, trade, craft... All of this will come in handy as you explore the world.",
        image: "/images/usage/gifs/snow.gif",
    },
    {
        id: 3,
        title: "Collect them all",
        description: "Explore exciting dungeons to receive unique rewards.",
        image: "/images/usage/gifs/castle.gif",
    }
]

export {waterCards}