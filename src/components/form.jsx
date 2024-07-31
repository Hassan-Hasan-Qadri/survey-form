
function Form({ handleSubmit }) {
 
  return (
    <div>
        <div className="option" onClick={handleSubmit}> 
            <span>yes, I’d pay extra for a service layer</span>
            <span>30%</span>
        </div>
        <div className="divider"></div>
    </div>
  );
}

export default Form;
