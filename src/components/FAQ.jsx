import React from "react";
import Accordion from "react-bootstrap/Accordion";
import wing1 from "../assets/images/png/faq_wing1.png"
import wing2 from "../assets/images/png/faqWing2.png"

function FAQ() {
  return (
    <>
      <section className=" position-relative">
        <div className="container myContainer py-5">
          <img src={wing1} alt="" className="wing1" />
          <img src={wing2} alt="" className="wing2" />
          <h2 className=" fc_white ff_PoppinsBold fs_xl pb-3">FAQs</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Laoreet placerat est arcu, integer aliquam.
              </Accordion.Header>
              <Accordion.Body className="fc_grey">
                Praesent id sem blandit urna, interdum egestas varius in.
                Venenatis vel, egestas adipiscing elementum in. Orci, quis sit
                neque enim condimentum egestas eu massa pretium. Mauris varius
                ultrices leo sapien elementum, cras morbi porttitor. Mattis
                malesuada a, feugiat vitae massa.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Laoreet placerat est arcu, integer aliquam.
              </Accordion.Header>
              <Accordion.Body>
                Praesent id sem blandit urna, interdum egestas varius in.
                Venenatis vel, egestas adipiscing elementum in. Orci, quis sit
                neque enim condimentum egestas eu massa pretium. Mauris varius
                ultrices leo sapien elementum, cras morbi porttitor. Mattis
                malesuada a, feugiat vitae massa.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Laoreet placerat est arcu, integer aliquam.
              </Accordion.Header>
              <Accordion.Body>
                Praesent id sem blandit urna, interdum egestas varius in.
                Venenatis vel, egestas adipiscing elementum in. Orci, quis sit
                neque enim condimentum egestas eu massa pretium. Mauris varius
                ultrices leo sapien elementum, cras morbi porttitor. Mattis
                malesuada a, feugiat vitae massa.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Laoreet placerat est arcu, integer aliquam.
              </Accordion.Header>
              <Accordion.Body>
                Praesent id sem blandit urna, interdum egestas varius in.
                Venenatis vel, egestas adipiscing elementum in. Orci, quis sit
                neque enim condimentum egestas eu massa pretium. Mauris varius
                ultrices leo sapien elementum, cras morbi porttitor. Mattis
                malesuada a, feugiat vitae massa.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Laoreet placerat est arcu, integer aliquam.
              </Accordion.Header>
              <Accordion.Body>
                Praesent id sem blandit urna, interdum egestas varius in.
                Venenatis vel, egestas adipiscing elementum in. Orci, quis sit
                neque enim condimentum egestas eu massa pretium. Mauris varius
                ultrices leo sapien elementum, cras morbi porttitor. Mattis
                malesuada a, feugiat vitae massa.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Laoreet placerat est arcu, integer aliquam.
              </Accordion.Header>
              <Accordion.Body>
                Praesent id sem blandit urna, interdum egestas varius in.
                Venenatis vel, egestas adipiscing elementum in. Orci, quis sit
                neque enim condimentum egestas eu massa pretium. Mauris varius
                ultrices leo sapien elementum, cras morbi porttitor. Mattis
                malesuada a, feugiat vitae massa.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Laoreet placerat est arcu, integer aliquam.
              </Accordion.Header>
              <Accordion.Body>
                Praesent id sem blandit urna, interdum egestas varius in.
                Venenatis vel, egestas adipiscing elementum in. Orci, quis sit
                neque enim condimentum egestas eu massa pretium. Mauris varius
                ultrices leo sapien elementum, cras morbi porttitor. Mattis
                malesuada a, feugiat vitae massa.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default FAQ;
