import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Dimmer, Loader, Item, Button, Icon } from "semantic-ui-react";
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
      link: "",
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
          link: res.data.product_link,
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
        <>
          <Item.Group items={items} />
          <Button animated="vertical">
            <Button.Content hidden href={items[0].link}>
              Shop
            </Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
          <Button animated="fade">
            <Button.Content visible>buy the product</Button.Content>
            <Button.Content hidden>{items[0].extra}</Button.Content>
          </Button>
        </>
      )}
    </>
  );
}
