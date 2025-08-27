import React from "react";
import PropTypes from "prop-types";

export default function Card({ title, children }) {
  const style = {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  };

  return (
    <div style={style}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

// ✅ Add prop validation
Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
