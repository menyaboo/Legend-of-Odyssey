import {ReactNode} from "react";
import styles from "@/app/components/main/style.module.scss";
import ButtonComponent from "@/components/button";

const MainSection = (): ReactNode => (
    <section className={styles.section} style={{backgroundImage: 'url(/images/используемое/bg-section-1.png)'}}>
        <div className={styles.descriptionWrapper} style={{backgroundImage: 'url(/images/используемое/sign.png)'}}>
            <div className={styles.description}>
                <h1>Misguided World</h1>
                <h2>Decentralization in a new form</h2>
                <h2>Build a game that you enjoy</h2>
            </div>
            <div className={styles.buttons}>
                <ButtonComponent>
                    Soon...
                </ButtonComponent>
                <ButtonComponent>
                    Join the community
                </ButtonComponent>
            </div>
        </div>
    </section>
);

export default MainSection;