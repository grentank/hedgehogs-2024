import { useState } from "react";

export default function ProductForm({ addHandler }) {
  //   const [title, setTitle] = useState("");
  //   const [price, setPrice] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });
  const changeHandler = (e) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  console.log(formData);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addHandler(formData);
        // e.target.reset();
        setFormData({
          title: "",
          price: "",
          image: "",
          description: "",
        });
      }}
      className="row g-3"
    >
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          Название
        </label>
        <input
          value={formData.title}
          onChange={changeHandler}
          name="title"
          type="text"
          placeholder="Название"
          className={
            "form-control" + (formData.title.length < 3 ? " is-invalid" : "")
          }
          id="inputEmail4"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">
          Цена
        </label>
        <input
          value={formData.price}
          onChange={changeHandler}
          name="price"
          placeholder="5.00"
          type="number"
          step="0.01"
          className="form-control"
          id="inputPassword4"
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Описание
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={changeHandler}
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Описание товара"
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">
          Картинка
        </label>
        <input
          name="image"
          value={formData.image}
          onChange={changeHandler}
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="https://...."
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
      </div>
    </form>
  );
}
