import { useEffect, useState } from "react";
import { useLaptops } from "../context/laptopContext";
import { useAuth } from "../context/authContext";

const Products = () => {
  const { user } = useAuth();
  const { laptops, getLaptops, deleteLaptop, updateLaptop } = useLaptops();
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ brand: "", price: "" });

  useEffect(() => {
    getLaptops();
  }, []);

  const startEdit = (l) => {
    setEditId(l._id);
    setForm({ brand: l.brand, price: l.price });
  };

  const submitEdit = async (id) => {
    await updateLaptop(id, form);
    setEditId(null);
  };

  return (
    <div>
      {laptops.map((l) => (
        <div key={l._id}>
          {editId === l._id ? (
            <>
              <input
                value={form.brand}
                onChange={(e) =>
                  setForm({ ...form, brand: e.target.value })
                }
              />
              <input
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />
              <button onClick={() => submitEdit(l._id)}>save</button>
            </>
          ) : (
            <>
              <p>{l.brand}</p>
              <p>{l.price}$</p>
            </>
          )}

          {(user.role === "admin" || user.role === "moderator") && (
            <button onClick={() => startEdit(l)}>update</button>
          )}

          {user.role === "admin" && (
            <button onClick={() => deleteLaptop(l._id)}>delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
