function Summary(props){

    // same thing as: const planetsDeleted = props.planetsDeleted
    const {planetsDeleted} = props;
    
    return(
        <div>
            <h3>Planets Deleted: {planetsDeleted}</h3>
            {/* Count of the Number of Planets that we deleted */}
        </div>
    )
}

export default Summary;