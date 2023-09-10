import { Phaser } from "../phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
  }

  preload() {
    this.load.image('gamebg', '/assets/image/background/nature/nature_3/origbig.png');
  }

  create() {
    this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'gamebg');
  }

  update() {

  }
};
