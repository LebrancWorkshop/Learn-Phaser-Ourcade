import { Phaser } from '../phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('example-scene');
  }

  preload() {
    this.load.image('bg', '/assets/image/background/nature/nature_1/origbig.png');
  }

  create() {
    this.add.image(400, 300, 'bg');
    this.add.text(window.innerWidth / 2, window.innerHeight / 2 - 200, 'Hello Nature', { color: '#0f0', fontSize: '100px' }).setOrigin(0.5, 0.5);
  }

  update() {

  }
};
