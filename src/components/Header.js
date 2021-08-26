import Button from "./Button"

const Header = () => {
    const onClick = () => {
        console.log('Click')
    }

    
    return (
        <header className='header'>
            <h1>Put Your Tasks</h1>
            <Button color='Black' text='Add Task' onClick={onClick}/>
            
        </header>
    )
}


export default Header
