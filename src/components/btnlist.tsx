import { useRecoilState, useSetRecoilState } from "recoil";
import { ArrowAtom, BuildingAtom,  ClickMeAtom,  CrossAtom,  ResetAtom, ZoomInAtom, ZoomOutAtom } from "../store";

export default function BtnList() {
  const setBuildingBtn = useSetRecoilState(BuildingAtom);
  const [arrow,setArrowBtn] = useRecoilState(ArrowAtom);
  const setZoominBtn = useSetRecoilState(ZoomInAtom);
  const setZoomoutBtn = useSetRecoilState(ZoomOutAtom); 
  const setResetbtn = useSetRecoilState(ResetAtom);
    const setcrossBtn = useSetRecoilState(CrossAtom)
  const setClickMeBtn = useSetRecoilState(ClickMeAtom);
  
  return (<>
    <div className="btn_list_div">
                  <button id="building" onClick={() => setBuildingBtn(true)}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.375 24.0625H23.1875V3.9375H23.625C23.9731 3.9375 24.3069 3.79922 24.5531 3.55308C24.7992 3.30694 24.9375 2.9731 24.9375 2.625C24.9375 2.2769 24.7992 1.94306 24.5531 1.69692C24.3069 1.45078 23.9731 1.3125 23.625 1.3125H4.375C4.0269 1.3125 3.69306 1.45078 3.44692 1.69692C3.20078 1.94306 3.0625 2.2769 3.0625 2.625C3.0625 2.9731 3.20078 3.30694 3.44692 3.55308C3.69306 3.79922 4.0269 3.9375 4.375 3.9375H4.8125V24.0625H2.625C2.2769 24.0625 1.94306 24.2008 1.69692 24.4469C1.45078 24.6931 1.3125 25.0269 1.3125 25.375C1.3125 25.7231 1.45078 26.0569 1.69692 26.3031C1.94306 26.5492 2.2769 26.6875 2.625 26.6875H25.375C25.7231 26.6875 26.0569 26.5492 26.3031 26.3031C26.5492 26.0569 26.6875 25.7231 26.6875 25.375C26.6875 25.0269 26.5492 24.6931 26.3031 24.4469C26.0569 24.2008 25.7231 24.0625 25.375 24.0625ZM7.4375 3.9375H20.5625V24.0625H17.9375V20.125C17.9375 19.7769 17.7992 19.4431 17.5531 19.1969C17.3069 18.9508 16.9731 18.8125 16.625 18.8125H11.375C11.0269 18.8125 10.6931 18.9508 10.4469 19.1969C10.2008 19.4431 10.0625 19.7769 10.0625 20.125V24.0625H7.4375V3.9375ZM15.3125 24.0625H12.6875V21.4375H15.3125V24.0625ZM9.1875 7C9.1875 6.6519 9.32578 6.31806 9.57192 6.07192C9.81806 5.82578 10.1519 5.6875 10.5 5.6875H11.8125C12.1606 5.6875 12.4944 5.82578 12.7406 6.07192C12.9867 6.31806 13.125 6.6519 13.125 7C13.125 7.3481 12.9867 7.68194 12.7406 7.92808C12.4944 8.17422 12.1606 8.3125 11.8125 8.3125H10.5C10.1519 8.3125 9.81806 8.17422 9.57192 7.92808C9.32578 7.68194 9.1875 7.3481 9.1875 7ZM14.875 7C14.875 6.6519 15.0133 6.31806 15.2594 6.07192C15.5056 5.82578 15.8394 5.6875 16.1875 5.6875H17.5C17.8481 5.6875 18.1819 5.82578 18.4281 6.07192C18.6742 6.31806 18.8125 6.6519 18.8125 7C18.8125 7.3481 18.6742 7.68194 18.4281 7.92808C18.1819 8.17422 17.8481 8.3125 17.5 8.3125H16.1875C15.8394 8.3125 15.5056 8.17422 15.2594 7.92808C15.0133 7.68194 14.875 7.3481 14.875 7ZM9.1875 11.375C9.1875 11.0269 9.32578 10.6931 9.57192 10.4469C9.81806 10.2008 10.1519 10.0625 10.5 10.0625H11.8125C12.1606 10.0625 12.4944 10.2008 12.7406 10.4469C12.9867 10.6931 13.125 11.0269 13.125 11.375C13.125 11.7231 12.9867 12.0569 12.7406 12.3031C12.4944 12.5492 12.1606 12.6875 11.8125 12.6875H10.5C10.1519 12.6875 9.81806 12.5492 9.57192 12.3031C9.32578 12.0569 9.1875 11.7231 9.1875 11.375ZM14.875 11.375C14.875 11.0269 15.0133 10.6931 15.2594 10.4469C15.5056 10.2008 15.8394 10.0625 16.1875 10.0625H17.5C17.8481 10.0625 18.1819 10.2008 18.4281 10.4469C18.6742 10.6931 18.8125 11.0269 18.8125 11.375C18.8125 11.7231 18.6742 12.0569 18.4281 12.3031C18.1819 12.5492 17.8481 12.6875 17.5 12.6875H16.1875C15.8394 12.6875 15.5056 12.5492 15.2594 12.3031C15.0133 12.0569 14.875 11.7231 14.875 11.375ZM9.1875 15.75C9.1875 15.4019 9.32578 15.0681 9.57192 14.8219C9.81806 14.5758 10.1519 14.4375 10.5 14.4375H11.8125C12.1606 14.4375 12.4944 14.5758 12.7406 14.8219C12.9867 15.0681 13.125 15.4019 13.125 15.75C13.125 16.0981 12.9867 16.4319 12.7406 16.6781C12.4944 16.9242 12.1606 17.0625 11.8125 17.0625H10.5C10.1519 17.0625 9.81806 16.9242 9.57192 16.6781C9.32578 16.4319 9.1875 16.0981 9.1875 15.75ZM14.875 15.75C14.875 15.4019 15.0133 15.0681 15.2594 14.8219C15.5056 14.5758 15.8394 14.4375 16.1875 14.4375H17.5C17.8481 14.4375 18.1819 14.5758 18.4281 14.8219C18.6742 15.0681 18.8125 15.4019 18.8125 15.75C18.8125 16.0981 18.6742 16.4319 18.4281 16.6781C18.1819 16.9242 17.8481 17.0625 17.5 17.0625H16.1875C15.8394 17.0625 15.5056 16.9242 15.2594 16.6781C15.0133 16.4319 14.875 16.0981 14.875 15.75Z"
            fill="black"
          />
        </svg>
      </button>
      <button id="zoomout" onClick={()=>setZoomoutBtn(true)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_10325)">
            <path
              d="M6.5625 13.625C6.5625 13.2769 6.70078 12.9431 6.94692 12.6969C7.19306 12.4508 7.5269 12.3125 7.875 12.3125H11.8125V8.375C11.8125 8.0269 11.9508 7.69306 12.1969 7.44692C12.4431 7.20078 12.7769 7.0625 13.125 7.0625C13.4731 7.0625 13.8069 7.20078 14.0531 7.44692C14.2992 7.69306 14.4375 8.0269 14.4375 8.375V12.3125H18.375C18.7231 12.3125 19.0569 12.4508 19.3031 12.6969C19.5492 12.9431 19.6875 13.2769 19.6875 13.625C19.6875 13.9731 19.5492 14.3069 19.3031 14.5531C19.0569 14.7992 18.7231 14.9375 18.375 14.9375H14.4375V18.875C14.4375 19.2231 14.2992 19.5569 14.0531 19.8031C13.8069 20.0492 13.4731 20.1875 13.125 20.1875C12.7769 20.1875 12.4431 20.0492 12.1969 19.8031C11.9508 19.5569 11.8125 19.2231 11.8125 18.875V14.9375H7.875C7.5269 14.9375 7.19306 14.7992 6.94692 14.5531C6.70078 14.3069 6.5625 13.9731 6.5625 13.625Z"
              fill="black"
            />
            <path
              d="M13.1249 0.5C15.6091 0.49985 18.0423 1.20471 20.1418 2.53267C22.2413 3.86062 23.9208 5.75713 24.9851 8.00179C26.0494 10.2464 26.4548 12.7471 26.1543 15.213C25.8537 17.679 24.8595 20.009 23.2871 21.9322L27.6149 26.26C27.8609 26.506 27.9991 26.8396 27.9991 27.1875C27.9991 27.5354 27.8609 27.869 27.6149 28.115C27.3689 28.361 27.0353 28.4992 26.6874 28.4992C26.3395 28.4992 26.0059 28.361 25.7599 28.115L21.4321 23.7873C19.804 25.118 17.88 26.0381 15.822 26.4701C13.7641 26.902 11.6325 26.8332 9.60668 26.2694C7.58089 25.7056 5.72021 24.6633 4.18133 23.2303C2.64244 21.7972 1.4704 20.0154 0.763877 18.0349C0.0573571 16.0543 -0.162954 13.933 0.121495 11.8496C0.405943 9.76609 1.18682 7.78147 2.39838 6.06279C3.60995 4.34412 5.21672 2.9417 7.08342 1.97362C8.95012 1.00555 11.0221 0.500155 13.1249 0.5ZM2.62489 13.625C2.62489 16.4098 3.73113 19.0805 5.70027 21.0496C7.6694 23.0188 10.3401 24.125 13.1249 24.125C15.9097 24.125 18.5804 23.0188 20.5495 21.0496C22.5186 19.0805 23.6249 16.4098 23.6249 13.625C23.6249 10.8402 22.5186 8.16951 20.5495 6.20038C18.5804 4.23125 15.9097 3.125 13.1249 3.125C10.3401 3.125 7.6694 4.23125 5.70027 6.20038C3.73113 8.16951 2.62489 10.8402 2.62489 13.625Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_10325">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button id="zoomin" onClick={()=>setZoominBtn(true)}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="48"
            height="48"
            rx="10"
            transform="matrix(1 0 0 -1 0 48.5)"
          />
          <g clipPath="url(#clip0_1_10328)">
            <path
              d="M16.5625 23.625C16.5625 23.2769 16.7008 22.9431 16.9469 22.6969C17.1931 22.4508 17.5269 22.3125 17.875 22.3125H21.8125H24.4375H28.375C28.7231 22.3125 29.0569 22.4508 29.3031 22.6969C29.5492 22.9431 29.6875 23.2769 29.6875 23.625C29.6875 23.9731 29.5492 24.3069 29.3031 24.5531C29.0569 24.7992 28.7231 24.9375 28.375 24.9375H24.4375H21.8125H17.875C17.5269 24.9375 17.1931 24.7992 16.9469 24.5531C16.7008 24.3069 16.5625 23.9731 16.5625 23.625Z"
              fill="black"
            />
            <path
              d="M23.1248 10.5C25.609 10.4999 28.0422 11.2047 30.1417 12.5327C32.2411 13.8606 33.9206 15.7571 34.9849 18.0018C36.0493 20.2464 36.4547 22.7471 36.1541 25.213C35.8536 27.679 34.8594 30.009 33.287 31.9322L37.6148 36.26C37.8608 36.506 37.999 36.8396 37.999 37.1875C37.999 37.5354 37.8608 37.869 37.6148 38.115C37.3688 38.361 37.0351 38.4992 36.6873 38.4992C36.3394 38.4992 36.0058 38.361 35.7598 38.115L31.432 33.7873C29.8039 35.118 27.8799 36.0381 25.8219 36.4701C23.764 36.902 21.6324 36.8332 19.6066 36.2694C17.5808 35.7056 15.7201 34.6633 14.1812 33.2303C12.6423 31.7972 11.4703 30.0154 10.7638 28.0349C10.0572 26.0543 9.83692 23.933 10.1214 21.8496C10.4058 19.7661 11.1867 17.7815 12.3983 16.0628C13.6098 14.3441 15.2166 12.9417 17.0833 11.9736C18.95 11.0055 21.022 10.5002 23.1248 10.5ZM12.6248 23.625C12.6248 26.4098 13.731 29.0805 15.7001 31.0496C17.6693 33.0188 20.34 34.125 23.1248 34.125C25.9095 34.125 28.5803 33.0188 30.5494 31.0496C32.5185 29.0805 33.6248 26.4098 33.6248 23.625C33.6248 20.8402 32.5185 18.1695 30.5494 16.2004C28.5803 14.2312 25.9095 13.125 23.1248 13.125C20.34 13.125 17.6693 14.2312 15.7001 16.2004C13.731 18.1695 12.6248 20.8402 12.6248 23.625Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_10328">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(10 10.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button id="arrow" onClick={() => (!arrow) ? setArrowBtn(true) : setArrowBtn(false) } className={((arrow)?"active":"")}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.718 20.9999L12.7958 16.0776L11.2921 17.58C9.75467 19.12 8.98471 19.8887 8.15725 19.7074C7.32979 19.5249 6.95356 18.5037 6.2011 16.4626L3.69248 9.65033C2.1913 5.57674 1.43884 3.53932 2.48879 2.48936C3.53873 1.4394 5.57613 2.18937 9.65093 3.69181L16.4631 6.20046C18.5042 6.95293 19.5254 7.32917 19.7079 8.15664C19.8892 8.9841 19.1205 9.75282 17.5805 11.2915L16.0781 12.7952L21.0004 17.7175C21.5103 18.2275 21.7653 18.4825 21.8828 18.7675C22.0391 19.1462 22.0391 19.5712 21.8828 19.9512C21.7653 20.2349 21.5103 20.4899 21.0004 20.9999C20.4904 21.5099 20.2354 21.7648 19.9504 21.8823C19.5714 22.0392 19.1457 22.0392 18.7667 21.8823C18.483 21.7648 18.2292 21.5099 17.718 20.9999Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button id="reset" onClick={()=>setResetbtn(true)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.87351 8.66576C5.6418 5.61391 8.45895 3.30869 11.8004 2.17934C15.1418 1.04999 18.7798 1.17348 22.037 2.52681C25.2942 3.88013 27.9485 6.37107 29.5058 9.5358C31.0631 12.7005 31.4172 16.3234 30.5022 19.7297C29.5871 23.1361 27.4653 26.0938 24.5318 28.0522C21.5983 30.0106 18.0531 30.8362 14.5562 30.3752C11.0593 29.9142 7.84912 28.1981 5.52337 25.5464C3.19762 22.8947 1.91482 19.4881 1.91382 15.961"
          />
          <path
            d="M3.87351 8.66576C5.6418 5.61391 8.45895 3.30869 11.8004 2.17934C15.1418 1.04999 18.7798 1.17348 22.037 2.52681C25.2942 3.88013 27.9485 6.37107 29.5058 9.5358C31.0631 12.7005 31.4172 16.3234 30.5022 19.7297C29.5871 23.1361 27.4653 26.0938 24.5318 28.0522C21.5983 30.0106 18.0531 30.8362 14.5562 30.3752C11.0593 29.9142 7.84912 28.1981 5.52337 25.5464C3.19762 22.8947 1.91482 19.4881 1.91382 15.961"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0035 8.68941H3.73193V1.41785"
          />
          <path
            d="M11.0035 8.68941H3.73193V1.41785"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
        <button id="cross"  onClick={()=>setcrossBtn(true)}>X</button>
      <button id="clickme" onClick={()=>setClickMeBtn(true)}>Click Me</button>
  </>
  );
}
