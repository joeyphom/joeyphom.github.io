import styles from './NierButton.module.css';

/*class NierButton extends React.Component {
    render() {
        return (<button className={"nierButton"}>{props.text}</button>)
    }
}*/

const NierButton = (props: any) => {
    return (
        <button className={styles.nierButton}>{props.text}</button>
    )
}

export default NierButton