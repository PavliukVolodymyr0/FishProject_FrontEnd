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

  const [monthlyData, setMonthlyData] = useState({
    waterLevel: [],
    oxygenLevel: [],
    phLevel: [],
    temperature: [],
    min: [],
    max: [],
  });

  

  const [warnings, setWarnings] = useState([]);
  const [historyDates, setHistoryDates] = useState([]);
  const [editingParam, setEditingParam] = useState(null);
  const [counter, setCounter] = useState(0);
  const [selectedRange, setSelectedRange] = useState(null); // Додано стан для збереження обраного діапазону
  const chartRef = useRef(null);
  const monthlyChartRef = useRef(null);

  useEffect(() => {
    const fetchWarnings = async () => {
      try {
        const response = await axios.post('https://fish.api-dev.bmax.com.ua/api/admin/warnings');
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
        labels: ['00:00', '08:00', '16:00', '00:00'], // Початкові мітки для "дня"
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
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            pointRadius: 0,
          },
          {
            label: 'Max',
            data: data.max,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
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

  useEffect(() => {
    if (monthlyChartRef.current) {
      monthlyChartRef.current.destroy();
    }

    const ctx = document.getElementById('monthlyChart').getContext('2d');
    monthlyChartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4','5', '6', '7', '8','9', '10', '11', '12','13', '14', '15', '16','17', '18', '19', '20','21', '22', '23', '24','25', '26', '27', '28','29', '30', '31'],
        datasets: [
          {
            label: 'Рівень води',
            data: monthlyData.waterLevel,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
          },
          {
            label: 'Рівень кисню',
            data: monthlyData.oxygenLevel,
            borderColor: 'lightblue',
            backgroundColor: 'rgba(173, 216, 230, 0.1)',
          },
          {
            label: 'Рівень pH',
            data: monthlyData.phLevel,
            borderColor: 'purple',
            backgroundColor: 'rgba(128, 0, 128, 0.1)',
          },
          {
            label: 'Температура',
            data: monthlyData.temperature,
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
          },
          {
            label: 'Min',
            data: monthlyData.min,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            pointRadius: 0,
          },
          {
            label: 'Max',
            data: monthlyData.max,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
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
      if (monthlyChartRef.current) {
        monthlyChartRef.current.destroy();
      }
    };
  }, [monthlyData]);

  const [showRange, setShowRange] = useState(false);

  const toggleRange = () => {
    setShowRange(!showRange);
  };

  const handleRangeClick = async (range) => {
    try {
      const response = await axios.post('https://fish.api-dev.bmax.com.ua/api/admin/sensors/dates', { range });
      setHistoryDates(response.data.dates || []);
      setSelectedRange(range); // Збереження обраного діапазону
    } catch (error) {
      console.error('Помилка отримання даних:', error);
    }
  };

  const handleDateClick = async (date) => {
    try {
      const response = await axios.get('https://fish.api-dev.bmax.com.ua/api/admin/sensor/', {
        params: { range: selectedRange, date_range: date },
      });
  
      if (!response.data || !response.data.sensor_data) {
        console.error('Неправильна відповідь від сервера:', response);
        return;
      }
  
      const sensorData = response.data.sensor_data;
  
      // Створення нових масивів даних для графіка "дня"
      const newData = {
        waterLevel: [],
        oxygenLevel: [],
        phLevel: [],
        temperature: [],
        min: [],
        max: [],
      };
  
      sensorData.forEach(({ name, data }) => {
        if (name === 'water_level') {
          newData.waterLevel = data.map(({ value }) => value);
        } else if (name === 'oxygen_level') {
          newData.oxygenLevel = data.map(({ value }) => value);
        } else if (name === 'acidity') {
          newData.phLevel = data.map(({ value }) => value);
        } else if (name === 'temperature') {
          newData.temperature = data.map(({ value }) => value);
        }
      });
      // Створення нових масивів даних для графіка "місяця"
      const newMonthlyData = {
        waterLevel: new Array(31).fill(null), // Масив з 31 елементом для днів місяця
        oxygenLevel: new Array(31).fill(null),
        phLevel: new Array(31).fill(null),
        temperature: new Array(31).fill(null),
        min: [],
        max: [],
      };
  
      // Заповнення даними з сервера
      sensorData.forEach((data) => {
        const dayIndex = parseInt(data.day_of_month) - 1; // Індекс дня місяця (0 до 30)
  
        if (data.acidity !== undefined && data.oxygen_level !== undefined && 
            data.temperature !== undefined && data.water_level !== undefined) {
          newMonthlyData.phLevel[dayIndex] = data.acidity;
          newMonthlyData.oxygenLevel[dayIndex] = data.oxygen_level;
          newMonthlyData.temperature[dayIndex] = data.temperature;
          newMonthlyData.waterLevel[dayIndex] = data.water_level;
        }
      });
  
      // Оновлення стану для графіка "дня"
      setData(newData);
  
      // Оновлення стану для графіка "місяця"
      setMonthlyData(newMonthlyData);
      console.log(response.data);
    } catch (error) {
      console.error('Помилка отримання даних за датою:', error);
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
      await axios.post('https://fish.api-dev.bmax.com.ua/api/admin/addsensor', {
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
        <div className="grap">
          <div className="graph">
            <h1>За день</h1>
            <canvas id="myChart"></canvas>
          </div>
    
        <div className="graph">
        <h1>За місяць</h1>
          <canvas id="monthlyChart"></canvas>
        </div>
        </div>
        <div className="history_date">
          <h1>Історія даних</h1>
          {historyDates.map((date, index) => (
            <div className="history_block" key={index} onClick={() => handleDateClick(date)}>
              {date}
            </div>
          ))}
        </div>

        <div className="range">
          <div className="range_date" onClick={toggleRange}> 
            Діапазон даних
          </div>
          {showRange && (
            <div className="window_range">
              <div className="range_date1" onClick={() => handleRangeClick('day')}>
                За день 
              </div>
              <div className="range_date1" onClick={() => handleRangeClick('week')}>
                За тиждень 
              </div>
              <div className="range_date1" onClick={() => handleRangeClick('month')}>
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