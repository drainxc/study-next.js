import { Image, List } from "semantic-ui-react";

export default function ItemList({ item }: any) {
  console.log(item);
  return (
    <List divided verticalAlign="middle">
      {item.map((list: any, index: number) => (
        <List.Item key={index}>
          <Image avatar src={list.image_link} />
          <List.Content>
            <List.Header as="a">{list.name}</List.Header>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
}
