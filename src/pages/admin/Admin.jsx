import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import ph from '../../assets/images/ph.png'
import o2 from '../../assets/images/o2.png'
import woter from '../../assets/images/woter.png'
import temp from '../../assets/images/temp.png'
import trev from '../../assets/images/trevoga.png'
import './Admin.css'

function Admin() {
  const [data, setData] = useState({
    waterLevel: [12, 19, 3, 5, 2, 3, 6],
    oxygenLevel: [5, 10, 8, 15, 12, 9, 6],
    phLevel: [6, 7, 7.5, 6.5, 6.8, 6.3, 7.2],
    temperature: [25, 26, 27, 28, 27.5, 26.8, 25.5],
    min:[9,9,9,9,9,9,9],
    max:[22,22,22,22,22,22,22],
  });

  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
        datasets: [
          {
            label: 'Рівень води',
            data: data.waterLevel,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
          },
          {
            label: 'Рівень кисню',
            data: data.oxygenLevel,
            borderColor: 'lightblue',
            backgroundColor: 'rgba(173, 216, 230, 0.1)',
          },
          {
            label: 'Рівень pH',
            data: data.phLevel,
            borderColor: 'purple',
            backgroundColor: 'rgba(128, 0, 128, 0.1)',
          },
          {
            label: 'Температура',
            data: data.temperature,
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
          },
          {
            label: 'Min',
            data: data.min,
            borderColor: 'red',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            pointRadius: 0,
          },
          {
            label: 'Max',
            data: data.max,
            borderColor: 'red',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [data]);

  const [showRange, setShowRange] = useState(false);

  const toggleRange = () => {
    setShowRange(!showRange);
  };
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
        <div className="graph">
          <canvas id="myChart"></canvas>
        </div>

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

        <div className="range">
          <div className="range_date" onClick={toggleRange}> 
            Діапазон даних
          </div>
          {showRange && (
            <div className="window_range">
              <div className="range_date1">
                За день 
              </div>
              <div className="range_date1">
                За тиждень 
              </div>
              <div className="range_date1">
                За місяць
              </div>
            </div>
          )}
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