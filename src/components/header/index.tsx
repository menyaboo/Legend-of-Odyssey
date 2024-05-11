import {ReactNode} from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import ContainerComponent from "@/components/container";
import {links, socialLinks} from "@/data/links";
import Link from "next/link";
import ButtonComponent from "@/components/button";

const HeaderComponent = (): ReactNode => (
    <header className={styles.header}>
        <div className={styles.headerBody}>
            <ContainerComponent className={styles.headerContainer}>
                <ul className={styles.links}>
                    {links.map(el => (
                        <li key={el.id}>
                            <Link href={el.url}>{el.name}</Link>
                        </li>
                    ))}
                </ul>
                <Image src={'/logo.png'} alt="logo" width={100} height={50} className={styles.logo}/>
                <div className={styles.socialLinks}>
                    {
                        socialLinks.map(el => (
                            <Link key={el.id} href={el.url}>
                                <Image src={el.image} alt="logo" width={30} height={30} className={styles.logo}/>
                            </Link>
                        ))
                    }
                    <ButtonComponent>Soon...</ButtonComponent>
                </div>
            </ContainerComponent>
        </div>
        <div className={styles.grassImage} style={{backgroundImage: 'url(/images/используемое/grass.png)'}}/>
    </header>
);

export default HeaderComponent;