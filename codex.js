const PHI = 1.618033;

/*
 dcb  76, 94, 11,133, 32,162,  8,160,  8,145, 16,136,208,251,165, 16
 dcb  24,105, 32,133, 16,165, 17,105,  0,133, 17,165, 32,202,208,231
 dcb  96,230, 48,165, 48, 41, 63,133, 48,170,189,106,  6,170,189,  8
 dcb   3,105,  1, 41,  3,157,  8,  3,138, 73,231,170,189,  0,  2,105
 dcb   1, 41,  3,157,  0,  2,165, 48, 73, 63,170,189,106,  6, 73,224
 dcb 170,189,  8,  2,105,  1, 41,  3,157,  8,  2,138, 73,231,170,189
 dcb   0,  3,105,  1, 41,  3,157,  0,  3, 96,224,192,160,128, 96,225
 dcb  64,193,161,226,129, 32,194, 97,162,227,195,130,228, 65,163,196
 dcb  98,229,131,164,197,230,231,132,165,198, 99, 66, 33,  0,199,166
 dcb 133,100,167, 67,134,101,135, 34, 68,102,103, 69, 35, 70, 71, 36
 dcb   1, 37, 38, 39,  2,  3,  4,  5,  6,  7,166, 48,189,198,  6,170
 dcb 254, 24,  3, 73,  7,170,254, 16,  3, 73,231,170,254, 24,  2, 73
 dcb   7,170,254, 16,  2, 96,  0, 32,  1, 33, 64,  2, 65, 34, 96, 66
 dcb   3, 97, 35, 98, 67,128,  4,129, 36, 99,130, 68,160,  5,161,131
 dcb 100, 37,162, 69,132,192,163,101,  6,193, 38,194, 70,164,133,195
 dcb 102,224,  7,225, 39,165,226,196,134, 71,227,103,197,166,228,135
 dcb 198,229,167,230,199,231,166, 49,189, 21,  7,170,189,  0,160,157
 dcb   0,  5,230, 49, 96,195,227,194,162,228, 97,226,128,129,130,225
 dcb  64,161,163,224, 96,160,193,196, 32, 98,192, 65,  0,131,229,164
 dcb  33, 99,197, 66,132,  1,230, 34,165, 67,100,198,  2,  3, 68,  6
 dcb  35,133,166,  5,101,  4,199,  7, 36,231, 69,134,167, 37, 38,102
 dcb 135, 70,232, 71, 39,103,136,200,168,  8, 11, 10,169,233,104,  9
 dcb  12,137,201, 13, 40, 44, 72, 43,170, 42, 45, 41,105, 73,202, 14
 dcb 138,234, 74, 75,106,203, 76,171, 46, 77,235,107,139, 15,108,172
 dcb 174,140,173,141,142,204,109,206,207,205, 78,175, 47,236,239,143
 dcb 237,238,110,240,241,111,208, 16, 79,176,209,242, 48,144,243, 80
 dcb 177,244,112,210, 17, 49,178,179, 52, 53,147, 18, 81,211,145, 19
 dcb 146, 51, 85,180, 20, 54,113,148, 22, 50, 84,212, 21, 55,115,245
 dcb  83,114,116, 23, 82, 86, 88, 89, 87,118,117,119,149,213, 56, 57
 dcb 181,214, 90,121,122,150,151,182,183,215,246, 58,120,247, 24,153
 dcb 184,152,216, 25, 26, 59, 91,248,123,185, 27, 60,217,154, 28, 92
 dcb 249, 29,155,186, 61,218, 93,124,250,187, 30,251, 62,156, 94,125
 dcb 219,188, 31,252,254,220,253, 63,126,255,157,221, 95,159,191,222
 dcb 127,189,223,158,190,165, 66, 41,224,208, 72,165, 66, 24,105,  1
 dcb  41, 31,133, 66,165, 67,240,  7,198, 67,169,  0, 76, 97,  8,198
 dcb  69,240,247, 16, 37,166, 64,230, 64,189,177,  9, 16, 15, 41,127
 dcb 133, 67, 73,127,208,228,169,  1,133, 70, 76, 42,  8,170,189,117
 dcb   8,133, 69,234,234,189,181,  8,133, 65,166, 65,230, 65,189,245
 dcb   8,133, 68,165, 66, 24,105,224,133, 66,166, 66,169,  1,102, 68
 dcb  42,157,  0,160, 96,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  2
 dcb   3,  2,  3,  3,  3,  3,  3,  1,  2,  3,  1,  5,  3,  3,  3,  3
 dcb   3,  2,  2,  3,  3,  5,  4,  3,  3,  5,  4,  4,  4,  3,  3,  4
 dcb   4,  1,  3,  4,  3,  5,  5,  5,  4,  5,  4,  4,  3,  4,  4,  7
 dcb   4,  4,  4,  2,  1,  0,  3,  6,  9, 12, 15, 18, 21, 24, 27, 30
 dcb  32, 35, 35, 38, 40, 43, 46, 49, 50, 52,  4, 55, 55, 60, 63, 65
 dcb  68, 71, 73, 75, 78, 78, 33, 83, 86, 89, 94, 98,102,106,109,112
 dcb 116, 94,120,123,127,130,134,139,144,148,153,157,161,164,167,171
 dcb 178,171,182,186,  5, 56, 68, 56, 36,124,  4, 76, 84, 36, 68, 84
 dcb  40, 24, 40,124,100, 84, 88, 56, 84, 72, 76, 80, 96, 40, 84, 40
 dcb  36, 84, 56, 44, 28,124, 36, 24, 24, 36,124, 24, 52, 16, 60, 80
 dcb  24, 37, 30,124, 32, 28,188,  1,190,124, 24, 36, 60, 32, 28, 32
 dcb  28, 24, 36, 24, 63, 36, 24, 36, 63, 60, 16, 32, 52, 44,120, 36
 dcb  56,  4, 60, 56,  4, 56,  4, 56, 57,  6, 56, 44, 52, 36, 12, 48
 dcb 208, 48, 12,252,164,164, 88,120,132,132, 72,252,132,132,120,252
 dcb 164,132,252,160,128,120,132,164, 56,252, 32, 32,252,  8,  4,248
 dcb 252, 48, 80,140,252,  4,  4,252, 64, 60, 64,252, 64, 48,  8,252
 dcb 120,132,132,132,120,252,144,144, 96,120,132,134,133,120,252,144
 dcb 144,108, 68,164,164,152,128,252,128,248,  4,  4,248,  4,  8,240
 dcb 224, 28, 16,224, 28, 16,224,204, 48, 48,204,140,148,164,196,  0
 dcb   0,133, 41, 10, 28, 29, 63, 63, 63,136, 15, 10, 28, 29, 14, 27
 dcb  63, 63, 63,132, 55, 17, 18, 28, 62, 18, 28, 62, 10,136, 27, 14
 dcb  10, 21, 21, 34,143, 15, 10, 28, 29,142, 39, 40, 48, 50,149,145
 dcb  10, 23, 13, 62, 23, 24, 32,136, 28, 24, 22, 14,136, 11, 14, 10
 dcb  30, 29, 18, 15, 30, 21,128, 14, 15, 15, 14, 12, 29, 28, 63, 63
 dcb  63,144,159,255, 55, 17, 18, 28, 62, 18, 28, 62, 10, 21, 21,129
 dcb  15, 24, 27, 62, 23, 24, 32,136, 11, 34, 14, 63, 63, 63,141, 63
 dcb  63, 63, 11, 34, 14,150,159,143, 11, 34, 62, 39, 48, 54, 38,  2
 dcb   0,  0,  7, 63,  5, 63,  2,  9, 11, 34, 62, 39, 48, 54, 38,  2
 dcb   0,  0,  7, 63,  5, 63,  2,  9, 11, 34, 62, 39, 48, 54, 38,  2
 dcb   0,  0,  7, 63,  5, 63,  2,  9,143,159,255,169,  0,133, 42,169
 dcb   1,133, 44,133, 45,169,  0,133, 32,169,160,133, 33,165, 42,133
 dcb  43,162, 15,160, 15,145, 32, 24,101, 44,230, 44,136, 16,246,165
 dcb  32, 24,105, 32,133, 32,165, 33,105,  0,133, 33,169,  1,133, 44
 dcb 165, 43, 24,101, 45,133, 43,230, 45,202, 16,215,169,  0,133, 32
 dcb 169,160,133, 33,169,224,133, 34,169,  3,133, 35,169,  0,133, 36
 dcb 169,  4,133, 37,169,240,133, 38,169,  3,133, 39,169, 16,133, 40
 dcb 169,  4,133, 41,169, 15,133, 46,160, 15,177, 32, 74, 74, 74, 74
 dcb 170,189, 62, 11,209, 34,240, 18,145, 34,145, 36,170,152, 73, 15
 dcb 168,138,145, 38,145, 40,152, 73, 15,168,136, 16,221,165, 32, 24
 dcb 105, 32,133, 32,165, 33,105,  0,133, 33,165, 34, 24,105,224,133
 dcb  34,165, 35,105,255,133, 35,165, 36, 24,105, 32,133, 36,165, 37
 dcb 105,  0,133, 37,165, 38, 24,105,224,133, 38,165, 39,105,255,133
 dcb  39,165, 40, 24,105, 32,133, 40,165, 41,105,  0,133, 41,198, 46
 dcb  16,150,230, 42,165, 42, 41, 63,240,  3, 76, 95, 10, 96,  0, 11
 dcb  12, 15,  1, 15, 12, 11,  0, 11, 12, 15,  1, 15, 12, 11,  0, 11
 dcb  12, 15,  1, 15, 12, 11,  0, 11, 12, 15,  1, 15, 12, 11,169,  1
 dcb 162,255,134, 16,162,  1,134, 17, 32,  3,  6,169,  2,162,  7,134
 dcb  16,162,  2,134, 17, 32,  3,  6,169,  3,162,  7,134, 16,162,  3
 dcb 134, 17, 32,  3,  6,169, 31,133, 66,169,  0,133, 70,133, 67,133
 dcb  64,169,  1,141,109,  8,169,  0,141,114,  8,169,160,141,115,  8
 dcb 169, 63,133, 48,169,128,133, 49,169,  3,141,109,  8,169,  0,170
 dcb 157,  0,160,232,208,250, 32, 33,  6, 32,170,  6, 32,  6,  7, 32
 dcb  21,  8,165, 66, 73, 31,208, 13,173,109,  8, 24,105,  2, 41,  3
 dcb 105,  3,141,109,  8,165, 49,208,221,173, 17,  7, 73,  1,141, 17

 https://skilldrick.github.io/easy6502/
*/


