import PropTypes from "prop-types";

function ContactUs({ size, color }) {
  return (
    <div>
      <svg width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 15.3333C22 15.9227 21.7659 16.4879 21.3491 16.9047C20.9324 17.3214 20.3671 17.5556 19.7778 17.5556H6.44444L2 22V4.22222C2 3.63285 2.23413 3.06762 2.65087 2.65087C3.06762 2.23413 3.63285 2 4.22222 2H19.7778C20.3671 2 20.9324 2.23413 21.3491 2.65087C21.7659 3.06762 22 3.63285 22 4.22222V15.3333Z"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

ContactUs.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default ContactUs;
