import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import ph from '../../assets/images/ph.png';
import o2 from '../../assets/images/o2.png';
import woter from '../../assets/images/woter.png';
import temp from '../../assets/images/temp.png';
import trev from '../../assets/images/trevoga.png';
import up from '../../assets/images/up.png';
import down from '../../assets/images/down.png';
import './Admin.css';

function Admin() {
  const [data, setData] = useState({
    waterLevel: [],
    oxygenLevel: [],
    phLevel: [],
    temperature: [],
    min: [9, 9, 9, 9, 9, 9, 9],
    max: [22, 22, 22, 22, 22, 22, 22],
  });

  const [warnings, setWarnings] = useState([]);
  const [editingParam, setEditingParam] = useState(null);
  const [counter, setCounter] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchWarnings = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/admin/warnings');
        setWarnings(response.data.warnings || []);
      } catch (error) {
        console.error('Помилка отримання попереджень:', error);
      }
    };

    fetchWarnings();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
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

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  const [showRange, setShowRange] = useState(false);

  const toggleRange = () => {
    setShowRange(!showRange);
  };

  const handleClick = async (timeline) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    try {
      const response = await axios.get('http://127.0.0.1:8000/api/admin/sensor', {
        params: {
          timeline,
          day,
          month,
          year,
        },
      });
      const sensorData = response.data || [];
      const newData = {
        waterLevel: sensorData.filter(item => item.name === 'water_level').map(item => item.value),
        oxygenLevel: sensorData.filter(item => item.name === 'oxygen_level').map(item => item.value),
        phLevel: sensorData.filter(item => item.name === 'acidity').map(item => item.value),
        temperature: sensorData.filter(item => item.name === 'temperature').map(item => item.value),
        min: Array(sensorData.length).fill(9),
        max: Array(sensorData.length).fill(22),
      };

      setData(newData);
      console.log(newData)
    } catch (error) {
      console.error('Сталася помилка!', error);
    }
  };

  const handleWarningClick = (warning) => {
    if (warning.includes('кислотність')) {
      setEditingParam('acidity');
    } else if (warning.includes('температура')) {
      setEditingParam('temperature');
    } else if (warning.includes('рівень води')) {
      setEditingParam('water_level');
    } else if (warning.includes('рівень кисню')) {
      setEditingParam('oxygen_level');
    }
  };

  const handleSave = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/admin/addsensor', {
        name: editingParam,
        value: counter,
      });
      alert('Значення збережено!');
    } catch (error) {
      console.error('Помилка збереження даних:', error);
    }
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
              <div className="range_date1" onClick={() => handleClick(1)}>
                За день 
              </div>
              <div className="range_date1" onClick={() => handleClick(7)}>
                За тиждень 
              </div>
              <div className="range_date1" onClick={() => handleClick(30)}>
                За місяць
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="info_panel_block">
        <div className="info_panel">
          <h1>Інформаційна панель</h1>
          {warnings.map((warning, index) => (
            <div className="info_block" key={index} onClick={() => handleWarningClick(warning)}>
              <img src={trev} alt="trevoga" />
              <div className="info_content">
                <h1>{warning}</h1>
                <button className='info_button' onClick={handleSave}>Готово</button>
              </div>
            </div>
          ))}
        </div>

        <div className="regulator">
          <h1>Відредагуйте рівень {editingParam}</h1>
          <div className="reg_block">
            <div className="up_down">
              <img src={up} alt='up' onClick={() => setCounter(counter + 1)} />
              <img src={down} alt='down' onClick={() => setCounter(counter - 1)} />
            </div>
            <input 
              type="number" 
              value={counter} 
              onChange={(e) => setCounter(parseFloat(e.target.value))} 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
