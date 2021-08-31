import Button from "./Button"

const Header = ({onAdd, showAdd}) => {
    
    return (
        <header className='header'>
            <h1>To Do List</h1>
            <Button  color={showAdd ? '#71031c' : '#04637a'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            
        </header>
    )
}


export default Header
