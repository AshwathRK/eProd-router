function Buttons(probs){
    return(
        <button onClick={probs.onClick} type={probs.type} data-toggle={probs.datatoggle} data-target={probs.datatarget} className={probs.className}>{probs.insideText}</button>
    )
}
    export default Buttons;