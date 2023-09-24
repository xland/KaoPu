import React from "jsx-dom";
import "./Board.css";
import Grid from "./Grid";

export default function (props) {
  return (
    <div class="chessBoardContainer">
      <div class="chessBoardRow">
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox jiugongA"></div>
        <div class="chessBoardBox jiugongB"></div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox"></div>
      </div>
      <div class="chessBoardRow">
        <div class="chessBoardBox">
          <div class="flowerRB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLB"></div>
        </div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox jiugongB"></div>
        <div class="chessBoardBox jiugongA"></div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox">
          <div class="flowerRB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLB"></div>
        </div>
      </div>
      <div class="chessBoardRow">
        <div class="chessBoardBox">
          <div class="flowerRT"></div>
          <div class="flowerLB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLT"></div>
          <div class="flowerRB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLB"></div>
          <div class="flowerRT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRB"></div>
          <div class="flowerLT"></div>
        </div>
      </div>
      <div class="chessBoardRow">
        <div class="chessBoardBox">
          <div class="flowerLT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRT"></div>
        </div>
      </div>
      <div class="chessBoardRow">
        <div class="river">楚河</div>
        <div class="river">汉界</div>
      </div>
      <div class="chessBoardRow">
        <div class="chessBoardBox">
          <div class="flowerLB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRB"></div>
        </div>
      </div>
      <div class="chessBoardRow">
        <div class="chessBoardBox">
          <div class="flowerLT"></div>
          <div class="flowerRB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRT"></div>
          <div class="flowerLB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLT"></div>
          <div class="flowerRB"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerRT"></div>
          <div class="flowerLB"></div>
        </div>
      </div>
      <div class="chessBoardRow">
        <div class="chessBoardBox">
          <div class="flowerRT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLT"></div>
        </div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox jiugongA"></div>
        <div class="chessBoardBox jiugongB"></div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox">
          <div class="flowerRT"></div>
        </div>
        <div class="chessBoardBox">
          <div class="flowerLT"></div>
        </div>
      </div>
      <div class="chessBoardRow">
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox jiugongB"></div>
        <div class="chessBoardBox jiugongA"></div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox"></div>
        <div class="chessBoardBox"></div>
      </div>
      <Grid></Grid>
    </div>
  );
}
