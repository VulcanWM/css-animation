# Create CSS Animations with this Template

This HTML, CSS, and JS template makes it easy to create CSS Animations.

Define animation frames as HTML `<div>` elements with the class `frame`. Give each frame a unique `id` of `frame[number]`.

```html
<div id="frame1" class="frame">
  ...
</div>

<div id="frame2" class="frame" style="display: none;">
  ...
</div>
```

Hide frames after the first by adding `style="display: none;"`.

Change these JavaScript variables:

```js
let seconds = 0.5; 
let loop = true;
let play = true;  
let numberOfFrames = 4;
```

- `seconds`: How long (in seconds) each frame displays. Default: `0.5`  
- `loop`: If the animation should loop. Default: `true`
- `play`: If the animation starts automatically. Default: `true`   
- `numberOfFrames`: The number of frames

The `frame` class styles the frame size and border.

You can view a demo of this CSS Animation template at [CSS Animation Template](https://vulcanwm.github.io/css-animation/)
