import "../styles/registrationform.css";

export const RegistrationForm = () => {
  const ticketType = ["Early Bird", "Standard", "Student", "Virtual Access"];

  const handleBuyTicket = (e) => {
    e.preventDefault();
    alert("Form is submitted");
  };
  return (
    <>
      <div className="form-wrapper">
        <h3>Fill up the form to register</h3>
        <form>
          <input placeholder="Full Name" type="text" />
          <input placeholder="Email Address" type="email" />
          <input placeholder="Organization" />
          <select>
            {ticketType?.map((type, index) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
          <input placeholder="Payment Information" />
          <button onClick={(e) => handleBuyTicket(e)}>Buy Ticket</button>
        </form>
      </div>
    </>
  );
};
