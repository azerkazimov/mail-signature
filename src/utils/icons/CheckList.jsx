import PropTypes from "prop-types";

function CheckList({ size, color }) {
  return (
    <div>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_965_3900)">
          <path
            d="M4.90057 2.82754C4.92619 2.56543 4.9238 2.33847 4.97384 2.12462C5.03721 1.83465 5.19747 1.57493 5.42823 1.38825C5.65898 1.20157 5.94645 1.09907 6.24325 1.09765C7.98207 1.08812 9.72089 1.08455 11.4597 1.09765C12.2258 1.1042 12.8083 1.72551 12.822 2.49574C12.822 2.61487 12.822 2.72925 12.822 2.87102C13.379 2.87102 13.9122 2.86804 14.4453 2.87102C14.6382 2.86486 14.8312 2.87643 15.0219 2.90557C15.9649 3.08904 16.6094 3.8825 16.6112 4.86241C16.6152 6.86988 16.6152 8.87716 16.6112 10.8842V15.6545H21.4411C21.5452 15.6524 21.6494 15.656 21.7532 15.6652C22.446 15.7379 22.9023 16.23 22.9053 16.9281C22.9106 18.2982 22.9053 19.6641 22.9053 21.0324C22.9053 21.2921 22.9053 21.5524 22.9053 21.8128C22.9085 22.1021 22.8008 22.3817 22.6042 22.5941C22.4077 22.8065 22.1373 22.9355 21.8485 22.9547C21.7294 22.9648 21.6103 22.963 21.4911 22.963C18.6151 22.963 15.7391 22.9577 12.8632 22.963C9.61009 22.9708 6.35703 22.9934 3.10338 23.0041C2.08653 23.0077 1.29903 22.3691 1.11437 21.4035C1.0909 21.2568 1.08113 21.1082 1.08518 20.9597C1.08518 15.5918 1.08518 10.2242 1.08518 4.85705C1.08518 3.65435 1.91319 2.82813 3.11529 2.82277C3.62758 2.82277 4.14047 2.82277 4.65336 2.82277L4.90057 2.82754ZM4.92678 3.50781C4.29118 3.50781 3.70443 3.50781 3.11827 3.50781C2.30515 3.50781 1.76903 4.04989 1.76903 4.86837C1.76903 10.2351 1.76903 15.6017 1.76903 20.9681C1.76903 21.7955 2.30515 22.331 3.13912 22.3316C5.80661 22.3316 8.47391 22.3316 11.141 22.3316C11.2101 22.3316 11.2798 22.3233 11.2989 22.3221C11.2715 21.9861 11.2256 21.6722 11.2238 21.3582C11.2161 19.9286 11.2202 18.5037 11.2208 17.0764C11.2208 16.162 11.7248 15.6581 12.6416 15.6575C13.6447 15.6575 14.6476 15.6575 15.6504 15.6575H15.9274V15.4025C15.9274 11.9237 15.9274 8.44509 15.9274 4.96666C15.9284 4.88494 15.9252 4.80322 15.9178 4.72183C15.8926 4.40359 15.7481 4.10661 15.5133 3.89034C15.2785 3.67407 14.9706 3.55447 14.6514 3.55547C14.1981 3.5513 13.7448 3.55547 13.2915 3.55547H12.8209C12.8209 3.72166 12.825 3.85331 12.8209 3.98794C12.7923 4.74208 12.2156 5.32824 11.4597 5.33241C9.72863 5.34234 7.99756 5.34234 6.26649 5.33241C5.54034 5.32764 4.97384 4.76472 4.92738 4.04155C4.91725 3.87238 4.92678 3.70201 4.92678 3.50781ZM11.9321 16.6934C11.9208 16.8435 11.9071 16.946 11.9071 17.0508C11.9071 18.5599 11.9071 20.069 11.9071 21.578C11.9071 22.0862 12.1144 22.2887 12.6279 22.2887C15.6063 22.2887 18.5847 22.2887 21.5632 22.2887C21.6667 22.2919 21.7701 22.2821 21.8712 22.2595C22.116 22.1964 22.2286 22.0451 22.2286 21.7907C22.2286 20.1851 22.2286 18.5797 22.2286 16.9746C22.2229 16.8971 22.2134 16.8199 22.2 16.7434C22.1059 16.8096 22.0451 16.8501 21.9861 16.8935C20.5323 17.9749 19.078 19.0561 17.6233 20.1371C17.245 20.4182 16.9383 20.4182 16.566 20.1412C15.6526 19.4641 14.7408 18.7863 13.8306 18.1076C13.2122 17.6429 12.5915 17.1836 11.9321 16.6934ZM8.85714 1.77138C8.04065 1.77138 7.22376 1.77138 6.40647 1.77138C5.8781 1.77138 5.60587 2.04004 5.60408 2.56305C5.60408 2.9568 5.60408 3.35055 5.60765 3.7443C5.60765 4.36501 5.8507 4.60746 6.472 4.60746H11.2179C11.2846 4.60746 11.3519 4.60746 11.4186 4.60329C11.8135 4.56695 12.0619 4.3245 12.0852 3.92897C12.1114 3.49233 12.1305 3.05509 12.1358 2.61845C12.1424 2.05493 11.8517 1.77257 11.2858 1.77197C10.4764 1.77078 9.66688 1.77058 8.85714 1.77138ZM12.6487 16.3658C12.7333 16.4331 12.778 16.4712 12.8274 16.5063C14.1802 17.5113 15.5354 18.5132 16.8829 19.5259C17.0401 19.645 17.1366 19.6552 17.2998 19.5331C18.3369 18.7491 19.3848 17.9783 20.4254 17.2033C20.7828 16.9352 21.1438 16.6672 21.5465 16.3658H12.6487Z"
            fill="black"
            stroke={color}
            strokeWidth="0.170584"
            strokeMiterlimit="10"
          />
          <path
            d="M18.213 7.18862C18.213 5.67954 18.213 4.17046 18.213 2.66138C18.213 1.68386 18.8028 1.08936 19.7773 1.09413C20.0067 1.08682 20.2359 1.11209 20.4582 1.16918C21.0539 1.34789 21.4315 1.88401 21.4464 2.53391C21.4577 3.03727 21.45 3.54003 21.45 4.04338C21.45 6.53853 21.45 9.03387 21.45 11.5294C21.45 11.6539 21.4875 11.7784 21.4857 11.9029C21.4897 12.0034 21.4693 12.1034 21.4262 12.1942C21.0312 12.8834 20.6279 13.5685 20.2259 14.2529C20.0144 14.6103 19.7326 14.6103 19.5206 14.2487C19.1757 13.659 18.8653 13.0448 18.4757 12.4873C18.2416 12.1525 18.2065 11.8225 18.2083 11.4478C18.2178 10.0283 18.213 8.60815 18.213 7.18862ZM20.7524 11.6164V5.1746H18.9058V11.6164H20.7524ZM18.8963 3.21716H20.7644C20.7644 2.98663 20.7644 2.77218 20.7644 2.55773C20.759 2.14552 20.4802 1.82265 20.09 1.77202C19.4729 1.6922 19.0643 1.88103 18.9314 2.30814C18.9104 2.37148 18.8984 2.43745 18.8957 2.50412C18.8903 2.74061 18.8933 2.96936 18.8933 3.22074L18.8963 3.21716ZM18.9052 4.45262H20.7524V3.93199H18.9022L18.9052 4.45262ZM19.8792 13.491L20.5457 12.3467H19.2114C19.4324 12.7339 19.6427 13.0937 19.8762 13.4946L19.8792 13.491Z"
            fill="black"
            stroke={color}
            strokeWidth="0.170584"
            strokeMiterlimit="10"
          />
          <path
            d="M3.77529 18.6491C3.77529 18.4263 3.76933 18.2035 3.77529 17.9807C3.79078 17.4952 4.08922 17.1825 4.56994 17.1688C5.03021 17.1557 5.49068 17.1557 5.95134 17.1688C6.41837 17.1825 6.71919 17.4666 6.74004 17.9372C6.76089 18.4078 6.7597 18.8736 6.74004 19.3407C6.72157 19.8172 6.39692 20.1258 5.92096 20.1371C5.47539 20.1478 5.02981 20.1478 4.58424 20.1371C4.08982 20.1252 3.78721 19.8142 3.77291 19.3186C3.77172 19.0952 3.77529 18.8718 3.77529 18.6491ZM5.26452 17.8538C5.06436 17.8538 4.86421 17.8586 4.66406 17.8538C4.52526 17.8496 4.46272 17.8985 4.4645 18.0456C4.47046 18.4537 4.46927 18.8617 4.4645 19.2692C4.4645 19.402 4.51395 19.4538 4.64798 19.4526C5.05583 19.4475 5.46367 19.4475 5.87152 19.4526C6.01985 19.4526 6.06274 19.3859 6.06095 19.2483C6.05619 18.848 6.055 18.4471 6.06095 18.0468C6.06095 17.8997 6.00138 17.8502 5.86378 17.8544C5.66422 17.8586 5.46407 17.8538 5.26452 17.8538Z"
            fill="black"
            stroke={color}
            strokeWidth="0.170584"
            strokeMiterlimit="10"
          />
          <path
            d="M5.27706 7.34646C5.49925 7.34646 5.72204 7.34229 5.94423 7.34646C6.391 7.35718 6.7085 7.61869 6.73471 8.06128C6.7645 8.565 6.7645 9.07003 6.73471 9.57374C6.7091 10.005 6.3773 10.2975 5.92993 10.3142C5.48257 10.3309 5.02449 10.3321 4.57295 10.3142C4.07198 10.2933 3.78545 9.98417 3.77771 9.48022C3.77116 9.04239 3.76997 8.60455 3.77771 8.1697C3.78784 7.66396 4.10296 7.35718 4.6075 7.35003C4.83148 7.34348 5.05427 7.34646 5.27706 7.34646ZM5.26812 8.02852C5.06857 8.02852 4.86842 8.03269 4.66826 8.02852C4.53245 8.02495 4.46216 8.06724 4.46394 8.21736C4.4699 8.6254 4.46811 9.03285 4.46394 9.4403C4.46394 9.5654 4.4973 9.63271 4.63908 9.63093C5.04653 9.62497 5.45398 9.62616 5.86143 9.63093C6.00499 9.63093 6.0598 9.56659 6.0592 9.4278C6.0592 9.02749 6.05384 8.62719 6.0592 8.22688C6.0592 8.08451 6.01035 8.02495 5.8662 8.02971C5.66843 8.03388 5.46828 8.02852 5.26812 8.02852Z"
            fill="black"
            stroke={color}
            strokeWidth="0.170584"
            strokeMiterlimit="10"
          />
          <path
            d="M5.2282 15.2448C5.00541 15.2448 4.78322 15.2501 4.56043 15.2448C4.11366 15.2305 3.80152 14.9416 3.78603 14.4924C3.76737 14.0107 3.76737 13.5284 3.78603 13.0455C3.80212 12.5939 4.10175 12.3038 4.56043 12.2901C5.02745 12.2758 5.49467 12.2758 5.96209 12.2901C6.43328 12.3032 6.72933 12.5838 6.74899 13.0532C6.76865 13.5226 6.76984 13.9885 6.74899 14.4555C6.72814 14.9225 6.37728 15.24 5.90073 15.2477C5.67794 15.2519 5.45575 15.2477 5.23296 15.2477L5.2282 15.2448ZM5.27526 12.9657C5.06021 12.9657 4.84398 12.9549 4.63072 12.9728C4.57115 12.9776 4.47584 13.0675 4.47405 13.1205C4.46135 13.5506 4.46135 13.9809 4.47405 14.4114C4.47405 14.4644 4.57592 14.5573 4.63251 14.5591C5.04949 14.5716 5.4629 14.5728 5.87809 14.5591C5.91873 14.5481 5.95584 14.5267 5.98588 14.4972C6.01592 14.4677 6.03788 14.431 6.04965 14.3905C6.06514 13.9682 6.06335 13.5447 6.04965 13.1223C6.0385 13.0866 6.01852 13.0543 5.99155 13.0284C5.96457 13.0024 5.93149 12.9837 5.89537 12.974C5.69105 12.9549 5.48256 12.9657 5.27526 12.9657Z"
            fill="black"
            stroke={color}
            strokeWidth="0.170584"
            strokeMiterlimit="10"
          />
          <path
            d="M11.3537 13.1455H8.67964C8.613 13.1506 8.54599 13.1476 8.48008 13.1365C8.40191 13.1232 8.33152 13.0812 8.28271 13.0188C8.23389 12.9563 8.21017 12.8778 8.21619 12.7988C8.21196 12.7194 8.23843 12.6415 8.29012 12.5812C8.34181 12.5208 8.41474 12.4827 8.49378 12.4747C8.57503 12.4653 8.65693 12.4627 8.73861 12.467H14.0635C14.3536 12.467 14.5168 12.595 14.5114 12.8125C14.5061 13.0299 14.3482 13.1437 14.0724 13.1455H11.3537Z"
            fill="black"
            stroke={color}
            strokeWidth="0.170584"
            strokeMiterlimit="10"
          />
          <path
            d="M11.3524 7.5264C12.2436 7.5264 13.1349 7.5264 14.0265 7.5264C14.1066 7.52245 14.1868 7.53007 14.2648 7.54904C14.3396 7.56953 14.405 7.61539 14.4498 7.67877C14.4946 7.74216 14.5159 7.81913 14.5102 7.89652C14.5045 7.97392 14.4721 8.04693 14.4186 8.10307C14.365 8.15921 14.2936 8.19499 14.2165 8.20429C14.1428 8.21266 14.0685 8.21565 13.9943 8.21323H8.71949C8.65272 8.21543 8.58587 8.21344 8.51934 8.20728C8.32872 8.18345 8.2215 8.06907 8.2215 7.88084C8.2215 7.6926 8.32515 7.57704 8.50624 7.53653C8.57228 7.52676 8.63919 7.52416 8.70579 7.52878L11.3524 7.5264Z"
            fill="black"
            stroke={color}
            strokeWidth="0.170584"
            strokeMiterlimit="10"
          />
          <path
            d="M10.0181 15.0191C9.54992 15.0191 9.0817 15.0191 8.61409 15.0191C8.35913 15.0191 8.21021 14.885 8.21438 14.673C8.21855 14.4609 8.35854 14.343 8.60456 14.3424C9.55528 14.34 10.5062 14.34 11.4573 14.3424C11.7152 14.3424 11.8594 14.4716 11.8558 14.6861C11.8523 14.9005 11.7063 15.0191 11.4442 15.0203C10.9688 15.0209 10.4935 15.0197 10.0181 15.0191Z"
            fill="black"
            stroke={color}
            strokeWidth="0.170584"
            strokeMiterlimit="10"
          />
          <path
            d="M10.0539 9.40042C10.5143 9.40042 10.9748 9.40042 11.4359 9.40042C11.7075 9.40042 11.8594 9.53088 11.8529 9.75069C11.8463 9.9705 11.7093 10.0831 11.4412 10.0837C10.5056 10.0861 9.56959 10.0861 8.63316 10.0837C8.35617 10.0837 8.20665 9.95501 8.21141 9.73639C8.21618 9.51777 8.37225 9.40102 8.64746 9.39982C9.11746 9.39923 9.58567 9.40042 10.0539 9.40042Z"
            fill="black"
            stroke={color}
            strokeWidth="0.170584"
            strokeMiterlimit="10"
          />
          <path
            d="M9.30511 17.3946C9.53564 17.3946 9.76557 17.391 9.99611 17.3946C10.2457 17.3993 10.4036 17.5399 10.4 17.7442C10.3964 17.9486 10.2445 18.0802 10.0074 18.0832C9.53961 18.088 9.0716 18.088 8.60338 18.0832C8.36094 18.0832 8.21738 17.948 8.2144 17.7448C8.21142 17.5417 8.35975 17.3999 8.61411 17.3946C8.84404 17.3898 9.07696 17.3946 9.30511 17.3946Z"
            fill="black"
            stroke={color}
            strokeWidth="0.170584"
            strokeMiterlimit="10"
          />
          <path
            d="M8.8744 19.9561C8.76368 19.9621 8.65272 19.9621 8.54201 19.9561C8.3359 19.9359 8.20604 19.7953 8.21497 19.607C8.2251 19.4057 8.34305 19.2895 8.53664 19.2764C8.75779 19.2615 8.97969 19.2615 9.20084 19.2764C9.39265 19.2889 9.51596 19.3991 9.52728 19.6023C9.538 19.7923 9.41171 19.9347 9.2068 19.9597C9.09601 19.9642 8.98507 19.963 8.8744 19.9561Z"
            fill="black"
            stroke={color}
            strokeWidth="0.170584"
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0_965_3900">
            <rect width="22" height="22.0989" fill="white" transform="translate(1 1)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

CheckList.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default CheckList;
