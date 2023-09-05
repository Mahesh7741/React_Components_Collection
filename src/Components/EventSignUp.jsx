


function EventFrom({children}){

    function handleClick(e){
        e.stopPropagation();
        e.preventDefault();
        alert('Submitting!');
    }
    return (
    
    <form onSubmit={handleClick}>
        <input type="text" />
        <button >{children}</button>
    </form>

    );
}


export default EventFrom;