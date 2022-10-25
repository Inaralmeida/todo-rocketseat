import { XCircle } from 'phosphor-react'
import { ModalDeleteProps } from '../../types'
import S from './style.module.css'

const ModalDelete = ({ onDelete, onClose }: ModalDeleteProps) => {
  function handleOutsideClick(id: string) {
    if (id === 'modal') onClose()
  }
  return (
    <div id="modal" className={S.modal} onClick={() => handleOutsideClick('modal')}>
      <div className={S.content}>
        <header>
          <p>Excluir</p>
          <XCircle size={24} onClick={onClose} />
        </header>
        <p>Tem certeza que deseja exluir essa tarefa? </p>

        <footer>
          <button onClick={onClose}>Cancelar</button>
          <button onClick={onDelete}>Excluir</button>
        </footer>
      </div>
    </div>
  )
}

export default ModalDelete
