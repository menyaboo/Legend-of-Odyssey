interface IRoadmap {
    title: string;
    description: string[];
    firstImage: IImage;
    secondImages: IImage;
}

interface IImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const roadmap: IRoadmap[] = [
    {
        title: "Phase 01",
        description: [
            "-Community",
            "-Design",
            "-Idea",
            "-Unique NFTs"
        ],
        firstImage: {
            src: "/images/roadmap/skeleton.png",
            alt: "skeleton-1",
            width: 300,
            height: 318
        },
        secondImages: {
            src: "/images/roadmap/skeleton-group.png",
            alt: "skeleton-group",
            width: 1050,
            height: 400
        }
    },
    {
        title: "Phase 02",
        description: [
            "-Development",
            "-Zero Alpha",
            "-Land Sale",
            "-Open Source"
        ],
        firstImage: {
            src: "/images/roadmap/human.png",
            alt: "human-1",
            width: 300,
            height: 420
        },
        secondImages: {
            src: "/images/roadmap/human-group.png",
            alt: "human-group",
            width: 1000,
            height: 300
        }
    },
    {
        title: "Phase 03",
        description: [
            "-Private Beta 1",
            "-Over world",
            "-Experience",
            "-Ecosystem"
        ],
        firstImage: {
            src: "/images/roadmap/demon.png",
            alt: "demon-1",
            width: 300,
            height: 420
        },
        secondImages: {
            src: "/images/roadmap/demon-group.png",
            alt: "demon-group",
            width: 870,
            height: 365
        }
    },
    {
        title: "Phase 04",
        description: [
            "-World",
            "-Accessibility",
            "-Progression",
            "-Arena"
        ],
        firstImage: {
            src: "/images/roadmap/mag.png",
            alt: "mag-1",
            width: 300,
            height: 400
        },
        secondImages: {
            src: "/images/roadmap/mag-group.png",
            alt: "mag-group",
            width: 955,
            height: 400
        }
    }
]

export {roadmap}