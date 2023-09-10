import { Phaser } from '../phaser';

export default class TitleScene extends Phaser.Scene {
  music: Phaser.Sound.NoAudioSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound | null;
  constructor() {
    super('example-scene');
    this.music = null;
  }

  preload() {
    this.load.image('bg', '/assets/image/background/nature/nature_1/origbig.png');
    this.load.audio('titlebgm', '/assets/audio/bgm/melancholic_walk.mp3');
  }

  create() {
    this.add.image(400, 300, 'bg');
    this.add.text(window.innerWidth / 2, window.innerHeight / 2 - 200, 'Hello Nature', { color: '#0f0', fontSize: '100px', stroke: '#00f', strokeThickness: 20 }).setOrigin(0.5, 0.5);
    this.add.text(window.innerWidth / 2, window.innerHeight / 2 + 200, 'Press Space to Start Game.', { color: '#0f0', fontSize: '80px', stroke: '#00f', strokeThickness: 20 }).setOrigin(0.5, 0.5);

    this.music = this.sound.add('titlebgm', { loop: true });
    this.music.play();

   // Keyboard Event to change scene.
    this.input.keyboard?.on('keydown-SPACE', () => {
      this.scene.start('game-scene');
    });
  }

  update() {

  }
};
