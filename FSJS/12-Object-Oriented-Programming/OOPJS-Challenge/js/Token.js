class Token {
  constructor(owner) {
    this.owner = owner
    this.id = `token-${index}-${owner.id}`
    this.dropped = false
    this.columnLocation = 0
  }

  get htmlToken() {
    return document.getElementById(this.id)
  }

  get offsetLeft() {
    return this.htmlToken.offsetLeft
  }

  drawHTMLToken() {
    const token = document.createElement('div')
    document.querySelector('#game-board-underlay').appendChild(token)
    token.setAttribute('id', this.id)
    token.setAttribute('class', 'token')
    token.style.backgroundColor = this.owner.color
  }
}
