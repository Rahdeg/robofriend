import React,{Component} from 'react';
import Cardlist from '../Component/Cardlist';
// import  {robot}  from './robot';
import Searchbox from '../Component/Searchbox';
import './App.css';
import Scrol from '../Component/Scrol';



class App extends Component {
	constructor(){
		super()
		this.state={
	robot:[],
	Searchfield: ''
}
		
	}

	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(user=>this.setState({robot:user}))
	}


	onsearchchange = (event) => {
		this.setState({Searchfield: event.target.value})
		
	}
render () {
		const {robot, Searchfield}=this.state;
		const filterrobot= robot.filter(item =>{return item.name.toLowerCase().includes(Searchfield.toLowerCase());
		})
		return (!robot.length)?
		<h2>Loading</h2>:
			(
		      	<div  className='tc'>
				<h1 className='rah f1'>Robo Friends</h1>
				<Searchbox searchchange= {this.onsearchchange} />
				<Scrol>
				 <Cardlist robot={filterrobot}/>
				</Scrol>
				 </div>
				 )
	   }
}

export default App;