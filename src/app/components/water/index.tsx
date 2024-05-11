import {ReactNode} from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import ContainerComponent from "@/components/container";
import {waterCards} from "@/data/water-card";

const WaterSection = (): ReactNode => (
    <section className={styles.section} style={{backgroundImage: 'url(/images/используемое/bg-section-3.png)'}}>
        <ContainerComponent className={styles.container}>
            <h1>Your adventure begins</h1>
            <div className={styles.cards}>
                {waterCards.map(el => (
                    <div key={el.id} className={styles.card}>
                        <Image src={el.image} alt={el.title} width={300} height={300}/>
                        <div className={styles.cardDescription}>
                            <h2>{el.title}</h2>
                            <h4>{el.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </ContainerComponent>
    </section>
);

export default WaterSection;