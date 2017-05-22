var board = []
  for (var row = 0; row <.length; row++) {
    board[row] = []
    for (var tile = 0; tile < array.length; tile++) {
      board[row][tile] = false
    }
}

var canvas = document.getElementById('board')
var ctx = canvas.getContext('2d')

var width = 10
    height = 20
    tilez = 24

function drawSquare(x, y) {
    ctx.fillRect(x * tilez, y * tilez, tilez, tilez)
    ss = ctx.strokeStyle
    ctx.strokeStyle = '#555'
    ctx.strokeRect(x * tilez, y * tilez, tilez, tilez)
    ctx.strokeStyle = '#888'
    ctx.strokeRect(x * tilez + 3 * tilez/8, y * tilez + 3 * tilez/8, tilez/4, tilez/4)
    ctx.strokeStyle = ss

}

function drawBoard() {
    fs = ctx.fillStyle
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
          ctx.fillStyle = board[y][x] ? 'red' : 'white'
          drawSquare(x, y, tilez, tilez)
      }
    }
    ctx.fillStyle = fs
}

function Piece(patterns, colors) {
    this.pattern = patterns[0]
    this.patterns = patterns
    this.patternsi = 0

    this.color = colors
    this.x = 0
    this.y = -2
}

Piece.prototype.draw = function() {
    fs = ctx.fillStyle
    ctx.fillStyle = this.color
    for (var ix = 0; ix < this.pattern.length; ix++) {
      for (var iy = 0; iy < this.pattern.length; iy++) {
        if (this.pattern[ix[iy]]) {
          drawSquare(this.x + ix, this.y + iy)
        }
      }
    }
    ctx.fillStyle = fs
}
