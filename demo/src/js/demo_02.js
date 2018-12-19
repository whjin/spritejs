localStorage.setItem('language', 'zh-CN');

const {Scene, Sprite} = spritejs;

const scene = new Scene('#container', {
    resolution: [600, 600]
});

const s = new Sprite();

s.attr({
    anchor: 0.5,
    pos: [300, 300],
    size: [200, 200],
    bgcolor: 'red'
});

scene.layer().append(s);

