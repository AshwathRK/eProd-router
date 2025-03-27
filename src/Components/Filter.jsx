import { useContext, useEffect, useState } from "react";
import MainFilterComponent from "./FilterComponents/MainFilterComponent";
import  {AppContext}  from "../App";


function Filters(props) {
    
    const [drag, setDrag] = useState("fill-down");
    const [data, setData] = useState([])
    const [responceCategory, setResponceCategory] = useState([])

    const {productDetails} = useContext(AppContext);

    function dragFunction() {
        setDrag((prevDrag) => (prevDrag === "fill-down" ? "fill-up" : "fill-down"));
    }

    useEffect(() => {
        if (Array.isArray(productDetails) && productDetails.length > 0) {
            const uniqueValues = [...new Set(productDetails.map(value => value.category))];
            setData(uniqueValues);
        }
    }, [productDetails]);

    const getCheckBoxValue = (categoryList, list) => {
        setResponceCategory(prevState => {
            const exists = prevState.find(item => item.Id === categoryList);
    
            if (exists) {
                // If ID exists, toggle isChecked
                return prevState.map(item =>
                    item.Id === categoryList ? { ...item, isChecked: !item.isChecked } : item
                );
            } else {
                // If ID doesn't exist, add a new entry
                return [...prevState, { Id: categoryList, value: list, isChecked: true }];
            }
        });}

        // props.filerfun(responceCategory)

    return (
        <div className="filterbar row-span-5 row-start-1">
            <MainFilterComponent drag={drag} data={data} dragFunction={dragFunction} getCheckBoxValue={getCheckBoxValue}/>
            
        </div>
    );
}

export default Filters;
