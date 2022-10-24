import { Check } from 'phosphor-react'
import S from './style.module.css'

interface IRadioButtonProps {
  completed: boolean
  setCompleted: (value: boolean) => void
}

const RadioButton = ({ completed, setCompleted }: IRadioButtonProps) => {
  return (
    <>
      {completed ? (
        <span className={S.active} onClick={() => setCompleted(false)}>
          <Check size={14} />
        </span>
      ) : (
        <span className={S.radio} onClick={() => setCompleted(true)}></span>
      )}
    </>
  )
}

export default RadioButton
