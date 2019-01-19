import Phaser from 'phaser'
import BootScene from '../scenes/BootScene'
import GameScene from '../scenes/GameScene'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  backgroundColor: '479cde',
  scene: [
    BootScene,
    GameScene
  ],
  physics: {
    default: 'arcade'
  }
}

const game = new Phaser.Game(config)
// this.game = game

// class GameScene extends Phaser.Scene {
//   constructor () {
//     super({
//       key: 'GameScene',
//       physics: {
//         system: 'arcade',
//         debug: true
//       }
//     })
//   }

//   preload () {
//     this.load.image('platform', '../assets/platform.png')
//     this.load.image('ball', '../assets/ball.png')
//   }

//   create () {
//     // const blocks = this.physics.add.staticGroup()
//     // blocks.create(400, 568, 'tile').setScale(2).refreshBody();

//     // Platforms
//     console.log("​create -> game", game)
//     this.tileTexture = game.textures.get('platform')
//     this.tileHeight = this.tileTexture.getSourceImage().height
//     this.tileWidth = this.tileTexture.getSourceImage().width

//     game.platforms = this.physics.add.group()

//     game.platforms.createMultiple({
//       key: 'platform'
//     })

//     this.spacing = 300
//     this.initPlatforms.apply(this)

//     this.timedEvent = this.time.addEvent({
//       delay: 2000,
//       callback: this.addPlatform,
//       callbackScope: this,
//       loop: true
//     })
//   }

//   initPlatforms () {
//     const bottom = game.canvas.height - this.tileHeight
//     const top = this.tileHeight

//     // Keep creating platforms until they reach (near) the top of the screen
//     for (let y = bottom; y > top - game.tileHeight; y = y - game.spacing) {
//       game.addPlatform(y)
//     }
//   }

//   addTile (x, y) {
//     // Get a tile that is not currently on screen
//     const tile = game.platforms.getFirstDead(true)

//     // Reset it to the specified coordinates
//     tile.x = x
//     tile.y = y
//     tile.body.velocity.y = 150
//     tile.body.immovable = true

//     // When the tile leaves the screen, kill it
//     tile.checkWorldBounds = true
//     tile.outOfBoundsKill = true
//   }

//   addPlatform (y) {
//     // If no y position is supplied, render it just outside of the screen
//     if (typeof (y) === 'undefined') {
//       y = -this.tileHeight
//     }

//     // Work out how many tiles we need to fit across the whole screen
//     const tilesNeeded = Math.ceil(game.canvas.width / this.tileWidth)

//     // Add a hole randomly somewhere
//     const hole = Math.floor(Math.random() * (tilesNeeded - 3)) + 1

//     // Keep creating tiles next to each other until we have an entire row
//     // Don't add tiles where the random hole is
//     for (let i = 0; i < tilesNeeded; i++) {
//       if (i !== hole && i !== hole + 1) {
//         this.addTile(i * this.tileWidth, y)
//       }
//     }
//   }
// }

// export default GameScene
