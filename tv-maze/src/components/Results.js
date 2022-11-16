const Results=(props)=>{

    const {details,state}=props
    let data
    let id
    console.log(state)

    if(state==="people"){
        data=details?.person  //details&&details.person
        id=details?.person?.id
    }else if(state==="shows"){
        data=details?.show
        id=details?.show?.id
    }

    const images=data?.image ? data.image.medium:"";
    console.log(data)
    return(
        <div className="py-5 border-2 border-black">
        <h2 className="text-center text-white pb-2 text-md">{data.name}</h2>
        <div className="w-52">            
            <img src={images} alt=""/>
            {data.summary&&(
                <div>
                    <h2>{data.summary}</h2>
                </div>
            )}
        </div>
        </div>
    )
}

export default Results
