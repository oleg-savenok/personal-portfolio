import * as PIXI from 'pixi.js';

export default function displacement() {
    let cover = document.getElementById('cover');
    let imageSrc = cover.getAttribute('data-img');

    let width = cover.offsetWidth + 50;
    let height = cover.offsetHeight + 50;

    let playground = cover;

    let canvas;

    let ratio = 150 / 830;

    let count = 0;
    let raf;

    let renderer = PIXI.autoDetectRenderer(width, height, {
        transparent: true,
    });
    //renderer.autoResize = true;
    let tp, preview;
    let displacementSprite, displacementFilter, stage;

    function setScene() {
        playground.appendChild(renderer.view);

        stage = new PIXI.Container();

        tp = PIXI.Texture.fromImage(imageSrc);
        preview = new PIXI.Sprite(tp);

        preview.anchor.x = 0;
        preview.height = height;
        preview.width = width;

        displacementSprite = PIXI.Sprite.fromImage('../assets/images/2.jpg');
        displacementSprite.texture.baseTexture.wrapMode =
            PIXI.WRAP_MODES.REPEAT;

        displacementFilter = new PIXI.filters.DisplacementFilter(
            displacementSprite
        );

        displacementSprite.scale.y = 0.6;
        displacementSprite.scale.x = 0.6;

        stage.addChild(displacementSprite);

        stage.addChild(preview);

        animate();
    }

    function animate() {
        raf = requestAnimationFrame(animate);

        displacementSprite.x = count * 10;
        displacementSprite.y = count * 10;

        count += 0.2;

        stage.filters = [displacementFilter];

        renderer.render(stage);

        canvas = playground.querySelector('canvas');
    }

    setScene();
}
