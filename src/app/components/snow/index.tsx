import {ReactNode} from "react";
import styles from "./style.module.scss";
import ContainerComponent from "@/components/container";
import Image from "next/image";

const SnowSection = (): ReactNode => (
    <section className={styles.section} style={{backgroundImage: 'url(/images/usage/bg-section-4.png)'}}>
        <ContainerComponent className={styles.container}>
            <Image src="/images/usage/mail.png" alt="mail" width={285} height={182}/>
            <div className={styles.description}>
                <h3>Contact us</h3>
                <p>You can email us at:
                    <a href="mailto:legendofodysseys@gmail.com">{" legendofodysseys@gmail.com"}</a>
                </p>
            </div>
        </ContainerComponent>
    </section>
);

export default SnowSection;