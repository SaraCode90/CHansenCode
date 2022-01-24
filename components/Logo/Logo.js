export const Logo = ({ pc, sc, height, width }) => {
  return (
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1500 900"
    >
      <g style={{ fill: pc ? pc : 'teal' }}>
        <g id="ANSEN">
          <path d="M883.9 794.8h-68.7l-13.1 34.4h-16l55-142.7h17.1L913 829.2h-16zm-4.6-12l-29.7-78.1-29.8 78.1zM1068.2 829.2h-15.1l-83.6-121.6v121.6h-15.1V684.6h15.1l83.6 121.4V684.6h15.1zM1139.3 825.7a43.2 43.2 0 01-17.8-13.9 35.4 35.4 0 01-6.9-19.9h15.9c.8 7.1 4 13.2 9.7 18.6s14.2 7.9 25.3 7.9 18.3-2.5 24.3-7.5a24.2 24.2 0 008.9-19.2c0-6.2-1.6-11.2-4.9-15a30.4 30.4 0 00-12.3-8.4 189.6 189.6 0 00-20.3-6.1 175.9 175.9 0 01-24-7.7 37.7 37.7 0 01-15.1-11.6c-4.2-5.2-6.2-12.3-6.2-21.3a34.4 34.4 0 016-19.9 39.4 39.4 0 0117.1-13.8c7.3-3.3 15.7-4.9 25.2-4.9 14 0 25.2 3.2 33.8 9.8a36.7 36.7 0 0114.8 25.3h-16.4c-1-5.9-4.4-11.2-10.2-15.8s-13.5-6.9-23.3-6.9-16.6 2.3-22.7 6.9-9 10.9-9 18.9c0 6.1 1.6 11 4.9 14.7a32.3 32.3 0 0012.5 8.5 187.6 187.6 0 0020.1 6.2 197.8 197.8 0 0123.8 7.7 39.7 39.7 0 0115.3 11.7c4.2 5.3 6.3 12.3 6.3 21.1a35.8 35.8 0 01-5.7 19.3c-3.7 6-9.2 10.9-16.6 14.6s-16.1 5.6-26.3 5.6-18.7-1.6-26.2-4.9zM1275.6 696.4v54h57.1v12h-57.1v54.8h63.6v12h-78.7V684.4h78.7v12zM1500 829.2h-15.1l-83.5-121.6v121.6h-15.1V684.6h15.1l83.5 121.4V684.6h15.1z" />
        </g>

        <g id="CH">
          <path d="M305 610C136.6 610 0 473.4 0 305S136.6 0 305 0v20C147.6 20 20 147.6 20 305s127.6 285 285 285h1195v20z" />

          <path d="M720 0H740V900H720z" />
          <path d="M590 0H610V900H590z" />
        </g>
      </g>

      <g style={{ fill: sc ? sc : 'coral' }}>
        <circle id="DOT" cx="450" cy="600" r="50" />
      </g>
    </svg>
  );
};
