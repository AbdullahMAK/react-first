import Button from "./Button"
import { useLocation } from "react-router-dom"

const Header = ({onAdd, showAdd}) => {
    const location = useLocation()
    
    return (
        <header className='header'>
            
            <h1>To Do List</h1>
            {location.pathname === '/' && (
            <Button  color={showAdd ? '#a61637' : '#08758f'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            )}
        </header>
    )
}


export default Header
