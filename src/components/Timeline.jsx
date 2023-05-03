import React from "react";
import timeline_wing from "../assets/images/png/timelineWing.png"
import timeline_wing2 from "../assets/images/png/timelineWing2.png"

function Timeline() {
  return (
    <>
      <section className=" position-relative">
        <img
          src={timeline_wing}
          alt="timeline_wing"
          className="timeline_wing"
        />
        <img
          src={timeline_wing2}
          alt="timeline_wing"
          className="timeline_wing2"
        />
        <div className="container myContainer py-5">
          <div>
            <div className="timeline">
              <div className="timelinecontainer right">
                <h2 className=" fc_white fs_lg ff_PoppinsSemiBold">
                  Milestone 1
                </h2>
                <p className=" fc_white fs_sm ff_PoppinsRegular">
                  Eget aliquam feugiat eget amet sem. Et in hendrerit purus at
                  accumsan elementum non volutpate.
                </p>
              </div>
              <div className="timelinecontainer left text-md-end">
                <h2 className=" fc_white fs_lg ff_PoppinsSemiBold">
                  Milestone 1
                </h2>
                <p className=" fc_white fs_sm ff_PoppinsRegular">
                  Eget aliquam feugiat eget amet sem. Et in hendrerit purus at
                  accumsan elementum non volutpate.
                </p>
              </div>
              <div className="timelinecontainer right">
                <h2 className=" fc_white fs_lg ff_PoppinsSemiBold">
                  Milestone 1
                </h2>
                <p className=" fc_white fs_sm ff_PoppinsRegular">
                  Eget aliquam feugiat eget amet sem. Et in hendrerit purus at
                  accumsan elementum non volutpate.
                </p>
              </div>

              <div className="timelinecontainer left text-md-end">
                <h2 className=" fc_white fs_lg ff_PoppinsSemiBold">
                  Milestone 1
                </h2>
                <p className=" fc_white fs_sm ff_PoppinsRegular">
                  Eget aliquam feugiat eget amet sem. Et in hendrerit purus at
                  accumsan elementum non volutpate.
                </p>
              </div>
            </div>
          </div>
          <div className="timelinecontainer right">
            <h2 className=" fc_white fs_lg ff_PoppinsSemiBold">Milestone 1</h2>
            <p className=" fc_white fs_sm ff_PoppinsRegular">
              Eget aliquam feugiat eget amet sem. Et in hendrerit purus at
              accumsan elementum non volutpate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
