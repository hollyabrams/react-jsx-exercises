const Person = (props) => {
  const { name, age, hobbies } = props;

  // Determine whether the person is eligible to vote
  const canVote = age >= 18;

  // Determine whether to display the person's full name or just the first six characters
  const displayName = name.length > 8 ? name.slice(0, 6) + "..." : name;

  return (
    <div className="card border-primary mb-3 w-50">
      <div className="card-body">
        <h5 className="card-title">{displayName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{canVote ? "Please go vote!" : "You must be 18 to vote"}</h6>
        <p className="card-text">Learn some information about this person:</p>
        <ul className="list-group list-group-flush">
          Hobbies
          {hobbies.map((hobby, index) => (
            <li className="list-group-item" key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

