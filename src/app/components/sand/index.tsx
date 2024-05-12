import {ReactNode} from "react";
import styles from "@/app/components/sand/style.module.scss";
import ContainerComponent from "@/components/container";
import Image from "next/image";

const SandSection = (): ReactNode => (
    <section className={styles.section} style={{backgroundImage: 'url(/images/usage/bg-section-2_new.png)'}}>
        <ContainerComponent className={styles.container}>
            <h1>{"Explore the world's ecosystem"}</h1>
            <div className={styles.maps}>
                {[...Array(3)].map((_el, index) =>
                    <Image key={index} src="/images/usage/gifs/map-not-open.gif" alt="map" width={250} height={350}/>
                )}
            </div>
        </ContainerComponent>
    </section>
);

export default SandSection;