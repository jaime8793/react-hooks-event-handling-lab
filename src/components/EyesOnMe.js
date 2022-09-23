function EyesOnMe() {
    function handleFocus(onFocus){
        console.log('Good!')
        }
    function handleBlur(onBlur){
        console.log('Hey! Eyes on me!')
    }
  return <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>;
}

export default EyesOnMe;