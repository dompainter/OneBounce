import Phaser from 'phaser'

// https://sprite-storm.com/tutorial/phaser-3-tutorial/creating-flappy-bird-phaser-3-beta/
// https://www.joshmorony.com/how-to-create-an-infinite-climbing-game-in-phaser/

class GameScene extends Phaser.Scene {
  constructor () {
    super({
      key: 'GameScene',
      physics: {
        system: 'arcade',
        debug: true
      }
    })
  }

  preload () {
    this.load.image('platform', '../assets/platform.png')
    this.load.image('ball', '../assets/ball.png')
  }

  create () {
    // Ball
    this.ball = this.physics.add.image(400, 300, 'ball').setActive().setVelocity(0, 0)
    this.ball.body.collideWorldBounds = true
    console.log("​GameScene -> create -> this.ball", this.ball)

		console.log("​GameScene -> create -> this.physics", this.physics)
    // Platforms
    console.log("​create -> game", this)
    this.tileTexture = this.textures.get('platform')
    this.tileHeight = this.tileTexture.getSourceImage().height
    this.tileWidth = this.tileTexture.getSourceImage().width

    this.platforms = this.add.group()

    this.platforms.createMultiple({
      key: 'platform'
    })

    this.spacing = 300
    this.initPlatforms.apply(this)

    this.timedEvent = this.time.addEvent({
      delay: 2000,
      callback: this.addPlatform,
      callbackScope: this,
      loop: false
    })

    
    // this.physics.world.events.on('COLLIDE_EVENT', (e) => {
    //   this.collide(e)
    // })
  }

  collide (e) {
    e.bodyB.destroy()

    e.gameObjectB.destroy()

    this.gameOver()
  }

  update () {
    if (this.ball.y > this.cameras.main.height) {
      this.gameOver()
    }
  }

  gameOver () {
    this.scene.start('BootScene')
  }

  initPlatforms () {
    const bottom = this.game.canvas.height - this.tileHeight
    const top = this.tileHeight

    // Keep creating platforms until they reach (near) the top of the screen
    for (let y = bottom; y > top - this.tileHeight; y = y - this.spacing) {
      this.addPlatform(y)
    }
  }

  addTile (x, y) {
    this.tile = this.physics.add.image(x, y, 'platform')
      .setActive()
      .setVelocity(0, 150)
      .setGravity(0)

    this.platforms.add(this.tile)
  }

  addPlatform (y) {
    // If no y position is supplied, render it just outside of the screen
    if (typeof (y) === 'undefined') {
      y = -this.tileHeight
    }

    // Work out how many tiles we need to fit across the whole screen
    const tilesNeeded = Math.ceil(this.game.canvas.width / this.tileWidth)

    // Add a hole randomly somewhere
    const hole = Math.floor(Math.random() * (tilesNeeded - 3)) + 1

    // Keep creating tiles next to each other until we have an entire row
    // Don't add tiles where the random hole is
    for (let i = 0; i < tilesNeeded; i++) {
      if (i !== hole && i !== hole + 1) {
        this.addTile(i * this.tileWidth, y)
      }
    }
  }
}

export default GameScene
