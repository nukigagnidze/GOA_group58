import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const LaptopContext = createContext();

export const LaptopProvider = ({ children }) => {
  const [laptops, setLaptops] = useState([]);
  const [cart, setCart] = useState([]);

  const getLaptops = async () => {
    try {
      toast.loading("Loading laptops...");
      const res = await axios.get("/api/laptops");
      setLaptops(res.data.laptops);
      toast.dismiss();
      toast.success("Loaded");
    } catch {
      toast.dismiss();
      toast.error("Error loading laptops");
    }
  };

  const deleteLaptop = async (id) => {
    try {
      toast.loading("Deleting...");
      await axios.delete(`/api/laptops/${id}`);
      setLaptops((prev) => prev.filter((l) => l._id !== id));
      toast.dismiss();
      toast.success("Deleted");
    } catch {
      toast.dismiss();
      toast.error("Delete failed");
    }
  };

  const updateLaptop = async (id, data) => {
    try {
      toast.loading("Updating...");
      const res = await axios.put(`/api/laptops/${id}`, data);
      setLaptops((prev) =>
        prev.map((l) => (l._id === id ? res.data.laptop : l))
      );
      toast.dismiss();
      toast.success("Updated");
    } catch {
      toast.dismiss();
      toast.error("Update failed");
    }
  };

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    toast.success("Added to cart");
  };

  return (
    <LaptopContext.Provider
      value={{
        laptops,
        getLaptops,
        deleteLaptop,
        updateLaptop,
        cart,
        addToCart
      }}
    >
      {children}
    </LaptopContext.Provider>
  );
};

export const useLaptops = () => useContext(LaptopContext);
