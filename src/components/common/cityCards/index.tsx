import { useContextProvider } from '../../../hooks/useMyContexthooks';
import { City } from '../../../types';
import { getIcon } from './controller';
import './styles.css'
import { roundToOneDecimal } from '../../../utils';

interface Props {
    city:City
}

const CityCard = ( {city}:  Props) =>{
    const { handleSelectCity, selectedCity } = useContextProvider();

  return (
    <div className={`city-card ${selectedCity?.id === city.id ? 'selected' : ''}`} onClick={()=>handleSelectCity(city.id)}>
      <div className='title' >{city.name}</div>
      <img className='city-card-icon' src={getIcon(city.weather.id)} alt="icon-weather"  />
      <div className='temperature'>{roundToOneDecimal(city.main.temperature)}°C</div>
      <div className="temp-range">
        <span className='temp'>Min: {roundToOneDecimal(city.main.tempMin)}°C</span>
        <span className='temp'>Max: {roundToOneDecimal(city.main.tempMax)}°C</span>
      </div>
    </div>
  );
}

export default CityCard;