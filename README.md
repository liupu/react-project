#### react-project

`jsx表达式`
```
const element = <h1>Hello world<h1>

const name ='Liu Pu';

const nameEle = <h1>Hello, {name}</h1>
```

`jsx表示对象`
```
const element = (
    <h1 className='greeting'>
        Hello, World!
    </h1>
);
```
`组件:(函数组件和class组件)`

`函数组件(无状态组件)`
```
function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}
```
`class组件(有状态组件)`
```
class App extends React.Component{
    render(){
        return(
            <h1>
                Hello, {this.props.name}
            </h1>
        )
    }
}

class Com extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
}
```