import style from './Container.module.css'

function Container({children, customClass}) {
  return(
    <div className={`${style[customClass]} ${style.container}`}>
      {children}
    </div>
  )
}

export default Container