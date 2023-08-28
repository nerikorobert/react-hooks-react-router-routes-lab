function MovieItem({title, time, genres, id}){
    let li=genres.map(genre=>{
        return <li key={id}>{genre}</li>
    })
    return(
        <div>
            <h2>{title}</h2>
            <p>{time}</p>
            <ul>
        {li}
            </ul>
        </div>
    )

}
export default MovieItem;