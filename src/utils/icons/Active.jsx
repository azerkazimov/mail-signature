import PropTypes from "prop-types";

function Active({ size, color }) {
  return (
    <div>
      <svg width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 12H5.76878C6.20426 12 6.58967 11.7182 6.72171 11.3032L8.64603 5.25534C8.96978 4.23783 10.4491 4.36797 10.5902 5.42638L12.4883 19.6624C12.6248 20.686 14.0345 20.8563 14.4108 19.8946L17.2513 12.6356C17.4013 12.2523 17.7709 12 18.1825 12H21.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

Active.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Active;
