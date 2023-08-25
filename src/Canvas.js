export default class Canvas {
  constructor({
    selector = 'canvas',
    contextType = '2d',
    width = 1024,
    height = 576,
    backgroundColor = 'black',
  }) {
    this.element = document.querySelector(selector)
    this.element.width = width
    this.element.height = height

    this.context = this.element.getContext(contextType)

    this.backgroundColor = backgroundColor

    this.clear()
  }

  initialize() {}

  clear() {
    this.context.fillStyle = 
    this.context.fillRect(0, 0, this.element.width, this.element.height)
  }
}