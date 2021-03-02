window.addEventListener('DOMContentLoaded', () => {

    // Constants
    const A_ALIAS = 1
    const PROTOGLYPH = {
        /* Omni Symmetrics */
        BA: '\.', EL: '\:', IA: '\|',
        QU: '\°', UR: '\•', ET: '\~',
        VeK: '\'', TaR: '\"', GaTH: '\=',

        /* Uni Symmetrics S = sun | M = moon */
        NY: {S: '\}', M: '\{'}, 
        OM: {S: '\)', M: '\('}, 
        VU: {S: '\]', M: '\['},
    }
    let o = PROTOGLYPH.OM.S
    let m = PROTOGLYPH.OM.M
    let e = PROTOGLYPH.GaTH
    let q = PROTOGLYPH.EL
    console.debug(`ProtoGlyph Check (oeqem): ${o}${e}${q}${e}${m}`)

    
    // Locate the mindfield
    const mField = document.getElementById('mindfield')
    mField.width = window.innerWidth
    mField.height = window.innerHeight
    console.debug(mField)

    // Create GPU Engine
    const engine = new BABYLON.Engine(mField, A_ALIAS)

    // Generate scene
})
