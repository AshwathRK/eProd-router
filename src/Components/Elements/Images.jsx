function Images(probs){
    return(
        <img src={probs.src} alt={probs.alt} className={probs.className}/>
    )
}

export default Images