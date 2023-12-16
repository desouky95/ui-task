const RisingArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g opacity="0.9">
      <path
        d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
        fill="#2BA52E"
      />
    </g>
  </svg>
);

const IdleArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g opacity="0.9">
      <path d="M22 12L18 8V11H3V13H18V16L22 12Z" fill="#3333D1" />
    </g>
  </svg>
);

const DownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g opacity="0.9">
      <path
        d="M16 18L18.29 15.71L13.41 10.83L9.41 14.83L2 7.41L3.41 6L9.41 12L13.41 8L19.71 14.29L22 12V18H16Z"
        fill="#FF513A"
      />
    </g>
  </svg>
);

const Pin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g opacity="0.9">
      <path
        d="M8.00016 1.33333C5.42016 1.33333 3.3335 3.42 3.3335 6C3.3335 9.5 8.00016 14.6667 8.00016 14.6667C8.00016 14.6667 12.6668 9.5 12.6668 6C12.6668 3.42 10.5802 1.33333 8.00016 1.33333ZM4.66683 6C4.66683 4.16 6.16016 2.66667 8.00016 2.66667C9.84016 2.66667 11.3335 4.16 11.3335 6C11.3335 7.92 9.4135 10.7933 8.00016 12.5867C6.6135 10.8067 4.66683 7.9 4.66683 6Z"
        fill="#717D8A"
      />
      <path
        d="M8.00016 7.66667C8.92064 7.66667 9.66683 6.92048 9.66683 6C9.66683 5.07953 8.92064 4.33333 8.00016 4.33333C7.07969 4.33333 6.3335 5.07953 6.3335 6C6.3335 6.92048 7.07969 7.66667 8.00016 7.66667Z"
        fill="#A8B0B9"
      />
    </g>
  </svg>
);

const Gallery = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g opacity="0.9">
      <path
        d="M1.3335 4H4.00016V11.3333H1.3335V4ZM4.66683 12.6667H11.3335V2.66667H4.66683V12.6667ZM6.00016 4H10.0002V11.3333H6.00016V4ZM12.0002 4H14.6668V11.3333H12.0002V4Z"
        fill="#717D8A"
      />
    </g>
  </svg>
);

const Business = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g opacity="0.9">
      <path
        d="M8.00016 4.66667V2H1.3335V14H14.6668V4.66667H8.00016ZM4.00016 12.6667H2.66683V11.3333H4.00016V12.6667ZM4.00016 10H2.66683V8.66667H4.00016V10ZM4.00016 7.33333H2.66683V6H4.00016V7.33333ZM4.00016 4.66667H2.66683V3.33333H4.00016V4.66667ZM6.66683 12.6667H5.3335V11.3333H6.66683V12.6667ZM6.66683 10H5.3335V8.66667H6.66683V10ZM6.66683 7.33333H5.3335V6H6.66683V7.33333ZM6.66683 4.66667H5.3335V3.33333H6.66683V4.66667ZM13.3335 12.6667H8.00016V11.3333H9.3335V10H8.00016V8.66667H9.3335V7.33333H8.00016V6H13.3335V12.6667ZM12.0002 7.33333H10.6668V8.66667H12.0002V7.33333ZM12.0002 10H10.6668V11.3333H12.0002V10Z"
        fill="#717D8A"
      />
    </g>
  </svg>
);
const Icons = { IdleArrow, RisingArrow, DownArrow, Pin, Gallery, Business };

export default Icons;
