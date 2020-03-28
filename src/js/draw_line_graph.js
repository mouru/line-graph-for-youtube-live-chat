class ChatLineChart {

  constructor(canvasId, canvasWidth, canvasHeight, graphWidth, timeDuration, bufferNum) {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.id = canvasId;
    this.canvas.style.backgroundColor = 'rgba(250,250,250,1)';
    this.baseDiv = document.createElement('div');
    this.baseDiv.style.marginLeft = 'auto';
    this.baseDiv.style.marginRight = 'auto';
    this.baseDiv.appendChild(this.canvas);
    this.updateCanvasSize(canvasWidth, canvasHeight);
    this.graphWidth = graphWidth;
    this.timeDuration = timeDuration;
    this.bufferNum = bufferNum;
    this.bufferedDuration = Array(this.bufferNum + 1);
    this.config = this.genCanvasConfig();
  }

  /**
   * @returns {HtmlElement} a div element containing line-charts
   */
  getBaseDiv() {
    return this.baseDiv;
  }

  /**
   * @returns {Chart} a line-chart object
   */
  drawChart() {
    return new Chart(this.context, this.config);
  }

  /**
   * Updates the width and height of a line chart. Note that the input width and
   * height modify the styles of the upper div tag because a canvas of
   * Chart.js does not change its size responsively.
   *
   * @param {string} width
   * @param {string} height
   */
  updateCanvasSize(width, height) {
    this.canvas.style.width = width;
    this.canvas.style.height = height;
    this.baseDiv.style.width = width;
    this.baseDiv.style.height = height;
  }

  /**
   * Updates the buffered time duration (`bufferedDuration`) by using the
   * `bufferNum` and `timeDuration`.
   */
  updateBufferedDuration() {
    let progressDuration = 0;
    this.bufferedDuration[0] = 0;
    for (let i = 0; i < this.bufferedDuration.length - 1; i++) {
      const remainDuration = this.timeDuration - progressDuration;
      const remainBufferNum = this.bufferNum - i;
      progressDuration += Math.floor(remainDuration / remainBufferNum);
      this.bufferedDuration[i + 1] = progressDuration;
    }
  }

  genCanvasConfig() {
    return {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Super-chat/sticker',
          showLine: true,
          backgroundColor: 'rgba(255,228,196, 1)',
          borderColor: 'rgba(250,128,114, 1)',
          data: [
            { x: 0, y: 0 },
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 3 },
            { x: 4, y: 0 },
            { x: 5, y: 0 },
            { x: 6, y: 2 },
            { x: 7, y: 1 },
            { x: 8, y: 0 },
            { x: 9, y: 2 },
            { x: 10, y: 1 },
            { x: 11, y: 3 },
            { x: 12, y: 0 },
            { x: 13, y: 0 },
            { x: 14, y: 2 },
            { x: 15, y: 1 },
            { x: 16, y: 0 },
            { x: 17, y: 2 },
            { x: 18, y: 1 },
            { x: 19, y: 3 },
            { x: 20, y: 0 },
            { x: 21, y: 0 },
            { x: 22, y: 2 },
            { x: 23, y: 1 },
            { x: 24, y: 0 },
            { x: 25, y: 2 },
            { x: 26, y: 1 },
            { x: 27, y: 3 },
            { x: 28, y: 0 },
            { x: 29, y: 0 },
            { x: 30, y: 0 },
            { x: 31, y: 0 },
            { x: 32, y: 0 },
            { x: 33, y: 0 },
            { x: 34, y: 0 },
            { x: 35, y: 0 },
            { x: 36, y: 0 },
            { x: 37, y: 0 },
            { x: 38, y: 0 },
            { x: 39, y: 0 },
            { x: 40, y: 0 },
            { x: 41, y: 0 },
            { x: 42, y: 0 },
            { x: 43, y: 0 },
            { x: 44, y: 0 },
            { x: 45, y: 0 },
            { x: 46, y: 0 },
            { x: 47, y: 0 },
            { x: 48, y: 0 },
            { x: 49, y: 0 },
            { x: 50, y: 2 }]
        }, {
          label: 'Chat',
          showLine: true,
          backgroundColor: 'rgba(240,255,255, 1)',
          borderColor: 'rgba(135,206,235, 1)',
          data: [
            { x: 0, y: 2 },
            { x: 1, y: 5 },
            { x: 2, y: 7 },
            { x: 3, y: 6 },
            { x: 4, y: 2 },
            { x: 5, y: 3 },
            { x: 6, y: 10 },
            { x: 7, y: 7 },
            { x: 8, y: 2 },
            { x: 9, y: 5 },
            { x: 10, y: 7 },
            { x: 11, y: 6 },
            { x: 12, y: 2 },
            { x: 13, y: 3 },
            { x: 14, y: 10 },
            { x: 15, y: 7 },
            { x: 16, y: 9 },
            { x: 17, y: 2 },
            { x: 18, y: 11 },
            { x: 19, y: 13 },
            { x: 20, y: 2 },
            { x: 21, y: 4 },
            { x: 22, y: 6 },
            { x: 23, y: 5 },
            { x: 24, y: 2 },
            { x: 25, y: 10 },
            { x: 26, y: 11 },
            { x: 27, y: 7 },
            { x: 28, y: 6 },
            { x: 29, y: 4 },
            { x: 30, y: 5 }
          ]
        }],
      },
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 12,
            right: 12,
            top: 12,
            bottom: 0
          }
        },
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: false,
              drawTicks: false
            },
            scaleLabel: {
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }],
          yAxes: [{
            display: true,
            gridLines: {
              display: false,
              drawTicks: false
            },
            scaleLabel: {
              display: false,
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0
          }
        },
        legend: {
          position: 'bottom'
        }
      }
    };
  }
}