function rotate(selections) {
  const ret = selections.shift();
  selections.push(ret);
  return ret;
}

function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}

function acquireGfxCtx() {
  /** @type {HTMLCanvasElement}  */
  const canvas = document.getElementById("canvas0");
  /** @type {CanvasRenderingContext2D} */
  const ctx = canvas.getContext("2d");
  
  return [canvas, ctx];
}


function clearCanvas(
  /** @type {CanvasRenderingContext2D} */
  gfx
) {
  gfx.save();
  gfx.setTransform(1, 0, 0, 1, 0, 0);
  gfx.clearRect(0, 0, width, height);
  gfx.restore();
}

const QUADRANT = {
  I: 0,
  II: 1,
  III: 2,
  IV: 3
};
const AXIS = {
  X: 0,
  Y: 1
}

function idRectQuad(x, y) {
  /* coordinates are I (+; +), II (−; +), III (−; −), and IV (+; −).  */

  if (y === 0) {
    y--;
  }
  if (x === 0) {
    x++;
  }

  if (x >= 1 && y >= 1) {
    return QUADRANT.I;
  }
  if (x <= -1 && y >= 1) {
    return QUADRANT.II;
  }
  if (x <= -1 && y <= -1) {
    return QUADRANT.III;
  }
  if (x >= 1 && y <= -1) {
    return QUADRANT.IV;
  }

  throw new RangeError("out of range of grid");
}

