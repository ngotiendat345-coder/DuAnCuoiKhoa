import React, { useState } from "react";

function useHover() {
  const [hovering, setHovering] = useState();
  const onMouseOver = () => {
    setHovering(true);
  };
  const onMouseOut = () => {
    setHovering(false);
  };
  return [hovering, { onMouseOut, onMouseOver }];
}

export default useHover;
