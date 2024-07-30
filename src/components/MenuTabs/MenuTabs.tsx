import NierButton from "../NierButton/NierButton.tsx";
import styles from './MenuTabs.module.css';

const MenuTabs = () => {
    return (
        <nav className={styles.menuTabs}>
            <ul>
                <li>
                    <NierButton text={"Start Demo"}/>
                </li>
                <li>
                    <NierButton text={"Portfolio"}/>
                </li>
                <li>
                    <NierButton text={"Settings"}/>
                </li>
                <li>
                    <NierButton text={"Author"}/>
                </li>
            </ul>
        </nav>
    )
}

export default MenuTabs
