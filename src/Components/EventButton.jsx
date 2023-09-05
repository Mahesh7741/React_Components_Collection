


function EventButton({children,message})
{
    function handleClick(e)
    {
        e.stopPropagation();
        console.log(message)
    }
    return (<>
    <button onClick={handleClick}>{children}</button>
    </>);
}

export default EventButton;