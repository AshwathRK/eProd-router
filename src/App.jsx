import { useEffect, useState } from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import Filters from './Components/Filter';
import ProductList from './Components/ProdectList'
import Axios from 'axios';
import { createContext } from 'react'
import AddToCardModel from './Components/AddToCardModel';


export const AppContext = createContext()

function App() {

    const [productDetails, setprodectDetails] = useState([]) // Get data from the API
    const [filteredCategory, setFilteredCategory] = useState([]) // To get the uniqe category
    const [selectedProdects, setSelectedProdects] = useState([]) // Store the all selected prodects
    const [addToCardPopup, setaddToCardPopup] = useState("modelPopup-down") // based on the add to card click to dispay the popup

    const [filteredData, setFilteredData] = useState([])
    const [count, setCount] = useState(1)

    const [countID, setCountID] = useState({})


    //CallBack for the model popup open and close
    const addModelPopup = () => {
        setaddToCardPopup((prevDrag) => (prevDrag === "modelPopup-down" ? "modelPopup-open" : "modelPopup-down"));
    }


    //To fetching the all data from the API
    useEffect(() => {
        Axios.get('https://fakestoreapi.com/products').then((response) => {
            setprodectDetails(response.data)
        }
        )
            .catch((error) => console.error("Error fetching data:", error));
    }, []
    )

    //Call back for to setting the selecting count in the model
    const getSelectedProdect = (prodects) => {
        useEffect(() => {
            setSelectedProdects(prodects);
            setCountID(
                prodects.map((item) => ({ id: item.id, selectedCount: count }))
            );
        }, [prodects, count]);
    }


    //Callback for the selected category

    // const fetchTheSelectedCategory = (object)=>{
    //     setFilteredData(
    //         productDetails.filter((value) => 
    //             object.some((filterValue) => value.name === filterValue.name)
    //         )
    //     );
    // }

    useEffect(()=>{
        console.log(filteredData)

    }, [])

    return (
        <>
            <div>
                <NavigationBar selectedProdectCount={(selectedProdects.length)} onClick={addModelPopup} />
                <AppContext.Provider value={{ productDetails, setprodectDetails, filteredCategory, setFilteredCategory }}>
                    <div className='filter-con w-full flex'>
                        <Filters />
                        {/* filerfun={fetchTheSelectedCategory} */}
                        <div className="container">
                            <ProductList selectedProdect={getSelectedProdect} />
                        </div>
                    </div>
                </AppContext.Provider>
                <AddToCardModel selectedProdectCount={countID} selectedProdect={selectedProdects} onClick={addModelPopup} className={addToCardPopup} />
            </div>
        </>
    )
}

export default App
