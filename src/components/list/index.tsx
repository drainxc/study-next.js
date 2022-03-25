import Link from "next/link";
import { Grid, Image, Button, Icon, Label } from "semantic-ui-react";

export default function ItemList({ item }: any) {
  console.log(item);
  return (
    <>
      <Grid columns={5}>
        <Grid.Row>
          {item.map((list: any, index: number) => (
            <Grid.Column key={index}>
              <Link href={`/view/${list.id}`}>
                <a>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image src={list.image_link} />
                  <div>{list.name}</div>
                  <div>
                    <div>
                      {"$"}
                      {list.price}
                    </div>
                  </div>
                </a>
              </Link>
              <Button as="div" labelPosition="right">
                <Button color="yellow" style={{ width: "100px" }}>
                  <Icon name="star" />
                  Like
                </Button>
                <Label as="a" basic color="yellow" pointing="left">
                  {list.rating === null ? 0 : list.rating}
                </Label>
              </Button>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </>
  );
}
