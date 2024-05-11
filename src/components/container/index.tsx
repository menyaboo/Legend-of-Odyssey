import {DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, ReactNode} from "react";
import styles from "./style.module.scss";

interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PropsWithChildren {
    className?: string
}

const ContainerComponent: FC<ContainerProps> = ({children, className}): ReactNode => (
    <div className={`${styles.container} ${className || ''}`}>
        {children}
    </div>
);

export default ContainerComponent;