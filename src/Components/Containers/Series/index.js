import React, {Component} from 'react';
import Serieslist from '../../Serieslist';

class Series extends Component {
    state = {
        series:[],
        seriesName:'',
        isFetching: false
      }
    componentDidMount(){

    }

    onSeriesInputChange = e => {
        this.setState({seriesName:e.target.value, isFetching:true})

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response=>response.json())
        .then(json=>this.setState({series:json, isFetching:false}))
    }

    render() {
        const {series, seriesName, isFetching} = this.state;
        return(
            <div>List number :  {this.state.series.length}
                <div>
                 <input
                 value={seriesName} 
                 type= "text" onChange={this.onSeriesInputChange}/>
                </div>
                {series.length ===0 && seriesName.trim()===''
                && <p>Please enter series name into the input</p>
                }

                {series.length ===0 && seriesName.trim()!==''
                && <p>No TV series have been found with this name</p>
                }

                {isFetching && <p>...loading</p>}

                {!isFetching && <Serieslist list={this.state.series}/>}


            
            </div>
        )
    }
}

export default Series;