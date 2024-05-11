import {AnchorHTMLAttributes, DetailedHTMLProps, FC, ReactNode} from "react";
import styles from "./style.module.scss";

type IButtonComponentProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {className?: string}

const ButtonComponent: FC<IButtonComponentProps> = ({className, ...props}): ReactNode => (
    <a className={`${styles.button} ${className || ''}`} {...props} />
);

export default ButtonComponent;