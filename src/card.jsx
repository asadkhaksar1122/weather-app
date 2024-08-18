import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./card.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import NatureIcon from "@mui/icons-material/Nature";
export default function Cardmain({ result, validcity }) {
  return (
    <div className="maindiv">
      {result && (
        <>
          {!validcity ? (
            <div>
              <Alert severity="error">
                <AlertTitle>City not Found</AlertTitle>
                Please enter a valid city name.
              </Alert>
            </div>
          ) : (
            <div>
              <Alert severity="success">
                <AlertTitle>City Found</AlertTitle>
                The city found successfully
              </Alert>
            </div>
          )}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={result.imageurl}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {result.name} <i>{result.country}</i>{" "}
                {result.weather == "Hot" ? (
                  <WbSunnyIcon />
                ) : result.weather == "Cool" ? (
                  <NatureIcon />
                ) : result.weather == "Extremly Cool" ? (
                  <AcUnitOutlinedIcon />
                ) : null}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Tempreature : <b>{result.temp}°C</b>
                </p>
                <p>
                  Feel Like : <b>{result.feel_like}°C</b>
                </p>
                <p>
                  The weather is : <b>{result.weather}</b>
                </p>
                <p>
                  Maximum Temperature :<b> {result.temp_max}°C</b>
                </p>
                <p>
                  Minimum Temperature : <b>{result.temp_min}°C</b>
                </p>
                <p>
                  Humidity : <b>{result.humidity}</b>
                </p>
                <p>
                  Wind Speed : <b>{result.windspeed}Km/h</b>
                </p>
                <p>
                  Wind Direction : <b>{result.winddirection}90&#176;</b>
                </p>
                <p>
                  Wind Pressure : <b>{result.pressure}Pascal</b>
                </p>
                <p>
                  Sea Level : <b>{result.sea_level}Km</b>
                </p>
                <p>
                  Sun Rise Time : <b>{result.sunrise}</b>
                </p>
                <p>
                  Sun Set Time : <b>{result.sunset}</b>
                </p>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
