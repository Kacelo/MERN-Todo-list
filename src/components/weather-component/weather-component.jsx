import React,{useState} from 'react';
import axios from 'axios';
import { Grid, Input } from 'semantic-ui-react';
const Weather = (props)=>{
    // const {location} = props;

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
  
  
    const url = ``
    // https://api.openweathermap.org/data/2.5/weather?q=Windhoek&units=metric&appid=66c292d74799d5094a23ace1a374b5e7`
    
    // const searchLocation =(event)=>{
    //   if(event.key === 'Enter'){
    //     axios.get(url).then((response) =>{
    //       setData(response.data)
    //       console.log(response.data)
    //     })
       
    //   }
    
    // }

    axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })

    return(
        <>
            {/* <Grid className='weather-comp'>
                <Grid.Row>
                    <Grid.Column> */}
                    {/* <Input
        value = {location}
        onChange ={event => setLocation(event.target.value)}
        onKeyPress ={searchLocation}
        placeholder='Enter Location'
        type ="text"
        /> */}
                    <div className='top'>
            <div className='location'>
              <p>{data.name}</p>
            </div>
            <div className='temp'>
              {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
              {data.main ?<img className='icon-img' src= {`https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${data.weather[0].icon}.png`}/> : null}
            </div>
            {/* <div className='description'>
            {data.weather ? <p>Description</p> : <p>Hello :) enter a city name to see the weather</p>}
              {data.weather ? <p>{data.weather[0].main}</p> : null}
              
            </div> */}
            {/* <div className='time'>
              
            {data.weather ? <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}<p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p></p> 
         : null}
            
            </div> */}
          </div>
                    {/* </Grid.Column>
                </Grid.Row> */}
                {/* <Grid.Row>
                    <Grid.Column>
                    {data.name != undefined &&
          <div className='bottom'>
            <div className='feels'>
            <p>feels like</p>
              {data.main ? <p className='bold'>{data.main.feels_like}</p> : <p>unavailable</p>}
             
             
            </div>
            <div className='humidity'>
            <p>humidity</p>
              {data.main ? <p className='bold'> {data.main.humidity.toFixed()}%</p> : null}
                
                
            </div>
            <div className='wind'>
            <p>wind speed</p>
              {data.main ? <p className='bold'> {data.wind.speed.toFixed()} K/PH</p> : null}
              
            </div>
          </div>
}
                    </Grid.Column>
                </Grid.Row> */}
            {/* </Grid> */}
        </>
    )
}

export default Weather;