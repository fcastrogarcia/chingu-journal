const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePosts(data) {
  let errors = {};
  var { title, text } = data;

  title = !isEmpty(title) ? title : "";
  text = !isEmpty(text) ? text : "";

  if (Validator.isEmpty(title)) {
    errors.title = "Title field is required";
  } else if (Validator.isEmpty(text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
