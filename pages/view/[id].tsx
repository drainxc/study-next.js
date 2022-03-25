import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Dimmer, Loader, Item } from "semantic-ui-react";
import { BASE_URL } from "../../src/lib/export/data";

export default function About() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState<boolean>(true);
  const [items, SetItems] = useState([
    {
      childKey: 0,
      image: "",
      header: "",
      description: "",
      meta: "",
      extra: "",
    },
  ]);

  axios
    .get(BASE_URL + `api/v1/products/${id}.json`)
    .then((res) => {
      console.log(res);
      setLoading(false);

      SetItems([
        {
          childKey: 0,
          image: res.data.image_link,
          header: res.data.name,
          description: res.data.description,
          meta: res.data.brand,
          extra: "$" + res.data.price,
        },
      ]);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <Item.Group items={items} />
      )}
    </>
  );
}
