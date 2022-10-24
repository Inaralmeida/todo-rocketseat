import rocket from '../../images/rocket.svg'
import S from './style.module.css'

const Header = () => {
  return (
    <header className={S.header}>
      <img src={rocket} alt="Rocket" />
      <h1>
        <span>to</span>
        <span>do</span>
      </h1>
    </header>
  )
}

export default Header
