window.addEventListener('DOMContentLoaded', () => {

    // Constants
    const A_ALIAS = 1       /* Anti-aliasing Preference */
    const PROTOGLYPH = {    /* Constellation Approximation & Codex Addressing */
        /* Duo-Symmetrics (Position and Orientation Dominant) */
        RA: '\.', EL: '\:', IA: '\|',
        QU: '\°', UR: '\•', ET: '\=',

        /* Non-Symmetrics (Orientation Dominant) */
        VeK: '\/', TaR: '\\', GaTH: '\~',

        /* Uni-Symmetrics (S = sun | M = moon ::: Position Dominant) */
        NY: {S: '\}', M: '\{'}, 
        OM: {S: '\)', M: '\('}, 
        VU: {S: '\]', M: '\['},
    }
    let e = PROTOGLYPH.GaTH
    let m = PROTOGLYPH.OM.M
    let o = PROTOGLYPH.OM.S
    let q = PROTOGLYPH.QU
    console.debug(`ProtoGlyph Check /.\\ ${o}${e}${q}${e}${m}`)


    // Locate the mindfield
    const mField = document.getElementById('mindfield')
    mField.width = window.innerWidth
    mField.height = window.innerHeight
    console.debug(mField)

    // Create GPU Engine
    const engine = new BABYLON.Engine(mField, A_ALIAS)

    // Generate scene
    const createScene = () => {
        let scene = new BABYLON.Scene(engine)
        console.debug('}•{')
    }
    createScene()
})
