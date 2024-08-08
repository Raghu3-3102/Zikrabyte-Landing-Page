import Styles from './Service_line_.module.css'

function Service_line() {
  return (
    <div>
      <div className={Styles.line_cnt}>
       <div className={Styles.circule}></div> <div className={Styles.line}>.</div>
      </div>
    </div>
  )
}

export default Service_line
