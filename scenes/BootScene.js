import Phaser from 'phaser'

class BootScene extends Phaser.Scene {
  constructor () {
    super({ key: 'BootScene' })
    console.log('BootScene created!')
  }

  preload () {
  }

  create () {
    this.scene.start('GameScene')
  }
}

export default BootScene
