import { useEffect, useState } from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import Filters from './Components/Filter';
import ProductList from './Components/ProdectList'
import Axios from 'axios';
import { createContext } from 'react'
import AddToCardModel from './Components/AddToCardModel';
import { Router, Routes, Route } from 'react-router';
import AddToCardPages from './Pages/AddToCardPages';


export const AppContext = createContext()

function App() {

    const [productDetails, setprodectDetails] = useState([]) // Get data from the API
    const [filteredCategory, setFilteredCategory] = useState([]) // To get the uniqe category
    const [selectedProdects, setSelectedProdects] = useState([]) // Store the all selected prodects
    const [addToCardPopup, setaddToCardPopup] = useState("modelPopup-down") // based on the add to card click to dispay the popup

    const [filteredData, setFilteredData] = useState([])
    const [count, setCount] = useState(1)

    const [countID, setCountID] = useState({})

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
                prodects.map((item) => ({ id: item.id, selectedCount: count, price: item.price}))
            );
        }, [prodects, count]);
    }

    //Remove items form selected prodect
    const removeItem=(values)=>{
        const newArray = selectedProdects.filter(item => item.id!==values.id);
        const removeTheID = countID.filter(item=> item.id!==values.id)
        setCountID(removeTheID);
        setSelectedProdects(newArray);
    }

    return (
        <>
            <NavigationBar selectedProdectCount={(selectedProdects.length)}/>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <AppContext.Provider
                                value={{ productDetails, setprodectDetails, filteredCategory, setFilteredCategory }}
                            >
                                <div className='filter-con w-full grid col-span-5 row-span-10 row-start-2 grid-rows-5 grid-cols-5'>
                                    <Filters/>
                                    <div className="container col-start-2 col-span-4 row-span-5">
                                        <ProductList selectedProdect={getSelectedProdect} />
                                    </div>
                                </div>
                            </AppContext.Provider>
                        }
                    />
                    <Route path='/addToCart' element={<AddToCardPages removerProd={removeItem} selectedProdectCount={countID} selectedProdect={selectedProdects}/>}/>
                </Routes>
        </>
    )
}

export default App