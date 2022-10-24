import S from './style.module.css'
import clipboard from '../../images/Clipboard.svg'
const NoTaskMessage = () => {
  return (
    <section className={S.content}>
      <img src={clipboard} alt="clipboard icon" />
      <p>
        <span>Você ainda não tem tarefas cadastradas</span>
        Crie tarefas e organize seus itens a fazer
      </p>
    </section>
  )
}

export default NoTaskMessage
