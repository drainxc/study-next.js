import { Menu } from "semantic-ui-react";

export default function Gnb() {
  return (
    <>
      <Menu inverted>
        <Menu.Item
          name="home"
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          //   onClick={this.handleItemClick}
        />
      </Menu>
    </>
  );
}
