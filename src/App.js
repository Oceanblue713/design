import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@mui/material";
import Save from "@mui/icons-material/Save";
import Delete from "@mui/icons-material/Delete";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup variant="contained" color="secondary">
          <Button startIcon={<Save />} color="primary" size="large">
            Save
          </Button>
          <Button
            startIcon={<Delete />}
            endIcon={<Delete />}
            size="large"
            color="secondary"
            href="#"
            onClick={() => {
              alert("Hi!");
            }}
            style={{
              fontSize: 24,
            }}
          >
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
