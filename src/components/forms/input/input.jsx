import styles from './input.module.css'

export default function Input({ fullWidht, ...props }) {
    return(
        <input className= {`${styles.input} ${fullWidht && styles.fullwidth}`}
            {...props}
        />
    )
}