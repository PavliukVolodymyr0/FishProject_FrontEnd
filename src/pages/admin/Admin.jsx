import ph from '../../assets/images/ph.png'
import o2 from '../../assets/images/o2.png'
import woter from '../../assets/images/woter.png'
import temp from '../../assets/images/temp.png'
import trev from '../../assets/images/trevoga.png'
import './Admin.css'

function Admin() {
  return (
    <>
      <div className="level_block">
        <div className="level">
          <h1>Рівень <img src={ph} alt='ph' /></h1>
          <h1>Рівень кисню <img src={o2} alt='ph' /></h1>
          <h1>Рівень води <img src={woter} alt='ph' /></h1>
          <h1>Температура <img src={temp} alt='ph' /></h1>
        </div>
      </div>
      <div className="flex">
        <div className="history_date">
          <h1>Історія даних</h1>
          <div className="history_block">
            23.03.2024
          </div>
          <div className="history_block">
            23.03.2024
          </div>
          <div className="history_block">
            23.03.2024
          </div>
        </div>
        <div className="range_date">
          Діапазон даних
        </div>
      </div>
      <div className="info_panel">
        <h1>Інформаційна панель</h1>
        <div className="info_block">
          <img src={trev} alt="trevoga" />
          <h1>Увага у вас низький рівень води</h1>
          <button className='info_button'>Готово</button>
        </div>
        <div className="info_block" style={{backgroundColor: '#CCD9F9'}}>
          <h1>Увага у вас низький рівень води</h1>
          <button className='info_button'>Готово</button>
        </div>
        <div className="info_block" style={{backgroundColor: '#A7FABF'}}>
          <h1>Увага у вас низький рівень води</h1>
          <button className='info_button'>Готово</button>
        </div>
        <div className="info_block" style={{backgroundColor: '#DCD2A6'}}>
          <h1>Увага у вас низький рівень води</h1>
          <button className='info_button'>Готово</button>
        </div>
      </div>
    </>
  )
}

export default Admin