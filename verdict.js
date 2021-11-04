let array = [];

function checkColor(filledPoints, x, y, z, up, down, goal) {
  const coordinate = [x, y, z];
  const length = array.length;

  filledPoints.forEach((stone) => {
    if (
      stone.coordinate[0] === coordinate[0] &&
      stone.coordinate[1] === coordinate[1] &&
      stone.coordinate[2] === coordinate[2]
    ) {
      array.push(stone.color);
    }
  });

  if (length === array.length) {
    array.push("-");
  }

  if (x === goal.x && y === goal.y && z === goal.z) {
    return;
  } else {
    // x만 증가
    if (up.x && !up.y && !up.z && !down.y && !down.z) {
      checkColor(filledPoints, x + 1, y, z, up, down, goal);
    }
    // y만 증가
    else if (!up.x && up.y && !up.z && !down.y && !down.z) {
      checkColor(filledPoints, x, y + 1, z, up, down, goal);
    }
    // z만 증가
    else if (!up.x && !up.y && up.z && !down.y && !down.z) {
      checkColor(filledPoints, x, y, z + 1, up, down, goal);
    }
    // x, y 증가
    else if (up.x && up.y && !up.z && !down.y && !down.z) {
      checkColor(filledPoints, x + 1, y + 1, z, up, down, goal);
    }
    // x 증가, y 감소
    else if (up.x && !up.y && !up.z && down.y && !down.z) {
      checkColor(filledPoints, x + 1, y - 1, z, up, down, goal);
    }
    // y, z 증가
    else if (!up.x && up.y && up.z && !down.y && !down.z) {
      checkColor(filledPoints, x, y + 1, z + 1, up, down, goal);
    }
    // y 증가, z 감소
    else if (!up.x && up.y && !up.z && !down.y && down.z) {
      checkColor(filledPoints, x, y + 1, z - 1, up, down, goal);
    }
    // x, z 증가
    else if (up.x && !up.y && up.z && !down.y && !down.z) {
      checkColor(filledPoints, x + 1, y, z + 1, up, down, goal);
    }
    // x 증가, z 감소
    else if (up.x && !up.y && !up.z && !down.y && down.z) {
      checkColor(filledPoints, x + 1, y, z - 1, up, down, goal);
    }
    // x 증가, y 증가, z 증가
    else if (up.x && up.y && up.z && !down.y && !down.z) {
      checkColor(filledPoints, x + 1, y + 1, z + 1, up, down, goal);
    }
    // x 증가, y 감소, z 증가
    else if (up.x && !up.y && up.z && down.y && !down.z) {
      checkColor(filledPoints, x + 1, y - 1, z + 1, up, down, goal);
    }
    // x 증가, y 증가, z 감소
    else if (up.x && up.y && !up.z && !down.y && down.z) {
      checkColor(filledPoints, x + 1, y + 1, z - 1, up, down, goal);
    }
    // x 증가, y 감소, z 감소
    else if (up.x && !up.y && !up.z && down.y && down.z) {
      checkColor(filledPoints, x + 1, y - 1, z - 1, up, down, goal);
    }
  }
}

