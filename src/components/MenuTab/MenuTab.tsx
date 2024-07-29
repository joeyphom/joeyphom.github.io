import NierButton from "../NierButton/NierButton.tsx";
import './MenuTab.module.css';

const MenuHeader = () => {
    return (
        <nav>
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

export default MenuHeader
