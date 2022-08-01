import style from './Filtro.module.css'
import { useState } from 'react';

function Filtro({filtrar}) {
  const [ aparecer, setAparecer ] = useState(false)

  function ativarFiltro(e) {
    filtrar(e)
  }

  function mostrarFiltros() {
    setAparecer(!aparecer)
  }

  return (
    <div className={style.container}>
      {aparecer && (
        <div className={`${style.btns} ${style.mostrar}`}>
          <button onClick={ativarFiltro} id="all">Todos</button>
          <button onClick={ativarFiltro} id="complete">Completos</button>
          <button onClick={ativarFiltro} id="incomplete">Incompletos</button>
        </div>
      )}

      <span onClick={mostrarFiltros}>Filtro</span>
    </div>
  )
}

export default Filtro