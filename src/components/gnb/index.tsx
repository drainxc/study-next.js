import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  const router = useRouter();
  console.log(router);
  let active = "";
  if (router.pathname === "/") {
    active = "home";
  } else if (router.pathname === "/view/[id]") {
    active = "view";
  } else if (router.pathname === "/view/login") {
    active = "login";
  }

  function goLink(e: any, data: any) {
    const { name }: any = data;
    console.log(typeof data);
    if (name === "home") {
      router.push("/");
    }
  }

  return (
    <>
      <Menu inverted>
        <Menu.Item name="home" active={active === "home"} onClick={goLink} />
        <Menu.Item name="view" active={active === "view"} onClick={goLink} />
        <Menu.Item name="login" active={active === "login"} onClick={goLink} />
      </Menu>
    </>
  );
}
