import {ReactNode} from "react";
import styles from './style.module.scss'
import ContainerComponent from "@/components/container";
import Image from "next/image";
import {roadmap} from "@/data/roadmap";

const Page = (): ReactNode => {
    return (
        <main className={styles.main}>
            <ContainerComponent className={styles.container}>
                <div className={styles.top}>
                    <h2>Roadmap</h2>
                    <p>
                        <span>Legend of Odyssey</span> is a game that is
                        being developed incrementally and
                        is progressing towards ambitious goals.
                    </p>
                </div>
                <div className={styles.cards}>
                    {
                        roadmap.map((card, i) => {
                            const {title, description, firstImage, secondImages} = card

                            return (
                            <div key={i} className={styles.card}>
                                <div>
                                    <Image
                                        src={firstImage.src}
                                        alt={firstImage.alt}
                                        width={firstImage.width}
                                        height={firstImage.height}
                                    />
                                    <div className={styles.cardDescription}>
                                        <h4>{title}</h4>
                                        <div>
                                            {
                                                description.map((description, i) => (
                                                    <p key={i}>{description}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src={secondImages.src}
                                        alt={secondImages.alt}
                                        width={secondImages.width}
                                        height={secondImages.height}
                                    />
                                </div>
                            </div>
                        )})
                    }
                </div>
            </ContainerComponent>
        </main>
    );
};

export default Page;