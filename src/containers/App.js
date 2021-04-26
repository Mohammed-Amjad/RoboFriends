import React from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(user => user.json())
            .then(user => this.setState({ robots: user }));
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        if (this.state.robots.length === 0) {
            return (<h1 className='tc'>Loading...</h1>);
        }
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox onsearchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
}

export default App;