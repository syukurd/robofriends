import React, { Component } from 'react';
import CardList from '../Component/CardList';
import SearchBox from '../Component/Searchbox';
import Scroll from '../Component/Scroll';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            searchField : ''
        };
    }

    onSearchChange = (event)=>{
        this.setState({searchField : event.target.value});
        
    }

    

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(data=> this.setState({robots : data}) )
    }

    render(){
        
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return !this.state.robots.length ?     <h1>Loading</h1>
        :    
            <div className="f3 tc bw2 ma5">
                    <h2 className='title'>Robofriends</h2>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
    
            </div>
        }        
    }


 export  default App;