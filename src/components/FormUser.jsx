import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUser = ({
  createUser,
  infoUpdate,
  updateUser,
  setInfoUpdate,
  setShow,
}) => {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    reset(infoUpdate);
  }, [infoUpdate]);

  const submit = (data) => {
    if (infoUpdate) {
      //Update
      updateUser("/users", infoUpdate.id, data);
      setInfoUpdate();
    } else {
      //Create
      createUser("/users", data);
    }
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div className="form__btn">
        <button className="form__btn__close" onClick={handleClose}>
          <i className="bx bx-x"></i>
        </button>
      </div>
      <h2 className="form__title">{infoUpdate ? "Editar usuario" : "Nuevo usuario"}</h2>
      <div className="form__container">
        
          <label className="form__label" htmlFor="email">Email</label>
          <input className="form__value"  {...register("email")} type="email" id="email" />
        
        
          <label className="form__label" htmlFor="password">Password</label>
          <input className="form__value" {...register("password")} type="password" id="password" />
        
        
          <label className="form__label" htmlFor="first_name">First name</label>
          <input className="form__value" {...register("first_name")} type="text" id="first_name" />
        
          <label className="form__label" htmlFor="last_name">Last name</label>
          <input className="form__value" {...register("last_name")} type="text" id="last_name" />
        
        
          <label className="form__label" htmlFor="birthday">Birthday</label>
          <input className="form__value" {...register("birthday")} type="date" id="birthday" />
       
      </div>
      <button className="form__btn__create">{infoUpdate ? "Actualizar" : "Agregar nuevo usuario"}</button>
    </form>
  );
};

export default FormUser;
