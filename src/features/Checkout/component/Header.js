import React from "react";
import { motion } from "framer-motion";
import { pathAnimation, titleAnimation } from "animation";
import { useLocation, useRouteMatch } from "react-router";
function Header() {
  const { pathname } = useLocation();
  const path = pathname.split("/")[2];

  if (path === "combo") {
    return (
      <header className="bookTicket__header">
        <div className="logo">
          <svg
            className="cinema-svg"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial="hidden"
              animate="visible"
              variants={pathAnimation}
              d="M494.5 121.22C504.149 121.22 512 113.357 512 103.691V93.67C512 84.01 504.149 76.15 494.5 76.15H407.263V58.815C407.263 51.371 401.207 45.315 393.763 45.315H319.197C310.017 18.162 284.768 0 256 0C227.232 0 201.983 18.161 192.803 45.315H118.237C110.793 45.315 104.737 51.371 104.737 58.815V76.15H17.5C7.851 76.15 0 84.01 0 93.67V103.691C0 113.357 7.851 121.22 17.5 121.22H30V370.202C30 374.345 33.358 377.702 37.5 377.702C41.642 377.702 45 374.345 45 370.202V121.22H104.737V138.553C104.737 145.997 110.793 152.053 118.237 152.053H268.956C273.098 152.053 276.456 148.696 276.456 144.553C276.456 140.41 273.098 137.053 268.956 137.053H119.737V60.315H193.893C199.79 60.315 204.949 56.566 206.728 50.986C213.595 29.462 233.396 15 256 15C278.604 15 298.405 29.462 305.271 50.986C307.051 56.566 312.209 60.315 318.106 60.315H392.262V137.052H303.955C299.813 137.052 296.455 140.409 296.455 144.552C296.455 148.695 299.813 152.052 303.955 152.052H393.762C401.206 152.052 407.262 145.996 407.262 138.552V121.22H467V466.938H336.858V333.468C345.008 333.681 351.87 327.188 351.858 318.968V302.968C351.858 294.973 345.353 288.468 337.358 288.468H174.642C166.647 288.468 160.142 294.973 160.142 302.968V318.968C160.126 327.078 166.965 333.79 175.142 333.468V466.938H45V405.203C45 401.06 41.642 397.703 37.5 397.703C33.358 397.703 30 401.06 30 405.203V466.938H17.5C7.851 466.938 0 474.797 0 484.459V494.48C0 504.141 7.851 512 17.5 512H494.5C504.149 512 512 504.141 512 494.479V484.458C512 474.797 504.149 466.937 494.5 466.937H482V121.22H494.5ZM104.737 106.22H17.5C16.122 106.22 15 105.085 15 103.691V93.67C15 92.28 16.122 91.15 17.5 91.15H104.737V106.22ZM175.142 303.468H336.859V318.468H175.142V303.468ZM321.858 333.468V466.938H263.5V333.468H321.858ZM248.5 333.468V466.938H190.142V333.468H248.5ZM494.5 481.938C495.878 481.938 497 483.069 497 484.459V494.48C497 495.87 495.878 497.001 494.5 497.001H17.5C16.122 497.001 15 495.87 15 494.48V484.459C15 483.069 16.122 481.938 17.5 481.938H494.5ZM407.263 106.22V91.15H494.5C495.878 91.15 497 92.28 497 93.67V103.691C497 105.086 495.878 106.22 494.5 106.22H407.263ZM116.01 204.405C119.188 204.405 122.251 205.34 124.869 207.108C128.301 209.425 132.964 208.524 135.282 205.091C137.601 201.658 136.698 196.996 133.265 194.678C128.158 191.228 122.191 189.405 116.009 189.405C98.995 189.405 85.154 203.246 85.154 220.259C85.154 237.272 98.995 251.114 116.009 251.114C122.857 251.114 129.014 248.853 133.816 244.576C134.757 243.737 135.65 242.816 136.47 241.839C139.131 238.664 138.714 233.934 135.54 231.273C132.365 228.613 127.634 229.029 124.974 232.203C124.62 232.626 124.238 233.021 123.838 233.377C121.798 235.194 119.164 236.115 116.008 236.115C107.265 236.115 100.153 229.003 100.153 220.26C100.155 211.518 107.267 204.405 116.01 204.405ZM253.727 189.832C249.585 189.832 246.227 193.189 246.227 197.332V243.615C246.227 247.758 249.585 251.115 253.727 251.115H273.228C277.37 251.115 280.728 247.758 280.728 243.615C280.728 239.472 277.37 236.115 273.228 236.115H261.227V227.973H271.791C275.933 227.973 279.291 224.616 279.291 220.473C279.291 216.33 275.933 212.973 271.791 212.973H261.227V204.831H273.228C277.37 204.831 280.728 201.474 280.728 197.331C280.728 193.188 277.37 189.831 273.228 189.831H253.727V189.832ZM389.476 246.285L392.005 239.645H409.831L412.329 246.263C413.791 250.137 418.118 252.093 421.994 250.631C425.869 249.169 427.826 244.842 426.363 240.966L408.983 194.912C407.72 191.581 404.54 189.403 400.987 189.404H400.979C397.445 189.409 394.257 191.578 392.999 194.892L375.459 240.944C373.985 244.815 375.927 249.148 379.798 250.623C383.577 252.064 387.99 250.204 389.476 246.285ZM400.958 216.136L404.169 224.646H397.716L400.958 216.136ZM168.496 243.615V196.905C168.496 192.762 165.138 189.405 160.996 189.405C156.854 189.405 153.496 192.762 153.496 196.905V243.615C153.496 247.758 156.854 251.115 160.996 251.115C165.138 251.115 168.496 247.758 168.496 243.615ZM139.299 98.685C139.299 113.408 151.277 125.385 166 125.385C180.723 125.385 192.701 113.407 192.701 98.685C192.701 83.963 180.723 71.983 166 71.983C151.277 71.983 139.299 83.962 139.299 98.685ZM177.701 98.685C177.701 105.136 172.452 110.385 166 110.385C159.548 110.385 154.299 105.136 154.299 98.685C154.299 92.233 159.548 86.984 166 86.984C172.452 86.984 177.701 92.232 177.701 98.685ZM372.701 98.685C372.701 83.962 360.723 71.984 346 71.984C331.277 71.984 319.299 83.963 319.299 98.685C319.299 113.407 331.277 125.385 346 125.385C360.723 125.385 372.701 113.407 372.701 98.685ZM334.299 98.685C334.299 92.233 339.548 86.984 346 86.984C352.452 86.984 357.701 92.233 357.701 98.685C357.701 105.136 352.452 110.385 346 110.385C339.548 110.385 334.299 105.136 334.299 98.685ZM301.896 250.631C305.966 251.363 309.873 248.659 310.609 244.582L313.986 225.867L319.636 245.017C320.711 248.638 324.059 251.116 327.829 251.114H327.872C331.656 251.099 335.006 248.587 336.045 244.941L341.497 225.816L345.098 244.658C345.875 248.726 349.805 251.405 353.872 250.616C357.941 249.839 360.608 245.91 359.831 241.842L351.118 196.254C350.344 192.448 347.095 189.638 343.217 189.419C339.356 189.214 335.796 191.628 334.597 195.321C334.521 195.556 327.794 219.161 327.722 219.421C327.641 219.151 320.663 195.48 320.581 195.237C319.344 191.555 315.769 189.17 311.898 189.426C308.023 189.687 304.804 192.531 304.054 196.431L295.844 241.917C295.112 245.994 297.82 249.895 301.896 250.631ZM188.764 189.833C185.63 190.81 183.496 193.711 183.496 196.993V243.615C183.496 247.758 186.854 251.115 190.996 251.115C195.138 251.115 198.496 247.758 198.496 243.615V221.052L216.35 246.905C218.488 249.995 222.08 251.302 225.502 250.232C228.98 249.146 231.228 245.931 231.227 241.969L230.79 196.833C230.75 192.69 227.408 189.36 223.218 189.405C219.076 189.445 215.751 192.836 215.791 196.977L216.014 220.022L197.167 192.731C195.302 190.03 191.898 188.856 188.764 189.833ZM229.558 123.17C233.451 125.998 238.516 126.364 242.776 124.126L256 117.173L269.224 124.126C273.471 126.359 278.535 126.009 282.442 123.17C286.336 120.341 288.249 115.637 287.435 110.895L284.91 96.169L295.607 85.741C299.053 82.383 300.271 77.453 298.785 72.876C297.298 68.299 293.416 65.024 288.652 64.332L273.868 62.184L267.256 48.787C265.126 44.472 260.814 41.791 256.001 41.791C251.188 41.791 246.876 44.472 244.746 48.787L238.134 62.184L223.348 64.332C218.585 65.024 214.703 68.299 213.216 72.876C211.73 77.453 212.947 82.383 216.393 85.74L227.091 96.169L224.566 110.894C223.751 115.637 225.664 120.341 229.558 123.17ZM241.565 76.843C245.653 76.248 249.186 73.681 251.014 69.977L256 59.874L260.986 69.976C262.814 73.681 266.347 76.248 270.437 76.843L281.585 78.463L273.519 86.326C270.56 89.21 269.21 93.364 269.909 97.435L271.813 108.539L261.84 103.296C260.011 102.335 258.007 101.855 256.001 101.855C253.995 101.855 251.989 102.335 250.16 103.296L240.188 108.539L242.092 97.435C242.791 93.363 241.441 89.208 238.483 86.326L230.416 78.462L241.565 76.843Z"
              fill="#1E1D21"
            />
          </svg>
        </div>
        <div className="title">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={titleAnimation}
          >
            Cinema Booking
          </motion.h1>
        </div>
      </header>
    );
  }
  return (
    <header className="bookTicket__header">
      <div className="logo">
        <svg
          className="cinema-svg"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M494.5 121.22C504.149 121.22 512 113.357 512 103.691V93.67C512 84.01 504.149 76.15 494.5 76.15H407.263V58.815C407.263 51.371 401.207 45.315 393.763 45.315H319.197C310.017 18.162 284.768 0 256 0C227.232 0 201.983 18.161 192.803 45.315H118.237C110.793 45.315 104.737 51.371 104.737 58.815V76.15H17.5C7.851 76.15 0 84.01 0 93.67V103.691C0 113.357 7.851 121.22 17.5 121.22H30V370.202C30 374.345 33.358 377.702 37.5 377.702C41.642 377.702 45 374.345 45 370.202V121.22H104.737V138.553C104.737 145.997 110.793 152.053 118.237 152.053H268.956C273.098 152.053 276.456 148.696 276.456 144.553C276.456 140.41 273.098 137.053 268.956 137.053H119.737V60.315H193.893C199.79 60.315 204.949 56.566 206.728 50.986C213.595 29.462 233.396 15 256 15C278.604 15 298.405 29.462 305.271 50.986C307.051 56.566 312.209 60.315 318.106 60.315H392.262V137.052H303.955C299.813 137.052 296.455 140.409 296.455 144.552C296.455 148.695 299.813 152.052 303.955 152.052H393.762C401.206 152.052 407.262 145.996 407.262 138.552V121.22H467V466.938H336.858V333.468C345.008 333.681 351.87 327.188 351.858 318.968V302.968C351.858 294.973 345.353 288.468 337.358 288.468H174.642C166.647 288.468 160.142 294.973 160.142 302.968V318.968C160.126 327.078 166.965 333.79 175.142 333.468V466.938H45V405.203C45 401.06 41.642 397.703 37.5 397.703C33.358 397.703 30 401.06 30 405.203V466.938H17.5C7.851 466.938 0 474.797 0 484.459V494.48C0 504.141 7.851 512 17.5 512H494.5C504.149 512 512 504.141 512 494.479V484.458C512 474.797 504.149 466.937 494.5 466.937H482V121.22H494.5ZM104.737 106.22H17.5C16.122 106.22 15 105.085 15 103.691V93.67C15 92.28 16.122 91.15 17.5 91.15H104.737V106.22ZM175.142 303.468H336.859V318.468H175.142V303.468ZM321.858 333.468V466.938H263.5V333.468H321.858ZM248.5 333.468V466.938H190.142V333.468H248.5ZM494.5 481.938C495.878 481.938 497 483.069 497 484.459V494.48C497 495.87 495.878 497.001 494.5 497.001H17.5C16.122 497.001 15 495.87 15 494.48V484.459C15 483.069 16.122 481.938 17.5 481.938H494.5ZM407.263 106.22V91.15H494.5C495.878 91.15 497 92.28 497 93.67V103.691C497 105.086 495.878 106.22 494.5 106.22H407.263ZM116.01 204.405C119.188 204.405 122.251 205.34 124.869 207.108C128.301 209.425 132.964 208.524 135.282 205.091C137.601 201.658 136.698 196.996 133.265 194.678C128.158 191.228 122.191 189.405 116.009 189.405C98.995 189.405 85.154 203.246 85.154 220.259C85.154 237.272 98.995 251.114 116.009 251.114C122.857 251.114 129.014 248.853 133.816 244.576C134.757 243.737 135.65 242.816 136.47 241.839C139.131 238.664 138.714 233.934 135.54 231.273C132.365 228.613 127.634 229.029 124.974 232.203C124.62 232.626 124.238 233.021 123.838 233.377C121.798 235.194 119.164 236.115 116.008 236.115C107.265 236.115 100.153 229.003 100.153 220.26C100.155 211.518 107.267 204.405 116.01 204.405ZM253.727 189.832C249.585 189.832 246.227 193.189 246.227 197.332V243.615C246.227 247.758 249.585 251.115 253.727 251.115H273.228C277.37 251.115 280.728 247.758 280.728 243.615C280.728 239.472 277.37 236.115 273.228 236.115H261.227V227.973H271.791C275.933 227.973 279.291 224.616 279.291 220.473C279.291 216.33 275.933 212.973 271.791 212.973H261.227V204.831H273.228C277.37 204.831 280.728 201.474 280.728 197.331C280.728 193.188 277.37 189.831 273.228 189.831H253.727V189.832ZM389.476 246.285L392.005 239.645H409.831L412.329 246.263C413.791 250.137 418.118 252.093 421.994 250.631C425.869 249.169 427.826 244.842 426.363 240.966L408.983 194.912C407.72 191.581 404.54 189.403 400.987 189.404H400.979C397.445 189.409 394.257 191.578 392.999 194.892L375.459 240.944C373.985 244.815 375.927 249.148 379.798 250.623C383.577 252.064 387.99 250.204 389.476 246.285ZM400.958 216.136L404.169 224.646H397.716L400.958 216.136ZM168.496 243.615V196.905C168.496 192.762 165.138 189.405 160.996 189.405C156.854 189.405 153.496 192.762 153.496 196.905V243.615C153.496 247.758 156.854 251.115 160.996 251.115C165.138 251.115 168.496 247.758 168.496 243.615ZM139.299 98.685C139.299 113.408 151.277 125.385 166 125.385C180.723 125.385 192.701 113.407 192.701 98.685C192.701 83.963 180.723 71.983 166 71.983C151.277 71.983 139.299 83.962 139.299 98.685ZM177.701 98.685C177.701 105.136 172.452 110.385 166 110.385C159.548 110.385 154.299 105.136 154.299 98.685C154.299 92.233 159.548 86.984 166 86.984C172.452 86.984 177.701 92.232 177.701 98.685ZM372.701 98.685C372.701 83.962 360.723 71.984 346 71.984C331.277 71.984 319.299 83.963 319.299 98.685C319.299 113.407 331.277 125.385 346 125.385C360.723 125.385 372.701 113.407 372.701 98.685ZM334.299 98.685C334.299 92.233 339.548 86.984 346 86.984C352.452 86.984 357.701 92.233 357.701 98.685C357.701 105.136 352.452 110.385 346 110.385C339.548 110.385 334.299 105.136 334.299 98.685ZM301.896 250.631C305.966 251.363 309.873 248.659 310.609 244.582L313.986 225.867L319.636 245.017C320.711 248.638 324.059 251.116 327.829 251.114H327.872C331.656 251.099 335.006 248.587 336.045 244.941L341.497 225.816L345.098 244.658C345.875 248.726 349.805 251.405 353.872 250.616C357.941 249.839 360.608 245.91 359.831 241.842L351.118 196.254C350.344 192.448 347.095 189.638 343.217 189.419C339.356 189.214 335.796 191.628 334.597 195.321C334.521 195.556 327.794 219.161 327.722 219.421C327.641 219.151 320.663 195.48 320.581 195.237C319.344 191.555 315.769 189.17 311.898 189.426C308.023 189.687 304.804 192.531 304.054 196.431L295.844 241.917C295.112 245.994 297.82 249.895 301.896 250.631ZM188.764 189.833C185.63 190.81 183.496 193.711 183.496 196.993V243.615C183.496 247.758 186.854 251.115 190.996 251.115C195.138 251.115 198.496 247.758 198.496 243.615V221.052L216.35 246.905C218.488 249.995 222.08 251.302 225.502 250.232C228.98 249.146 231.228 245.931 231.227 241.969L230.79 196.833C230.75 192.69 227.408 189.36 223.218 189.405C219.076 189.445 215.751 192.836 215.791 196.977L216.014 220.022L197.167 192.731C195.302 190.03 191.898 188.856 188.764 189.833ZM229.558 123.17C233.451 125.998 238.516 126.364 242.776 124.126L256 117.173L269.224 124.126C273.471 126.359 278.535 126.009 282.442 123.17C286.336 120.341 288.249 115.637 287.435 110.895L284.91 96.169L295.607 85.741C299.053 82.383 300.271 77.453 298.785 72.876C297.298 68.299 293.416 65.024 288.652 64.332L273.868 62.184L267.256 48.787C265.126 44.472 260.814 41.791 256.001 41.791C251.188 41.791 246.876 44.472 244.746 48.787L238.134 62.184L223.348 64.332C218.585 65.024 214.703 68.299 213.216 72.876C211.73 77.453 212.947 82.383 216.393 85.74L227.091 96.169L224.566 110.894C223.751 115.637 225.664 120.341 229.558 123.17ZM241.565 76.843C245.653 76.248 249.186 73.681 251.014 69.977L256 59.874L260.986 69.976C262.814 73.681 266.347 76.248 270.437 76.843L281.585 78.463L273.519 86.326C270.56 89.21 269.21 93.364 269.909 97.435L271.813 108.539L261.84 103.296C260.011 102.335 258.007 101.855 256.001 101.855C253.995 101.855 251.989 102.335 250.16 103.296L240.188 108.539L242.092 97.435C242.791 93.363 241.441 89.208 238.483 86.326L230.416 78.462L241.565 76.843Z"
            fill="#1E1D21"
          />
        </svg>
      </div>
      <div className="title">
        <h1>Cinema Booking</h1>
      </div>
    </header>
  );
}

export default React.memo(Header);
{
  /* <div>
        {Object.keys(list).map((key, index) => (
          <h4 style={{ color: path === key ? "red" : "black" }} key={key}>
            <span>0{index + 1}</span> {list[key]}
          </h4>
        ))}
      </div>
      <div>
        <p>{hoTen}</p>
      </div> */
}