function constructCartesianGrid() {
  const quadrants = [[], [], [], []];
  const [i, ii, iii, iv] = quadrants;
  
  const cartesianGrid = 
    range(8, -3)
    .map(
      y => [y, range(8, -4)]
    );

  
  for (const [y, xs] of cartesianGrid) {
    for (const x of xs) {
      const id = idRectQuad(x, y);
      switch (id) {
        case QUADRANT.I:
          i.push([x, y]);
          break;
        case QUADRANT.II:
          ii.push([x, y]);
          break;
        case QUADRANT.III:
          iii.push([x, y]);
          break;
        case QUADRANT.IV:
          iv.push([x, y]);
          break;
        default: throw null;
      }
    }
  }

  return quadrants;
}

const BOUNDS = {
  I: [3, 4]
}

const colors = [
  "black",
  "red",
  "whitesmoke",
  "yellow",
];

function fillGridSpace(
  gfx,
  x,
  y,
  spaceUnit,
  color
) {
  gfx.save();
  gfx.fillStyle = color;
  gfx.clearRect(x*spaceUnit, y*-spaceUnit, spaceUnit, spaceUnit);
  gfx.fillRect(x*spaceUnit, y*-spaceUnit, spaceUnit, spaceUnit);
  gfx.restore();
}



function turn(spiral) {

  const [i, ii, iii, iv] = spiral;

   if (i[AXIS.X]-- <= 0) {
    i[AXIS.X] = 3;
    if (i[AXIS.Y]++ >= 4){ 
      i[AXIS.Y] = 1;
      rotate(colors);
    }
  }

  if (ii[AXIS.Y]-- <= 1) {
    ii[AXIS.Y] = 4;
    if (ii[AXIS.X]-- <= -4) {
      ii[AXIS.X] = -1;
      rotate(colors); 
    } 
  }
 
   if (iii[AXIS.X]++ >= -1) {
    iii[AXIS.X] = -4;
    if (iii[AXIS.Y]-- <= -3) {
      iii[AXIS.Y] = 0;
      rotate(colors); 
    }
  } 

  if (iv[AXIS.Y]++ >= 0) {
    iv[AXIS.Y] = -3;
    if (iv[AXIS.X]++ >= 3) {
      iv[AXIS.X] = 0;
      rotate(colors); 
    } 
  }

}

