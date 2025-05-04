// edit.js  
const Edit = () => {  
    const [weather, setWeather] = useState(null);  
    useEffect(() => {  
      fetch('https://api.weather.com/...')  
        .then(response => response.json())  
        .then(data => setWeather(data));  
    }, []);  
    return <div>{weather ? weather.temp : 'Loading...'}</div>;  
  };  