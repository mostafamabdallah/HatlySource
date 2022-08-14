import React from "react";

const CategoryDevider = (props) => {
  return (
    <section>
      <div
        className=""
        style={{
          backgroundImage: `url(${props.img})`,
          height: "60vh",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          backgroundPositionX: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(rgb(235, 238, 245), rgba(0, 0, 0, 0.075))",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-center" style={{ color: "white" }}>
            {props.name}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CategoryDevider;
