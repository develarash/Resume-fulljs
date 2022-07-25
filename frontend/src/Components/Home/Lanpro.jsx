import {ReactComponent as Logo1} from "../../assets/js.svg";
import {ReactComponent as Logo2} from "../../assets/nodejs2.svg";
import {ReactComponent as Logo3} from "../../assets/react.svg";
import {ReactComponent as Logo4} from "../../assets/pwa.svg";


const Lanpro = () => {
  return (
    <div className="container">
        <div className="inner">
            <div title="JavaScript" className="logo">
                <Logo1/>
            </div>
            <div title="Node Js" className="logo">
                <Logo2/>
            </div>
            <div title="React Js" className="logo">
                <Logo3/>
            </div>
            <div title="Progressive Web Apps" className="logo">
                <Logo4/>
            </div>

        </div>

    </div>
  )
}

export default Lanpro;
