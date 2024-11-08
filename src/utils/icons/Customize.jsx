import PropTypes from "prop-types";

function Customize({ size, color }) {
  return (
    <div>
      <svg width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.4795 19.0353L14.7495 19.0333C15.9695 19.0333 16.6115 19.5393 17.4025 20.7373L17.7955 21.3453C18.1025 21.8003 18.2945 21.9903 18.5355 22.0903C18.9685 22.2683 19.3275 22.1803 20.6446 21.5463L21.0476 21.3503C21.8716 20.9463 22.4336 20.7143 23.0676 20.5553C23.2607 20.507 23.465 20.5374 23.6357 20.6398C23.8063 20.7422 23.9293 20.9082 23.9776 21.1013C24.0259 21.2944 23.9955 21.4987 23.8931 21.6694C23.7907 21.84 23.6247 21.963 23.4316 22.0113C23.0376 22.1093 22.6596 22.2513 22.1646 22.4793L21.0056 23.0363C19.4376 23.7763 18.9055 23.8653 17.9645 23.4763C17.3395 23.2193 16.9845 22.8463 16.4645 22.0513L16.2695 21.7473C15.7075 20.8623 15.4055 20.5713 14.8695 20.5373L14.7495 20.5333C14.2015 20.5333 14.0935 20.6013 12.0095 22.1483C10.2675 23.4413 8.93846 24.0583 7.24944 24.0583C5.18809 24.0583 3.24874 23.68 1.43139 22.9233L4.31341 22.2573C5.25742 22.4573 6.23576 22.5576 7.24844 22.5583C8.53845 22.5583 9.60846 22.0613 11.1155 20.9433L12.2755 20.0873C13.5465 19.1633 13.8295 19.0493 14.4795 19.0353ZM20.7776 1.25511C21.5809 2.05884 22.0323 3.14873 22.0323 4.28513C22.0323 5.42154 21.5809 6.51143 20.7776 7.31516L19.7416 8.35117C20.8936 9.75318 20.8516 11.2382 19.7816 12.3122L16.7805 15.3142C16.6397 15.4548 16.4488 15.5337 16.2498 15.5335C16.0508 15.5333 15.8601 15.4541 15.7195 15.3132C15.5789 15.1724 15.5001 14.9815 15.5003 14.7825C15.5005 14.5835 15.5797 14.3928 15.7205 14.2522L18.7195 11.2532C19.2045 10.7672 19.2595 10.1632 18.6795 9.41518L8.08445 20.0093C7.78623 20.3073 7.41027 20.5156 6.99944 20.6103L0.919384 22.0143C0.795341 22.0431 0.666019 22.0398 0.543604 22.0047C0.421188 21.9697 0.309709 21.904 0.219672 21.814C0.129634 21.724 0.0640025 21.6125 0.0289604 21.4901C-0.00608168 21.3677 -0.00938014 21.2383 0.0193759 21.1143L1.42239 15.0342C1.51694 14.623 1.7252 14.2467 2.02339 13.9482L14.7165 1.25511C15.1144 0.857189 15.5868 0.541544 16.1067 0.326192C16.6266 0.11084 17.1838 0 17.7465 0C18.3093 0 18.8665 0.11084 19.3864 0.326192C19.9063 0.541544 20.3797 0.857189 20.7776 1.25511ZM15.7765 2.31512L3.0844 15.0102C2.98513 15.1098 2.91582 15.2352 2.8844 15.3722L1.74939 20.2823L6.66144 19.1493C6.7981 19.1177 6.92317 19.0484 7.02244 18.9493L19.7166 6.25415C20.239 5.73167 20.5326 5.02303 20.5326 4.28413C20.5326 3.54523 20.239 2.8366 19.7166 2.31412C19.1941 1.79163 18.4854 1.49811 17.7465 1.49811C17.0076 1.49811 16.299 1.79263 15.7765 2.31512Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

Customize.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Customize;