class ChatLineChart {

  constructor(canvasId, canvasWidth, canvasHeight, graphWidth, bufferNum) {
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
    this.bufferNum = bufferNum;
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

  genCanvasConfig() {
    return {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Super-chat/sticker',
          showLine: true,
          backgroundColor: 'rgba(255,228,196, 1)',
          borderColor: 'rgba(250,128,114, 1)',
          data: []
        }, {
          label: 'Chat',
          showLine: true,
          backgroundColor: 'rgba(240,255,255, 1)',
          borderColor: 'rgba(135,206,235, 1)',
          data: []
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
