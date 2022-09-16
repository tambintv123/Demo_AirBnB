import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ error }) => <p>{error.message}</p>;

ErrorMessage.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export { ErrorMessage };
