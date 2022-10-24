import S from './style.module.css'

interface IHeaderListProps {
  totalTasks: number
  completedTasks: number
}
const HeaderList = ({ totalTasks, completedTasks }: IHeaderListProps) => {
  const textTotalTasks = `${completedTasks} de ${totalTasks}`
  return (
    <article className={S.headerList}>
      <p>
        Tarefas Criadas
        <span className={S.numerator}>{totalTasks}</span>
      </p>
      <p>
        Concluidas
        <span className={S.numerator}>{totalTasks > 0 ? textTotalTasks : 0}</span>
      </p>
    </article>
  )
}

export default HeaderList
