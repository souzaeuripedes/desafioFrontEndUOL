import styles from './styles.module.scss'

interface IButtonProps{
  buttonClass: string;
  buttonText: string;
  action?: string;
}

export function Button({ buttonClass, buttonText, action }:IButtonProps) {
  let btnClass: string = buttonClass == "primary" ? styles.primary : styles.secondary;

  return (
    <button className={btnClass}>{buttonText}</button>
  )
}