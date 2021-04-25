import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.styles.scss";
import { sections } from "../data/data.directory";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ id, imageUrl, size, title }) => {
          return (
            <MenuItem key={id} imageUrl={imageUrl} size={size} title={title} />
          );
        })}
      </div>
    );
  }
}

export default Directory;
