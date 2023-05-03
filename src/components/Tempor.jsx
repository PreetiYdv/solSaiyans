import React from 'react'
import { Col, Row } from 'react-bootstrap'
import tempor_img from "../assets/images/png/tempor_img.png"

function Tempor() {
  return (
    <>
      <div className="container myContainer py-5">
        <Row className=' justify-content-between align-items-center'>
          <Col lg={6}>
            <img src={tempor_img} alt="" className=' w-100'/>
          </Col>
          <Col lg={5}>
            <h2 className=' fc_white pt-5 ff_PoppinsBold fs_xl'>Ante tempor, <span className=' fc_red'>neque scelerisque</span>  sit viverra.</h2>
            <p className=' fc_white ff_PoppinsRegular fs_sm pt-4'>
              Viverra in morbi urna neque sollicitudin venenatis quam facilisis
              vivamus. Massa risus placerat lectus at nisl eleifend. Lorem
              consectetur diam at ut leo. Id lacus blandit integer suscipit arcu
              nisl nisl, nunc dictum. Viverra elit mauris tempor sit id. Viverra
              suspendisse lorem semper sit massa in neque scelerisque. Magna
              orci, id porttitor eu vitae arcu est ullamcorper. Tortor, vehicula
              lectus eu quis a nulla vehicula imperdiet vulputate. Ultricies
              malesuada habitasse id ornare id. Vel diam consequat platea morbi
              duis. Faucibus egestas nibh libero placerat placerat fusce nunc,
              nunc. Vivamus nibh blandit mattis tellus dui. Pharetra gravida
              sollicitudin praesent cursus odio enim risus.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tempor