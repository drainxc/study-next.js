import axios from "axios";
import { BASE_URL } from "../../src/lib/export/data";

export default function About({ item }: any) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.image_link} alt="상품이미지" />
      <div>{item.name}</div>
      <div style={{ color: "blue", cursor: "pointer" }}>$ {item.price}</div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const apiURL = BASE_URL + `api/v1/products/${id}.json`;
  const res = await axios.get(apiURL);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
