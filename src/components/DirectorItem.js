function DirectorsItem({name, movies}){
    let li = movies.map(movie=>{
        return <li key={movie}>{movie}</li>
    })
    return (
        <div>
            <p>{name}</p>
            <ul>
                {li}
            </ul>
        </div>
    )
}

export default DirectorsItem