window.addEventListener('DOMContentLoaded', () => {

    // Constants
    const RAD = (fromDegrees) => { return BABYLON.Tools.ToRadians(fromDegrees) } /* Verbosity bump */
    const A_ALIAS = 1       /* Anti-aliasing Preference */
    const COMPLEXITY = 72   /* Tesselations of the Torai and Segments of the Sphera */
    const SUPERPOS = 1      /* Y Axis Superposition value */
    const DIA_A = 5         /* Alpha Diameter */
    const DOPPLER = 0.09    /* Anaglyph Red/Blue shift intensity */
    const PROTOGLYPH = {    /* Constellation Approximation & Codex Addressing */
        /* Duo-Symmetrics (Position and Orientation Dominant) */
        BA: '\.', EL: '\:', IA: '\|',
        QU: '\°', UR: '\•', ET: '\=',

        /* Non-Symmetrics (Orientation Dominant) */
        VeK: '\/', TaR: '\\', GaTH: '\~',

        /* Uni-Symmetrics (S = sun | M = moon ::: Position Dominant) */
        NY: {S: '\}', M: '\{'}, 
        OM: {S: '\)', M: '\('}, 
        VU: {S: '\]', M: '\['},
    }
    const TOREUS_GEO = {
        diameter: DIA_A,
        thickness: RAD(DIA_A),          /* Should equally match Rayarc bandwidths */
        tessellation: COMPLEXITY        /* Tesselations will also affect color depth */
    }
    const SPHERA_GEO = {
        diameter: COMPLEXITY % DIA_A,   /* Should be sized to match a subset ratio of a Toreus boundary */
        segments: COMPLEXITY
    }
    const RAYARC_GEO = {                /* Hybrid geometry of a Ray and Arc|Curve */

    }

    // Target the mindfield
    const mField = document.getElementById('mindfield')
    mField.width = window.innerWidth
    mField.height = window.innerHeight
    console.debug(mField)

    // Create GPU Engine
    const engine = new BABYLON.Engine(mField, A_ALIAS)

    // Generate scene
    const createScene = () => {
        let scene = new BABYLON.Scene(engine)
        scene.clearColor = new BABYLON.Color3.Black()

        // TargetCamera and sphere shapes produce the pseudo-2D top-down view of circles
        const eye = new BABYLON.TargetCamera('eye', new BABYLON.Vector3(0, 10, 0), scene)
        // This targets the eye to scene origin
        eye.setTarget(BABYLON.Vector3.Zero())

        // Generate the Rayarc, Toreus & Spheras for the Ayat
        /* THE AYAT * The sun and moon aspects of the three elements; the organs of the atet.
         * {BLCK} :~: WHTE :~: Blue • Teal • White • Yellow • Magenta • Purple
         * A.K.A. MerKahBah Spectrum
         */
        
        // Akali Atet Toreus - Black / Death
        const nToreus = BABYLON.MeshBuilder.CreateTorus('nToreus', TOREUS_GEO, scene)
        nToreus.position.y = SUPERPOS
        nToreus.position.x = 0
        const toreusBlack = new BABYLON.StandardMaterial(scene)
        toreusBlack.alpha = 0.00
        toreusBlack.emissiveColor = new BABYLON.Color3.Black() // May need to be diffuseColor instead
        nToreus.material = toreusBlack // n is for nULL

        // Akosh Atet Toreus - White / Life
        const gToreus = BABYLON.MeshBuilder.CreateTorus('gToreus', TOREUS_GEO, scene)
        gToreus.position.y = SUPERPOS
        gToreus.position.x = 0
        const toreusWhite = new BABYLON.StandardMaterial(scene)
        toreusWhite.alpha = 0.75
        toreusWhite.emissiveColor = new BABYLON.Color3.White()
        gToreus.material = toreusWhite // g is for gAIA

        // Aura Atet Toreus - Yellow / Air / Subliminal
        const mToreus = BABYLON.MeshBuilder.CreateTorus('mToreus', TOREUS_GEO, scene)
        mToreus.position.y = SUPERPOS
        mToreus.position.x = 0
        const toreusYellow = new BABYLON.StandardMaterial(scene)
        toreusYellow.alpha = 0.010
        toreusYellow.emissiveColor = new BABYLON.Color3.Yellow()
        mToreus.material = toreusYellow // m is for mAIA

        // Cryo Atet Toreus - Blue / Water / Darkness
        const aToreus = BABYLON.MeshBuilder.CreateTorus('aToreus', TOREUS_GEO, scene)
        aToreus.position.y = SUPERPOS
        aToreus.position.x = 0
        const toreusBlue = new BABYLON.StandardMaterial(scene)
        toreusBlue.alpha = 0.50
        toreusBlue.emissiveColor = new BABYLON.Color3.Blue()
        aToreus.material = toreusBlue // a is for aBYSS
        
        // Zero Atet Toreus - Teal / Vaccuum / Plenum
        const cToreus = BABYLON.MeshBuilder.CreateTorus('cToreus', TOREUS_GEO, scene)
        cToreus.position.y = 1
        cToreus.position.x = -DOPPLER
        const toreusTeal = new BABYLON.StandardMaterial(scene)
        toreusTeal.alpha = 0.09
        toreusTeal.emissiveColor = new BABYLON.Color3.Teal()
        cToreus.material = toreusTeal

        // Pyro Atet Toreus - Magenta / Fire / Light
        const pToreus = BABYLON.MeshBuilder.CreateTorus('pToreus', TOREUS_GEO, scene)
        pToreus.position.y = 1
        pToreus.position.x = +DOPPLER
        const toreusMagenta = new BABYLON.StandardMaterial(scene)
        toreusMagenta.alpha = 0.12
        toreusMagenta.emissiveColor = new BABYLON.Color3.Magenta()
        pToreus.material = toreusMagenta
        // Zon Atet Toreus - Purple / Chaos / Transmutation

        // Akali Sphera
        // Akosh Sphera

        // Zon Sphera
        // Akali Rayarc
        // Akosh Rayarc

        // Zon Rayarc

        console.debug('}•{')
        return scene
    }
    
    // Actually generate scene
    let lField = createScene()
    console.debug(lField)

    // Experiments...

    engine.runRenderLoop(() => {
        lField.render()
      })
})
