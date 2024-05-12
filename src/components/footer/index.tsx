import {ReactNode} from "react";
import styles from "./style.module.scss";
import ContainerComponent from "@/components/container";
import {links, socialLinks} from "@/data/links";
import Link from "next/link";
import Image from "next/image";

const FooterComponent = (): ReactNode => (
    <footer className={styles.footer}>
        <div className={styles.snowImage} style={{backgroundImage: 'url(/images/usage/snow-transition.png)'}}/>
        <div className={styles.footerBody}>
            <ContainerComponent className={styles.container}>
                <div className={styles.descriptionWrapper}>
                    <div className={styles.description}>
                        <Link href="/">
                            <Image src={'/logo.png'} alt="logo" width={100} height={50}/>
                        </Link>

                        <ul className={styles.links}>
                            {links.map(el => (
                                <li key={el.id}>
                                    <Link href={el.url}>{el.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p>© 2024 Legend of Odysseys. All rights reserved.</p>
                </div>


                <div className={styles.socialLinks}>
                {
                        socialLinks.map(el => (
                            <a key={el.id} href={el.url}>
                                <Image src={el.image} alt={el.name} width={30} height={30}/>
                                <span>{el.name}</span>
                            </a>
                        ))
                    }
                </div>
            </ContainerComponent>
        </div>

    </footer>
);

export default FooterComponent;