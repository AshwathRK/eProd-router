function Buttons(probs){
    return(
        <button type={probs.type} data-toggle={probs.datatoggle} data-target={probs.datatarget} className={probs.className}>{probs.insideText}</button>
    )
}
    export default Buttons;