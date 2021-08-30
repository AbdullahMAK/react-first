import Button from "./Button"

const Header = ({onAdd, showAdd}) => {
    
    return (
        <header className='header'>
            <h1>Put Your Tasks</h1>
            <Button  color={showAdd ? '#CE4257' : '#00649480'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            
        </header>
    )
}


export default Header
