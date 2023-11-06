function NameInsert() {
    function HandleSubmit(e){
        e.preventDefault();
    }
    // function HandlClick(e){
    // }
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <h1>Enter You Name :</h1>
        <input type="text" />
        <button onClick={(e)=>{e.stopPropagation()}}>Add</button>
      </form>
    </>
  );
}

export default NameInsert;
