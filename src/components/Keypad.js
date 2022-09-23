// Code Keypad Component Here

function Keypad (){
    function handleChange(event) {
        event.preventDefault();
        console.log('Entering password...');
      }
    return (<div>
        <input
            type="password"
            name="search"
            onChange={handleChange}
            placeholder="Enter search term..."/>
    </div>
        
    )
}

export default Keypad;