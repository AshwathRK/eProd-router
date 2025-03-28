import Buttons from "./Elements/Buttons";
import Images from "./Elements/Images";
import eProdLogo from '/public/eProd logo.png'
import card from '/public/card.svg'
import { Link } from "react-router-dom" 


function NavigationBar(props) {

    var pageButtons = {
        "ClassName": "addToCardButton flex items-center poppins-bold btn btn-primary",
        "insideText": "Card"
    }

    

    const cardImages = {
        "className": "addTocardimg px-1",
        "alt": "addToCard"
    }

    return (
        <>
            <nav className="navBar flex justify-between items-center col-span-5">
                <img src={eProdLogo} alt="eProd" className="eProdLogo" />
                <Link to = "/addToCart">
                    <Buttons className={pageButtons.ClassName} insideText={<><Images src={card} alt={cardImages.alt} className={cardImages.className}
                    />{pageButtons.insideText}</>} />
                </Link>
                <div className="selectedProCount bg-red-600"><p className="text-white poppins-bold text-xs">{props.selectedProdectCount}</p></div>
            </nav>
        </>
    )
}

export default NavigationBar;

