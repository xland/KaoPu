import React from "jsx-dom";
import "./Board.scss";

export default function (props) {
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
