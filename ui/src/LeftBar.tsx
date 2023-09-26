import React from "jsx-dom";
import "./LeftBar.scss";
export default function () {
  let cmds = [];
  cmds.push("position startpos moves h2e2");
  cmds.push("d");
  cmds.push(
    "position fen rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C2C4/9/RNBAKABNR b - - 1 1 moves h9g7"
  );
  cmds.push("d");
  cmds.push(
    "position fen rnbakab1r/9/1c4nc1/p1p1p1p1p/9/9/P1P1P1P1P/1C2C4/9/RNBAKABNR w - - 2 2 moves c3c4"
  );
  cmds.push("d");
  cmds.push(
    "position fen rnbakab1r/9/1c4nc1/p1p1p1p1p/9/2P6/P3P1P1P/1C2C4/9/RNBAKABNR b - - 3 2 moves c9e7"
  );
  cmds.push("d");
  let cmdIndex = 0;
  let startServer = async () => {};
  let sendCmdToServer = async () => {};
  return (
    <div class="leftBar">
      <div class="mainMenu"></div>
      <div class="subMenu">
        <div onClick={startServer}>
          <i class="iconfont icon-user-fill"></i>
        </div>
        <div onClick={sendCmdToServer}>
          <i class="iconfont icon-setting-filling"></i>
        </div>
      </div>
    </div>
  );
}
