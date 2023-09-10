import { Phaser } from '../phaser';

export default class ExampleScene extends Phaser.Scene {
  constructor() {
    super('example-scene');
  }

  preload() {
    this.load.image('bg', '/assets/image/background/nature/nature_1/origbig.png');
  }

  create() {
    this.add.image(400, 300, 'bg');
  }

  update() {

  }
};
