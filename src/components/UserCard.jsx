import '../assets/style/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, setShow }) => {
  const handleDelete = () => {
    deleteUser("/users", user.id);
  };

  const handleEdit = () => {
    setInfoUpdate(user);
    setShow(true);
  };

  return (
    <article className="card">
      <div className="div__card">
        <h3 className="card__title">
          {`${user.first_name} ${user.last_name}`}
        </h3>
        <ul className="card__list">
          <li className="card__item">
            <span className="card__label">CORREO: </span>
            <span className="card__value">{user.email}</span>
          </li>
          <li className="card__item">
            <span className="card__label">CUMPLEAÑOS: </span>
            <span className="card__value">
              <i className="bx bx-gift"></i>
              {user.birthday}
            </span>
          </li>
        </ul>
        <div className="card__container__btn">
        <button className="card__btn__delete" onClick={handleDelete}>
          <i className="bx bxs-trash"></i>
        </button>
        <button className="card__btn__edit" onClick={handleEdit}>
          <i className="bx bx-pencil"></i>
        </button>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
