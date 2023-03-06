const Tweet = (props) => {
  return (
    <div className="card border-primary mb-3 w-75">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">@{props.username}</h6>
        <p className="card-text">{props.message}</p>
        <p className="card-text"><small className="text-muted">{props.date}</small></p>
      </div>
    </div>
  );
}
