import PropTypes from "prop-types";

function Delete({ style }) {
  return (
    <svg
      width="10"
      height="13"
      viewBox="0 0 10 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4_144)">
        <path
          d="M9.47398 5.39414V6.65522C9.47398 6.83038 9.41268 6.97925 9.29007 7.10186C9.16747 7.22446 9.01859 7.28577 8.84344 7.28577H0.856574C0.681424 7.28577 0.532546 7.22446 0.40994 7.10186C0.287335 6.97925 0.226032 6.83038 0.226032 6.65522V5.39414C0.226032 5.21899 0.287335 5.07011 0.40994 4.94751C0.532546 4.8249 0.681424 4.7636 0.856574 4.7636H8.84344C9.01859 4.7636 9.16747 4.8249 9.29007 4.94751C9.41268 5.07011 9.47398 5.21899 9.47398 5.39414Z"
          fill={style}
        />
      </g>
      <defs>
        <clipPath id="clip0_4_144">
          <rect
            width="9.44"
            height="12"
            fill="white"
            transform="matrix(1 0 0 -1 0.130005 12.5599)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
export default Delete;

Delete.defaultProps = {
  style: "#000",
};

Delete.propTypes = {
  style: PropTypes.string,
};