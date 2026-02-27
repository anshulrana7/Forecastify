import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const Int_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL = "https://media.istockphoto.com/id/1200224188/photo/white-clouds-and-sun-in-blue-sky.jpg?s=612x612&w=0&k=20&c=_fqLmtlTODIhKV_5nNJm8lcMiVEZUmxTfHZERvP1HkE=";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=612x612&w=0&k=20&c=GUJvhhU3WVvHhJ3kU4E33fVUzICegLq1sh2msWS5kNk=";


    return (<div className="InfoBox">
        <div className="cardContainer">
           <Card sx={{ maxWidth: 510, width: "100%", borderRadius: "25px" }}> 
                <CardMedia sx={{ height: 220 }}
                    image={
                        info.humidity > 80
                        ? RAIN_URL : info.temp > 15 
                        ? HOT_URL : COLD_URL
                    }
                title="green iguana"
            />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{
                        info.humidity > 80
                        ? <ThunderstormIcon/> : info.temp > 15 
                        ? <SunnyIcon/> : <AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div>)
}