const ImgLink = (props: { src: string; alt: string }) => {
  return (
    <div className="py-2 align-middle w-16 hover:bg-shady bg-white cursor-pointer rounded-md flex justify-center items-center  ">
      <img src={props.src} alt={props.alt} className=" w-5" />
    </div>
  );
};
export default ImgLink;
