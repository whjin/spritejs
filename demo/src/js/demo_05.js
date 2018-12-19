localStorage.setItem('language', 'zh-CN');

const {Scene, Sprite, Group} = spritejs;

const scene = new Scene('#container', {
    resolution: [600, 600]
});

const layer = scene.layer('fglayer');
const group = new Group();
group.attr({
    anchor: 0.5,
    pos: [300, 300],
    clip: {
        d: 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z',
        transform: {scale: 10}
    }
});
layer.append(group);

const sprite = new Sprite('https://p4.ssl.qhimg.com/t01423053c4cb748581.jpg');
sprite.attr({
    pos: [-10, 0],
    scale: 0.6
});

group.append(sprite);