function changePhase(phase) {


  const {gfx, spaceUnit, spiral, index} = phase;

  const fill = (x, y, color) =>
    fillGridSpace(gfx, x, y, spaceUnit, color);

  for (let i = 0; i < 64; i++) {
    for (const [x, y] of spiral) {
      fill(x, y, rotate(colors));
    }
    
    turn(spiral);
    if (phase.index++ >= 16) {
      phase.index = 0;
      rotate(colors);
    }
  
    /* requestAnimationFrame(_ => changePhase(phase)); */
  }

}

function codex() {
  const [canvas, gfx] = acquireGfxCtx();
  const spaceArea = canvas.width / PHI;
  const spaceUnit = spaceArea / 8;
  const origin = spaceUnit * 4;
  gfx.translate(origin, origin);

  
  const cartesianGrid = constructCartesianGrid();

  const spiral = [
    [3, 1],
    [-1, 4],
    [-4, 0],
    [0, -3],
  ];

  const phase = {gfx, cartesianGrid, spaceUnit, spiral, index: 0};

  for (const quad of cartesianGrid) {
    const color = rotate(colors);
    for (const [x, y] of quad) {
      fillGridSpace(gfx, x, y, spaceUnit, color);
    }
  }

  rotate(colors);

  setInterval(_ => changePhase(phase), 99);
}
