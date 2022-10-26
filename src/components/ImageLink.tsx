const ImgLink = (props: { src: string; alt: string }) => {
  return (
    <div className="p-4 align-middle h-16 hover:bg-shady bg-white cursor-pointer rounded-md flex justify-center items-center  ">
      <img src={props.src} alt={props.alt} className=" w-10" />
    </div>
  );
};
export default ImgLink;
