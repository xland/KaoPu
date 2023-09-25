import React from "jsx-dom";
import "./Board.scss";

export default function (props) {
  let resizeHandler = (e) => {
    let dom = document.getElementById("chessBoardContainer");
    if (!dom) return;
    let w = dom.parentNode.clientWidth - 100;
    let h = document.body.clientHeight - 100;
    let w1 = (h / 9) * 8;
    let h1 = (w / 8) * 9;
    if (w1 > w) {
      h = h1;
    }
    if (h1 > h) {
      w = w1;
    }
    dom.style = `width:${w}px;height:${h}px;`;
  };
  document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
  });
  return (
    <div id="chessBoardContainer">
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell jiugongA"></div>
        <div class="cell jiugongB"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="flowerRB"></div>
        </div>
        <div class="cell">
          <div class="flowerLB"></div>
        </div>
        <div class="cell"></div>
        <div class="cell jiugongB"></div>
        <div class="cell jiugongA"></div>
        <div class="cell"></div>
        <div class="cell">
          <div class="flowerRB"></div>
        </div>
        <div class="cell">
          <div class="flowerLB"></div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="flowerRT"></div>
          <div class="flowerLB"></div>
        </div>
        <div class="cell">
          <div class="flowerLT"></div>
          <div class="flowerRB"></div>
        </div>
        <div class="cell">
          <div class="flowerLB"></div>
        </div>
        <div class="cell">
          <div class="flowerRB"></div>
        </div>
        <div class="cell">
          <div class="flowerLB"></div>
        </div>
        <div class="cell">
          <div class="flowerRB"></div>
        </div>
        <div class="cell">
          <div class="flowerLB"></div>
          <div class="flowerRT"></div>
        </div>
        <div class="cell">
          <div class="flowerRB"></div>
          <div class="flowerLT"></div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="flowerLT"></div>
        </div>
        <div class="cell">
          <div class="flowerRT"></div>
        </div>
        <div class="cell">
          <div class="flowerLT"></div>
        </div>
        <div class="cell">
          <div class="flowerRT"></div>
        </div>
        <div class="cell">
          <div class="flowerLT"></div>
        </div>
        <div class="cell">
          <div class="flowerRT"></div>
        </div>
        <div class="cell">
          <div class="flowerLT"></div>
        </div>
        <div class="cell">
          <div class="flowerRT"></div>
        </div>
      </div>
      <div class="row">
        <div class="river">楚河</div>
        <div class="river">汉界</div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="flowerLB"></div>
        </div>
        <div class="cell">
          <div class="flowerRB"></div>
        </div>
        <div class="cell">
          <div class="flowerLB"></div>
        </div>
        <div class="cell">
          <div class="flowerRB"></div>
        </div>
        <div class="cell">
          <div class="flowerLB"></div>
        </div>
        <div class="cell">
          <div class="flowerRB"></div>
        </div>
        <div class="cell">
          <div class="flowerLB"></div>
        </div>
        <div class="cell">
          <div class="flowerRB"></div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="flowerLT"></div>
          <div class="flowerRB"></div>
        </div>
        <div class="cell">
          <div class="flowerRT"></div>
          <div class="flowerLB"></div>
        </div>
        <div class="cell">
          <div class="flowerLT"></div>
        </div>
        <div class="cell">
          <div class="flowerRT"></div>
        </div>
        <div class="cell">
          <div class="flowerLT"></div>
        </div>
        <div class="cell">
          <div class="flowerRT"></div>
        </div>
        <div class="cell">
          <div class="flowerLT"></div>
          <div class="flowerRB"></div>
        </div>
        <div class="cell">
          <div class="flowerRT"></div>
          <div class="flowerLB"></div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="flowerRT"></div>
        </div>
        <div class="cell">
          <div class="flowerLT"></div>
        </div>
        <div class="cell"></div>
        <div class="cell jiugongA"></div>
        <div class="cell jiugongB"></div>
        <div class="cell"></div>
        <div class="cell">
          <div class="flowerRT"></div>
        </div>
        <div class="cell">
          <div class="flowerLT"></div>
        </div>
      </div>
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell jiugongB"></div>
        <div class="cell jiugongA"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      {props.children}
    </div>
  );
}