function type1(filledPoints, lastStone) {
  array = [];

  const up = {
    x: true,
    y: false,
    z: false,
  };
  const down = {
    y: false,
    z: false,
  };
  const goal = {
    x: lastStone.coordinate[0] + 4,
    y: lastStone.coordinate[1],
    z: lastStone.coordinate[2],
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0] - 4,
    lastStone.coordinate[1],
    lastStone.coordinate[2],
    up,
    down,
    goal
  );
}
function type2(filledPoints, lastStone) {
  array = [];

  const up = {
    x: false,
    y: true,
    z: false,
  };
  const down = {
    y: false,
    z: false,
  };
  const goal = {
    x: lastStone.coordinate[0],
    y: lastStone.coordinate[1] + 4,
    z: lastStone.coordinate[2],
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0],
    lastStone.coordinate[1] - 4,
    lastStone.coordinate[2],
    up,
    down,
    goal
  );
}
function type3(filledPoints, lastStone) {
  array = [];

  const up = {
    x: false,
    y: false,
    z: true,
  };
  const down = {
    y: false,
    z: false,
  };
  const goal = {
    x: lastStone.coordinate[0],
    y: lastStone.coordinate[1],
    z: lastStone.coordinate[2] + 4,
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0],
    lastStone.coordinate[1],
    lastStone.coordinate[2] - 4,
    up,
    down,
    goal
  );
}
function type4(filledPoints, lastStone) {
  array = [];

  const up = {
    x: true,
    y: true,
    z: false,
  };
  const down = {
    y: false,
    z: false,
  };
  const goal = {
    x: lastStone.coordinate[0] + 4,
    y: lastStone.coordinate[1] + 4,
    z: lastStone.coordinate[2],
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0] - 4,
    lastStone.coordinate[1] - 4,
    lastStone.coordinate[2],
    up,
    down,
    goal
  );
}
function type5(filledPoints, lastStone) {
  array = [];

  const up = {
    x: true,
    y: false,
    z: false,
  };
  const down = {
    y: true,
    z: false,
  };
  const goal = {
    x: lastStone.coordinate[0] + 4,
    y: lastStone.coordinate[1] - 4,
    z: lastStone.coordinate[2],
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0] - 4,
    lastStone.coordinate[1] + 4,
    lastStone.coordinate[2],
    up,
    down,
    goal
  );
}
function type6(filledPoints, lastStone) {
  array = [];

  const up = {
    x: false,
    y: true,
    z: true,
  };
  const down = {
    y: false,
    z: false,
  };
  const goal = {
    x: lastStone.coordinate[0],
    y: lastStone.coordinate[1] + 4,
    z: lastStone.coordinate[2] + 4,
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0],
    lastStone.coordinate[1] - 4,
    lastStone.coordinate[2] - 4,
    up,
    down,
    goal
  );
}
function type7(filledPoints, lastStone) {
  array = [];

  const up = {
    x: false,
    y: true,
    z: false,
  };
  const down = {
    y: false,
    z: true,
  };
  const goal = {
    x: lastStone.coordinate[0],
    y: lastStone.coordinate[1] + 4,
    z: lastStone.coordinate[2] - 4,
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0],
    lastStone.coordinate[1] - 4,
    lastStone.coordinate[2] + 4,
    up,
    down,
    goal
  );
}
function type8(filledPoints, lastStone) {
  array = [];

  const up = {
    x: true,
    y: false,
    z: true,
  };
  const down = {
    y: false,
    z: false,
  };
  const goal = {
    x: lastStone.coordinate[0] + 4,
    y: lastStone.coordinate[1],
    z: lastStone.coordinate[2] + 4,
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0] - 4,
    lastStone.coordinate[1],
    lastStone.coordinate[2] - 4,
    up,
    down,
    goal
  );
}
function type9(filledPoints, lastStone) {
  array = [];

  const up = {
    x: true,
    y: false,
    z: false,
  };
  const down = {
    y: false,
    z: true,
  };
  const goal = {
    x: lastStone.coordinate[0] + 4,
    y: lastStone.coordinate[1],
    z: lastStone.coordinate[2] - 4,
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0] - 4,
    lastStone.coordinate[1],
    lastStone.coordinate[2] + 4,
    up,
    down,
    goal
  );
}
function type10(filledPoints, lastStone) {
  array = [];

  const up = {
    x: true,
    y: true,
    z: true,
  };
  const down = {
    y: false,
    z: false,
  };
  const goal = {
    x: lastStone.coordinate[0] + 4,
    y: lastStone.coordinate[1] + 4,
    z: lastStone.coordinate[2] + 4,
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0] - 4,
    lastStone.coordinate[1] - 4,
    lastStone.coordinate[2] - 4,
    up,
    down,
    goal
  );
}
function type11(filledPoints, lastStone) {
  array = [];

  const up = {
    x: true,
    y: false,
    z: true,
  };
  const down = {
    y: true,
    z: false,
  };
  const goal = {
    x: lastStone.coordinate[0] + 4,
    y: lastStone.coordinate[1] - 4,
    z: lastStone.coordinate[2] + 4,
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0] - 4,
    lastStone.coordinate[1] + 4,
    lastStone.coordinate[2] - 4,
    up,
    down,
    goal
  );
}
function type12(filledPoints, lastStone) {
  array = [];

  const up = {
    x: true,
    y: true,
    z: false,
  };
  const down = {
    y: false,
    z: true,
  };
  const goal = {
    x: lastStone.coordinate[0] + 4,
    y: lastStone.coordinate[1] + 4,
    z: lastStone.coordinate[2] - 4,
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0] - 4,
    lastStone.coordinate[1] - 4,
    lastStone.coordinate[2] + 4,
    up,
    down,
    goal
  );
}
function type13(filledPoints, lastStone) {
  array = [];

  const up = {
    x: true,
    y: false,
    z: false,
  };
  const down = {
    y: true,
    z: true,
  };
  const goal = {
    x: lastStone.coordinate[0] + 4,
    y: lastStone.coordinate[1] - 4,
    z: lastStone.coordinate[2] - 4,
  };

  checkColor(
    filledPoints,
    lastStone.coordinate[0] - 4,
    lastStone.coordinate[1] + 4,
    lastStone.coordinate[2] + 4,
    up,
    down,
    goal
  );
}

function checkWin(arr, color) {
  let win = false;
  for (let i = 0; i < 5; i++) {
    const newArr = arr.slice(i, i + 5);
    win = newArr.every((value) => {
      return value === color;
    });
    if (win) {
      break;
    }
  }
  return win;
}

export function verdict(filledPoints, color) {
  const lastStone = filledPoints[filledPoints.length - 1];
  type1(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type2(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type3(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type4(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type5(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type6(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type7(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type8(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type9(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type10(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type11(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type12(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  type13(filledPoints, lastStone);
  if (checkWin(array, color)) {
    return "win";
  }
  return "nope";
}
