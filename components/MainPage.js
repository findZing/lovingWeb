import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FiSmile } from "react-icons/fi";
import { CiPaperplane } from "react-icons/ci";
// import music from '../../public/assets/audios/music.mp3'
import heart from '../public/assets/images/heart1.gif'

import img1 from "../public/assets/images/1.jpg";
import img2 from "../public/assets/images/2.jpg";
import img3 from "../public/assets/images/3.jpg";
import img4 from "../public/assets/images/4.jpg";
import img5 from "../public/assets/images/5.jpg";
import img6 from "../public/assets/images/6.jpg";
import img7 from "../public/assets/images/7.jpg";
import img8 from "../public/assets/images/user.jpg";
// import useSound from "use-sound";

const DATA_COMMENT = [
  "Xin chào cô gái xinh đẹp :))",
  "Có vẻ em giận anh vì không rep em nhỉ 😭",
  "Nhưng mà oan cho anh quá vì em bảo anh phải nhắn trước !!!",
  "Mà anh chưa làm xong món quà bất ngờ này nên chưa dám nhắn 😁",
  "Thật lòng sorry em",
  "Vậy nên liệu em có thể cho anh được chuộc lỗi được không ?",
  "Anh mời em đi coffee được chứ 😘",
//   'Ỏ Vậy hẹn em khi nào thì ok nhỉ ?'
];
const ImageCustom = ({ image, top, right, width, height, title = "Cute" }) => {
  return (
    top &&
    right &&
    width &&
    height && (
      <div className={`absolute`} style={{ top: top, right: right }}>
        <div className={`relative`} style={{ width, height }}>
          <Image
            src={image}
            className="w-full h-full object-cover rounded-[20px]"
            alt="image"
          />
          <AiFillHeart
            size={30}
            color="red"
            className="absolute top-[-15px] right-[45%]"
          />
          <div className="absolute right-0 left-0 bottom-[10px] flex items-center justify-center">
            <p className="text-[18px] text-white font-bold">{title}</p>
          </div>
        </div>
      </div>
    )
  );
};

const Comment = ({ text }) => {
  return (
    <div className="w-full flex flex-row justify-start items-end gap-[10px]">
      <Image
      alt="img"
        src={img8}
        className="w-[24px] h-[24px] rounded-full object-cover"
      />
      <div className="max-w-[280px] px-[16px] py-[10px] border border-gray rounded-[21px]">
        <p className="text-[14px]">{text}</p>
      </div>
    </div>
  );
};
const MainPage = () => {
  // const iconProp = {}
  const [comment, setComment] = useState([DATA_COMMENT[0]]);
  const [index, setIndex] = useState(0)
  const [positionBtn, setPositionBtn] = useState({x:0 ,y:0})
  const [coords, setCoords] = useState({x: 0, y: 0});
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);

  const refBtn = useRef(null)
  const refBtnOk = useRef(null)

  const handleClickOk = () => {
    setIndex(state => state + 1)
  }

  const handleClick = () => {
    if(index + 1 != 7)
    {
        setIndex(state => state + 1)
    setComment(state => [...state, DATA_COMMENT[index + 1]])
    }
  };

  useEffect(() => {
    const handleWindowMouseMove = event => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
  }, []);

  useEffect(() => {
    if(refBtn.current){
    
    const position = refBtn.current.getBoundingClientRect()
    
    if(position.x + position.width + 20 > coords.x && position.x - 20 < coords.x && position.y - 20 < coords.y && position.y + position.height + 20 > coords.y)
    {
        // console.log(windowHeight, windowWidth)
        // console.log('In')
        // console.log('X: ', Math.floor(Math.random() * windowWidth.current + 1))
        // console.log('Y: ', Math.floor(Math.random() * windowHeight.current + 1))
        setPositionBtn({x: Math.floor(Math.random() * (windowWidth.current - 200)) + position.width, y: Math.floor(Math.random() *( windowHeight.current - 200)) + position.height})
        
    }
   
    }
}, [coords])

