import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./form.css"
function Form(props) {
  return (
    <form action="" onSubmit={props.searchcity} className="form">
      <TextField
        id="outlined-basic"
        label="City"
        variant="outlined"
              value={props.city}
              onChange={props.handlechange}
      />
      <br />
      <Button variant="contained" type="submit" startIcon={<SearchOutlinedIcon />}>
        Search
      </Button>
    </form>
  );
}
export default Form;
