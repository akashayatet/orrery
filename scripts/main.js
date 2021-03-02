requirejs.config({
    baseUrl: '../../node_modules',
    paths: {
        PIXI: 'pixi.js'
    }
});

window.onload = () => {
    require(['pixi.js'], (PIXI) => {
        console.log(PIXI);
        // PIXI.utils.sayHello()
    })

    // const mind = require('brain.js')
    // console.debug(mind)

    // const matter = require('matter-js')
    // console.debug(matter)

    // const tone = require('tone')
    // console.debug(tone)
}
