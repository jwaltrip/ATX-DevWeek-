import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ReactImageMagnify from 'react-image-magnify';

import "./ChecklistCard.css";

const ChecklistCard = (props) => {
  // logic to see if should show gitbut source chip
  let githubSrcChip = '';
  if (props.showGithubSrcChip) {
    githubSrcChip = <Chip
      avatar={<Avatar src="https://simpleicons.org/icons/github.svg"/>}
      label="GitHub Source"
      component="a"
      href={props.githubSrcLink}
      target="_blank"
      clickable
    />;
  }

  console.log(props.name, props.fixes);

  return (
    <div className="project">
      <div className="project-img">
        <ReactImageMagnify {...{
          smallImage: {
            alt: '',
            isFluidWidth: true,
            src: props.product.imgUrl
          },
          largeImage: {
            src: props.product.imgUrl,
            width: 514,
            height: 418
          },
          enlargedImageContainerClassName: "enlarged-image",
          enlargedImagePosition: "over",
          className: "responsive-img"
        }} />
      </div>
      <div className="project-footer">
        <div className="footer-container">
          <div className="project-title">{props.product.name}</div>
          <div className="project-desc">Aisle: {props.product.aisle} - Bin: {props.product.bin}</div>
          <div className="project-chips">
            <Chip
              avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/7/75/TheHomeDepot_logo.svg"/>}
              label="Find on Home Depot Website"
              component="a"
              href={props.product.productUrl}
              target="_blank"
              clickable
            />
            {githubSrcChip}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistCard;