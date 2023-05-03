import React from 'react'

const Button = (props) => {
  return (
    <>
      <button className="connect_btn fc_white ff_PoppinsSemiBold fs_sm">
        {props.title}
      </button>
    </>
  );
}

export default Button