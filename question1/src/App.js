import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const state = useSelector((item) => item.ChangeSign);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h1 className="heading">INCREMENT/DECREMENT COUNTER</h1>
        </div>
        <form>
          <div className="number">

            <a className="plus" onClick={() => dispatch({
              type: "DECREMENT",
            })}>
              <span>-</span>
            </a>
            <input className="itext" type="text" value={state} />
            <a className="minus" onClick={() => dispatch({
              type: "INCREMENT"
            })}>
              <span>+</span>
            </a>

            
            <a className="ireset1" onClick={() => dispatch({
              type: "RESET"
            })}> <span>Reset</span></a>

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