useEffect(() => {
    if(refBtnOk.current)
    {
    setPositionBtn({x: refBtnOk.current.getBoundingClientRect().x + refBtnOk.current.getBoundingClientRect().width + 20, y: refBtnOk.current.getBoundingClientRect().y})
    // console.log('Run')
    }
}, [refBtnOk.current, index])

  return (
    <div className="w-screen h-screen bg-[#fafafa] relative flex items-center justify-center">
      <ImageCustom
        image={img1}
        top={"10%"}
        right={"10%"}
        width={150}
        height={150}
      />
      <ImageCustom
        image={img2}
        top={"5%"}
        right={"80%"}
        width={200}
        height={200}
      />
      <ImageCustom
        image={img3}
        top={"5%"}
        right={"45%"}
        width={250}
        height={250}
      />
      <ImageCustom
        image={img4}
        top={"40%"}
        right={"85%"}
        width={200}
        height={200}
      />
      <ImageCustom
        image={img5}
        top={"45%"}
        right={"5%"}
        width={150}
        height={150}
      />
      <ImageCustom
        image={img6}
        top={"70%"}
        right={"10%"}
        width={150}
        height={150}
      />
      <ImageCustom
        image={img7}
        top={"70%"}
        right={"80%"}
        width={150}
        height={150}
      />
      {index == 7 ? (<div className="w-screen h-screen relative flex flex-row items-end justify-center pb-[20px]">
    <div className="w-[350px] h-[350px] relative">
    <div className="absolute bottom-0 left-[30%] z-90">
            <Image 
                src={heart}
                alt="img"
                className="w-[350px] h-[350px] object-cover"
            />
        </div>
    </div>
  </div>)  : 
      (<div className="relative w-[600px] h-[650px] z-20 border-[2px] border-gray rounded-[10px] bg-white shadow-2xl flex flex-col">
        {/* {index + 1 == 8 && <div className="absolute bottom-0 left-[40%] z-90">
            <Image 
                src={heart}
                className="w-[250px] h-[250px] object-cover"
            />
        </div>} */}
        <div className="w-full h-[60px] px-[25px] flex flex-row items-center justify-between border-b-[2px] border-gray">
          <div className="flex flex-row items-center gap-[10px]">
            <div className="w-[24px] h-[24px] relative">
              <Image
              alt="img"
                src={img8}
                className="w-[24px] h-[24px] rounded-full object-cover"
              />
              <div className="absolute w-[12px] h-[12px] bg-[#78DE45] right-[-2px] bottom-[-2px] rounded-full" />
            </div>
            <div className="flex flex-col items-start justify-center gap-[2px]">
              <p className="text-[16px] font-[600]">Happiness</p>
              <p className="text-[12px] text-[#737373]">
               Đang hoạt động
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-[10px] ">
            <HiOutlinePhone size={25} />
            <HiOutlineVideoCamera size={25} />
            <HiOutlineInformationCircle size={25} />
          </div>
        </div>

        <div className="w-full flex-1 px-[10px] py-[10px] flex flex-col items-start gap-[15px] overflow-y-auto scroll-bar">
          {/* <Comment text="Hello" /> */}
          {comment.map((item, index) => (
            <Comment key={index} text={item} />
          ))}
        </div>

        <div className="h-[84px] w-full px-[20px] flex items-center justify-center">
          {index + 1 !== 7 ? <div className="w-full h-[44px] border border-gray rounded-[22px] flex flex-row items-center pl-[10px] pr-[10px] gap-[10px]">
            <FiSmile size={25} />
            <input
              placeholder="Nhập vào đây"
              className="focus:outline-none text-[14px] flex-1"
            />

            <button
              onClick={handleClick}
              className="flex flex-row h-[30px] items-center gap-[10px] border border-black rounded-[15px] px-[5px]"
            >
              <p className="text-[14px] font-[500]">Tiếp</p>
              <CiPaperplane size={20} />
            </button>
          </div>
            :
            (
                <div className="w-full h-[44px] rounded-[22px] flex flex-row items-center justify-center pl-[10px] pr-[10px] gap-[10px]">
                    <button ref={refBtnOk} onClick={handleClickOk} className="px-[10px] py-[5px] border border-black rounded-[10px]">
                        <p className="">Oki ❤️</p>
                    </button>

                    <button ref={refBtn} className=" fixed bg-white z-100 px-[10px] py-[5px] border border-black rounded-[10px]" style={{top: positionBtn.y, left: positionBtn.x}}>
                        <p className="">Mơ à 😰</p>
                    </button>
                </div>
            )  
        }
        </div>
      </div>)}
    </div>
  );
};

export default MainPage;
