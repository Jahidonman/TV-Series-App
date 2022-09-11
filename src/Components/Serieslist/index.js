import React from 'react'

const SerieslistItem = ({series}) => (
    <li >
    {series.show.name}
</li>
)

const Serieslist = (props)=>{
    return(
        <div>
            <ul>{props.list.map(series=>(
                <SerieslistItem series={series} key={series.show.id}/>
            ))}</ul>
        </div>
    )
}
export default Serieslist;