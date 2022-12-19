import PropTypes from "prop-types";

const IBook = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    authors: PropTypes.array,
  }),
  onShelfUpdate: PropTypes.func.isRequired,
};

export default IBook;
