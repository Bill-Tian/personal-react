interface defaultProps {
  path: string;
}

function BgPhoto({ path }: defaultProps) {
  return (
    <div className={"w-full h-[400px]"}>
      <img className={"w-full h-full object-cover"} src={path}></img>
    </div>
  );
}

export default BgPhoto;
