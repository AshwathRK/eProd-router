import { useState, useContext } from "react";
import {AppContext} from "../App"
import imagesStars from "/public/star.png"

const ProductList = (probs) => {

    const {productDetails} = useContext(AppContext)

    
    const [card, setCard] = useState([])
    const [disabledButtons, setDisabledButtons] = useState({}); 
    const addToCard = (key) => {
        setCard([...card, productDetails[key]])
        setDisabledButtons((prevState) => ({
            ...prevState,
            [key]: true,
        }));
    }

    probs.selectedProdect(card)

    return (
        <div className="subDivs">
            {Array.isArray(productDetails) && productDetails.length > 0 ? (
                productDetails.map((values, key) => (
                    <div key={key} className="insideDivs grid grid-cols-9 grid-rows-4">
                        <div className="imageDiv col-span-2 row-span-4">
                            <img id={`image${key}`} className="images" src={values.image} alt={values.alt || "image"} />
                        </div>
                        <div className="prodectInfo py-3 col-span-5 row-span-4 col-start-3 flex flex-col justify-around">
                            <div className="Cat-C px-5 flex">
                                <h6 className="Cat-h poppins-bold">Category:</h6>
                                <h6 className="Cat-t catugoryInfo px-2 poppins-medium">{values.category}</h6>
                            </div>
                            <div className="w-full">
                                <h4 className="px-5 poppins-bold h-20 prodectTitle">{values.title}</h4>
                            </div>
                            <h6 className="px-5 poppins-regular text-xl prodDesc">{values.description}</h6>
                            <div className="px-5 ratting xl:max-w-70 xl:min-w-60 lg:max-w-70 lg:min-w-60 md:max-w-70 md:min-w-60  flex justify-around items-center">
                                <div className="ratingStar flex justify-around items-center gap-1 bg-green-600">
                                    <img className="imgStar" src={imagesStars} alt="stars" />
                                    <h6 className="ratingTest">{values.rating.rate}</h6>
                                </div>
                                <h6 className="reviewCount poppins-bold">{values.rating.count} Ratings</h6>
                            </div>
                        </div>
                        <div className="purchessDetails col-span-2 row-span-4 col-start-8 flex flex-col justify-around py-22 items-center">
                            <h2 className="poppins-semibold">₹{values.price}</h2>
                            <button
                                id={key}
                                type="button"
                                className="btn btn-primary"
                                onClick={() => addToCard(key)}
                                disabled={disabledButtons[key]}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading products...</p> // ✅ Handles case where productList is empty or undefined
            )}

        </div>
    );
};

export default ProductList;
