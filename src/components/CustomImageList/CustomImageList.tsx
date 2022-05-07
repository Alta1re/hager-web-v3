import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface IILProps {
  itemData: {
    img: string;
    title: string;
  }[];
  containerWidth?: number;
  containerHeight?: number;
  rowHeight?: number;
  cols?: number;
}

export default function CumstomImageList(props: IILProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);

  const showBigPicture = (image: { src: string; title: string }) => {
    setImage(image.src);
    setTitle(image.title);
    setDialogOpen(true);
  };

  const unshowBigPicture = () => {
    setDialogOpen(false);
    setImage(null);
    setTitle(null);
  };

  return (
    <>
      <Dialog
        open={dialogOpen}
        onBackdropClick={unshowBigPicture}
        onClick={unshowBigPicture}
        fullScreen
      >
        <DialogContent>
          {image && <img src={image} alt={title!} width="100%" />}
        </DialogContent>
      </Dialog>
      <ImageList
        sx={{
          width: props.containerWidth ? props.containerWidth : 800,
          height: props.containerHeight ? props.containerHeight : 700,
        }}
        cols={props.cols ? props.cols : 3}
        rowHeight={props.rowHeight ? props.rowHeight : 600}
      >
        {props.itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ cursor: "pointer" }}>
            <img
              onClick={() =>
                showBigPicture({ src: item.img, title: item.title })
              }
              src={item.img}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
