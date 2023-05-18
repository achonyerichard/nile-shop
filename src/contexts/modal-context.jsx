import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

export const ModalsContext = createContext({
  addProductModal: {},
  setAddProductModal: () => {},
  deleteModal: {},
  setDeleteModal: () => {},
  editModal: {},
  setEditModal: () => {},
});

export const ModalsProvider = ({ children }) => {
  ModalsProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [addProductModal, setAddProductModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const value = {
    addProductModal,
    setAddProductModal,
    setDeleteModal,
    deleteModal,
    editModal,
    setEditModal,
  };
  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
};
