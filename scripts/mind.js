window.addEventListener('DOMContentLoaded', () => {

    // Constants
    const RAD = (fromDegrees) => { return BABYLON.Tools.ToRadians(fromDegrees) } /* Verbosity bump */
    const A_ALIAS = 1       /* Anti-aliasing Preference */
    const COMPLEXITY = 72   /* Tesselations of the Torai and Segments of the Sphera */
    const SUPERPOS = 1      /* Y Axis Superposition value */
    const DIA_A = 2         /* Alpha Diameter */
    const DOPPLER = 0.0    /* Anaglyph Red/Blue shift intensity */
    const SINGULARITY = 0   /* The heart of all things */
    const MERKABA = {       /* Alpha Values for each MerKahBah Spectrum Band */
        BLCK: {
            ALPHA: 1.00,
            COLOR: new BABYLON.Color3.Purple()
        },
        WHTE: {
            ALPHA: 1.00,
            COLOR: new BABYLON.Color3.White()
        },
        YLLW: {
            ALPHA: 1.00,
            COLOR: new BABYLON.Color3.Yellow()
        },
        BLUE: {
            ALPHA: 1.00,
            COLOR: new BABYLON.Color3.Blue()
        },
        TEAL: {
            ALPHA: 1.00,
            COLOR: new BABYLON.Color3.Teal()
        },
        MGNT: {
            ALPHA: 1.00,
            COLOR: new BABYLON.Color3.Red()
        },
        PURP: {
            ALPHA: 1.00,
            COLOR: new BABYLON.Color3.Magenta()
        }
    }
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
        thickness: RAD(DIA_A)*2,          /* Should equally match Rayarc bandwidths */
        tessellation: COMPLEXITY        /* Tesselations will also affect color depth */
    }
    const SPHERA_GEO = {
        diameter: DIA_A*0.618,   /* Should be sized to match a subset ratio of a Toreus boundary */
        segments: COMPLEXITY
    }
    const RAYARC_GEO = {                /* Hybrid geometry of a Ray and Arc|Curve */

    }

    // Target the mindfield
    const mField = document.getElementById('mindfield')
    mField.width = window.innerWidth
    mField.height = window.innerHeight

    // Create GPU Engine
    const engine = new BABYLON.Engine(mField, A_ALIAS)

    // Oscillation Tuning
    const baseRot = 1
    let alphaRot = baseRot
    let betaRot = baseRot
    let gammaRot = baseRot
    const subFactor3 = 0.03
    const subFactor6 = 0.06
    const subFactor9 = 0.09

    // Generate scene
    const createScene = () => {
        let scene = new BABYLON.Scene(engine)
        scene.clearColor = new BABYLON.Color3.Black()

        // TargetCamera and sphere shapes produce the pseudo-2D top-down view of circles
        const eye = new BABYLON.TargetCamera('eye', new BABYLON.Vector3(0, 10, 0), scene)
        // This targets the eye to scene origin
        eye.setTarget(BABYLON.Vector3.Zero())

        // Generate Protoglyphics

        // Generate the Rayarc, Toreus & Spheras for the Ayat
        /* THE AYAT * The sun and moon aspects of the three elements; the organs of the atet.
         * {BLCK} :~: WHTE :~: Blue • Teal • White • Yellow • Magenta • Purple
         * A.K.A. MerKahBah Spectrum
         */
        
        // Akali Atet Toreus - Black / Death
        const nToreus = BABYLON.MeshBuilder.CreateTorus('nToreus', TOREUS_GEO, scene)
        nToreus.position.y = SUPERPOS
        nToreus.position.x = SINGULARITY
        nToreus.rotation = new BABYLON.Vector3(
            alphaRot*subFactor3, 
            betaRot*subFactor6, 
            gammaRot*subFactor9
        )
        const toreusBlack = new BABYLON.StandardMaterial(scene)
        toreusBlack.alpha = MERKABA.BLCK.ALPHA
        toreusBlack.emissiveColor = MERKABA.BLCK.COLOR // May need to be diffuseColor instead
        nToreus.material = toreusBlack // n is for nULL

        // Akosh Atet Toreus - White / Life
        const gToreus = BABYLON.MeshBuilder.CreateTorus('gToreus', TOREUS_GEO, scene)
        gToreus.position.y = SUPERPOS
        gToreus.position.x = SINGULARITY
        gToreus.rotation = new BABYLON.Vector3(
            alphaRot*subFactor9, 
            betaRot*subFactor6, 
            gammaRot*subFactor3
        )
        const toreusWhite = new BABYLON.StandardMaterial(scene)
        toreusWhite.alpha = MERKABA.WHTE.ALPHA
        toreusWhite.emissiveColor = MERKABA.WHTE.COLOR
        gToreus.material = toreusWhite // g is for gAIA

        // Aura Atet Toreus - Yellow / Air / Subliminal
        const mToreus = BABYLON.MeshBuilder.CreateTorus('mToreus', TOREUS_GEO, scene)
        mToreus.position.y = SUPERPOS
        mToreus.position.x = SINGULARITY
        mToreus.rotation = new BABYLON.Vector3(
            alphaRot*subFactor3, 
            betaRot*subFactor3, 
            gammaRot*subFactor3
        )
        const toreusYellow = new BABYLON.StandardMaterial(scene)
        toreusYellow.alpha = MERKABA.YLLW.ALPHA
        toreusYellow.emissiveColor = MERKABA.YLLW.COLOR
        mToreus.material = toreusYellow // m is for mAIA

        // Cryo Atet Toreus - Blue / Water / Darkness
        const aToreus = BABYLON.MeshBuilder.CreateTorus('aToreus', TOREUS_GEO, scene)
        aToreus.position.y = SUPERPOS
        aToreus.position.x = SINGULARITY-(DOPPLER+DOPPLER)
        aToreus.rotation = new BABYLON.Vector3(
            alphaRot*subFactor6, 
            betaRot*subFactor6, 
            gammaRot*subFactor6
        )
        const toreusBlue = new BABYLON.StandardMaterial(scene)
        toreusBlue.alpha = MERKABA.BLUE.ALPHA
        toreusBlue.emissiveColor = MERKABA.BLUE.COLOR
        aToreus.material = toreusBlue // a is for aBYSS

        // Zero Atet Toreus - Teal / Vaccuum / Plenum
        const zToreus = BABYLON.MeshBuilder.CreateTorus('cToreus', TOREUS_GEO, scene)
        zToreus.position.y = SUPERPOS
        zToreus.position.x = SINGULARITY-DOPPLER
        zToreus.rotation = new BABYLON.Vector3(
            alphaRot*subFactor9, 
            betaRot*subFactor9, 
            gammaRot*subFactor9
        )
        const toreusTeal = new BABYLON.StandardMaterial(scene)
        toreusTeal.alpha = MERKABA.TEAL.ALPHA
        toreusTeal.emissiveColor = MERKABA.TEAL.COLOR
        zToreus.material = toreusTeal // z is for zERO-POINT

        // Pyro Atet Toreus - Magenta / Fire / Light
        const pToreus = BABYLON.MeshBuilder.CreateTorus('pToreus', TOREUS_GEO, scene)
        pToreus.position.y = SUPERPOS
        pToreus.position.x = SINGULARITY+DOPPLER
        pToreus.rotation = new BABYLON.Vector3(alphaRot*subFactor9, betaRot*subFactor3, gammaRot*subFactor6)
        const toreusMagenta = new BABYLON.StandardMaterial(scene)
        toreusMagenta.alpha = MERKABA.MGNT.ALPHA
        toreusMagenta.emissiveColor = MERKABA.MGNT.COLOR
        pToreus.material = toreusMagenta // p is for pLASMA

        // Zon Atet Toreus - Purple / Chaos / Transmutation
        const oToreus = BABYLON.MeshBuilder.CreateTorus('oToreus', TOREUS_GEO, scene)
        oToreus.position.y = SUPERPOS
        oToreus.position.x = SINGULARITY+(DOPPLER+DOPPLER)
        oToreus.rotation = new BABYLON.Vector3(alphaRot*subFactor6, betaRot*subFactor3, gammaRot*subFactor9)
        const toreusPurple = new BABYLON.StandardMaterial(scene)
        toreusPurple.alpha = MERKABA.PURP.ALPHA
        toreusPurple.emissiveColor = MERKABA.PURP.COLOR
        oToreus.material = toreusPurple // o is for oMEGA

        // Akali Sphera
        const nSphera = BABYLON.MeshBuilder.CreateSphere('nSphera', SPHERA_GEO, scene)
        nSphera.position.y = SUPERPOS
        nSphera.position.x = SINGULARITY // Sphera don't have a rotation
        const spheraBlack = new BABYLON.StandardMaterial(scene)
        spheraBlack.alpha = MERKABA.BLCK.ALPHA
        spheraBlack.emissiveColor = MERKABA.BLCK.COLOR // May need to be diffuseColor instead
        nSphera.material = spheraBlack // n is for nULL

        // Akosh Atet Sphera - White / Life
        const gSphera = BABYLON.MeshBuilder.CreateSphere('gSphera', SPHERA_GEO, scene)
        gSphera.position.y = SUPERPOS
        gSphera.position.x = SINGULARITY // Sphera don't have a rotation
        const spheraWhite = new BABYLON.StandardMaterial(scene)
        spheraWhite.alpha = MERKABA.WHTE.ALPHA
        spheraWhite.emissiveColor = MERKABA.WHTE.COLOR
        gSphera.material = spheraWhite // g is for gAIA

        // Zon Sphera
        // Akali Rayarc
        // Akosh Rayarc

        // Zon Rayarc

        return scene
    }
    
    // Experiments...
    console.debug('}•{')

    engine.runRenderLoop(() => {
        // Iterate Rotations
        const ROTVAL = Math.PI
        const ENTROPY = 1.618
        // alphaRot -= (ROTVAL / ENTROPY)
        // betaRot -= (ROTVAL / ENTROPY)
        // gammaRot -= (ROTVAL / ENTROPY)
    
        // Iterate Scene
        let lField = createScene()
        lField.render()
      })

      // •)) Synesthesia ~~
    //   console.debug(Tone)

})
