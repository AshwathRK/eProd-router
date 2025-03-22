import { useState , useEffect } from "react";

function AddToCardModel(probs) {
    const [addCount, setAddCount] = useState([]);

    // Decrease the selected count
    const decrease = (key) => {
        setAddCount((prevState) =>
            prevState.map((value) =>
                value.id === key
                    ? { ...value, selectedCount: value.selectedCount - 1 }
                    : value
            )
        );
    };

    // Increase the selected count
    const increase = (key) => {
        setAddCount((prevState) =>
            prevState.map((value) =>
                value.id === key
                    ? { ...value, selectedCount: value.selectedCount + 1 }
                    : value
            )
        );
    };

    //Set the add count
    useEffect(() => {
        setAddCount(probs.selectedProdectCount)
            }, [probs]);


    return (
        <div className={probs.className}>
            <div className="addToCardPopup flex flex-col rounded-lg">
                <div className="atcHedders w-full flex justify-between items-center px-5">
                    <h4 className="title text-white poppins-semibold">Add To Card</h4>
                    <button onClick={probs.onClick} type="button" className="btn btn-secondary btn-sm poppins-semibold">X</button>
                </div>
                <div className="atcProdectContent rounded-lg">
                    <div className="prodList px-8 py-2">
                        {Array.isArray(probs.selectedProdect) && probs.selectedProdect.length > 0 ? (
                            probs.selectedProdect.map((values, key) => (
                                <div key={key} className="prodect my-2 flex">
                                    <div className="imageDiv flex justify-center">
                                        <img id={`image${key}`} className="images" src={values.image} alt={values.alt || "image"} />
                                    </div>
                                    <div className="prodDetails flex flex-col justify-around">
                                        <h5 className="poppins-semibold atcCatagury">Category: {values.category}</h5>
                                        <h3 className="atcTitle poppins-bold">{values.title}</h3>
                                        <div className="flex prodectCount items-center">
                                            <button onClick={() => decrease(values.id)} className="countDecress text-white">-</button>
                                            <h6 className="count text-white">{addCount.map((countValue, contIndex)=> countValue.id===values.id? countValue.selectedCount:null)}</h6>
                                            <button onClick={() => increase(values.id)} className="countIncress text-white">+</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No products selected</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddToCardModel;
