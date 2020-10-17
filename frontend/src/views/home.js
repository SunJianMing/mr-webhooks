import React from 'react'
import picImg2 from '../../static/sa.png'
import './home.css'
import axios from 'axios'
export default class Home extends React.Component {
    constructor(options){
        super(options)
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        axios.get('/api/list').then(data=>{
            let {data:{list}} = data
            this.setState({list})
        })
    }
    render(){
        let {list} = this.state
    const liItem = list.map(item=><li key={item.age}>{item.name}:{item.age}</li>)
        return <div>
            <h1>hello webhooks</h1>
            <img src={picImg2} alt=""/>
            <hr/>
            <ul>
                {liItem}
            </ul>
        </div>
    }
}