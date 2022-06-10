import Modal from '../../components/Modal/Modal'

const ProjectModal = ({title, root}) => {
  return (
    <Modal title={title} root={root}>
      <form action="">
        <label htmlFor="name">Nombre: </label>
        <input id="name" type="text" />
        <label htmlFor="name">Descripcion: </label>
        <input id="name" type="text" />
        <label htmlFor="name">Fecha: </label>
        <input id="name" type="date" />
        <button>Guardar</button>
      </form>
    </Modal>
  )
}

export default ProjectModal