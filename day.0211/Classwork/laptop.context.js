import { createContext, useContext, useState } from "react";
import axios from "axios";

export const LaptopContext = createContext();

export const LaptopProvider = ({ children }) => {
  const [laptops, setLaptops] = useState([]);

  const getLaptops = async () => {
    const res = await axios.get("/api/laptops");
    setLaptops(res.data.laptops);
  };

  const deleteLaptop = async (id) => {
    await axios.delete(`/api/laptops/${id}`);
    setLaptops((prev) => prev.filter((l) => l._id !== id));
  };

  const updateLaptop = async (id, data) => {
    const res = await axios.put(`/api/laptops/${id}`, data);
    setLaptops((prev) =>
      prev.map((l) => (l._id === id ? res.data.laptop : l))
    );
  };

  return (
    <LaptopContext.Provider
      value={{ laptops, getLaptops, deleteLaptop, updateLaptop }}
    >
      {children}
    </LaptopContext.Provider>
  );
};

export const useLaptops = () => useContext(LaptopContext);
