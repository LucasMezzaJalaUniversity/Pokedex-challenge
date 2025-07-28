import { Link } from "react-router";
import { Button } from "../atoms/Button";
import { Image } from "../atoms/Image";

export const NotFound = () => {
  return (
    <section style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "calc(100vh - 3em)" }}>
      <Image src={'notFound.png'} alt={"notFound"} classname={"not-found"}></Image>
      <p style={{color: "#747476", fontSize: "1.25em"}}>Page not found</p>
      <Link to={"/"} style={{ textDecoration: "none", color: "inherit", marginTop: "1em" }}>
        <Button classname={'game-btn'}>Back to home</Button>
      </Link>
    </section>
  );
}