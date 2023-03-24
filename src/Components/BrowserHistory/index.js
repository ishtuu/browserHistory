import {Component}  from "react"
import HistoryItem from "../HistoryItem"

import './index.css'

class BrowserHistory extends Component {
    state = {
        searchInput: '',
        historyList: []
    }

    onChangeSearchInput = event => {
        this.setState({searchInput: event.target.value})
    }

    componentDidMount = () => {
        const {initialHistoryList} = this.props
        this.setState({historyList: initialHistoryList})
    }

    filterHistory = () => {
        const {searchInput, historyList} = this.state
        const filter = historyList.filter(eachHistory => 
            eachHistory.title.toLowerCase().includes(searchInput)
            )
            return filter
    }
    onDelete = id => {
        const {historyList} = this.state
        const filter = historyList.filter(eachHistory => 
            eachHistory.id !== id,
        )
        this.setState({historyList: filter})
    }

    // onDelete = id => {
    //     const {historyList} = this.state
    //     const filter = historyList.filter(
    //       eachHistory => eachHistory.id !== id,
    //     )
    
    //     this.setState({historyList: filter})
    //   }
    render() {
        const {searchInput} = this.state
        const filter = this.filterHistory()

        return (
            <div className="app-container">
                <div className="responsive">
                    <div className="history-header">
                        <img 
                          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" 
                          alt="logo"
                          className="logo"
                        />  
                    </div>    
                    <div className="Search-container">
                        <div className="icon">
                            <img 
                              src="https://assets.ccbp.in/frontend/react-js/search-img.png" 
                              alt="search"
                              className="search-icon"
                            />  
                        </div>
                        <input 
                          type="search"
                          value={searchInput}
                          onChange={this.onChangeSearchInput}
                          placeholder="Search History"
                        />
                    </div>
                </div>
                <ul className="history-container">
                    {filter.map(eachHistory =>(
                        <HistoryItem 
                          historyDetails={eachHistory} 
                          key={eachHistory.id} 
                          onDelete={this.onDelete}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default BrowserHistory
