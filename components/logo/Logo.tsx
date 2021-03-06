import Link from "next/link";
import Padlock from "./Padlock";

export default function LogoWrapper({
  scale,
  isLink,
}: {
  scale: string;
  isLink: boolean;
}) {
  if (isLink) {
    return (
      <Link href="/">
        <a>
          <Logo scale={scale} isLink={isLink} />
        </a>
      </Link>
    );
  } else {
    return <Logo scale={scale} isLink={isLink} />;
  }
}

function Logo({ scale, isLink }: { scale: string; isLink: boolean }) {
  const scaleCss = `scale(${scale},${scale})`;
  return (
    <div
      // className="prose dark:prose-dark font-sans text-green-400 relative ml-4 mt-3"
      className="font-sans text-gray-700 relative ml-4 mt-3"
      style={{
        msTransform: scaleCss,
        WebkitTransform: scaleCss,
        transform: scaleCss,
        cursor: isLink ? "pointer" : "auto",
      }}
    >
      {/*<div*/}
      {/*  style={{*/}
      {/*    position: "absolute",*/}
      {/*    left: 41,*/}
      {/*    top: 0,*/}
      {/*    zIndex: 1,*/}
      {/*    maxHeight: 37,*/}
      {/*    overflow: "hidden",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  /!*<Padlock width={45} height={45} />*!/*/}
      {/*</div>*/}
      <div className="relative">
        <Link href="/">
            <img  src="http://acmelogos.com/images/logo-1.svg" alt="ACME" width="120" />

            {/*<h3  style={{ margin: 0 }}>Company</h3>*/}
        </Link>
        {/* <Link href="/">
          <h3
            style={{
              marginTop: -10,
              marginLeft: 12,
              zIndex: 2,
              position: "relative",
            }}
          >
            ABC
          </h3>
        </Link> */}
      </div>
    </div>
  );
}
