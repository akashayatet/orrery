import Modifiers from "./util/Modifiers"

window.addEventListener('DOMContentLoaded', () => {

    // Local Experimental Modifiers
    const XPOS_1 = -Modifiers.X_ROOT
    const XPOS_2 = +Modifiers.X_ROOT

    const TOREUS = (diame, thicc, tessells) => {
        const TOREUS_GEO = {
            diameter: DIA_A + (diame ? diame : 0),
            thickness: (RAD(DIA_A)*12) + (thicc ? thicc : 0),    /* Should equally match Rayarc bandwidths */
            tessellation: COMPLEXITY + (tessells ? tessells : 0)/* Tesselations will also affect color depth */
        }
        return TOREUS_GEO
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

    // --- Oscillation Tuning --- \\
    // Rotation
    const baseRot = 1
    let alphaRot = baseRot
    let betaRot = baseRot
    let gammaRot = baseRot
    const subFactor3 = 0.03
    const subFactor6 = 0.06
    const subFactor9 = 0.09
    // ENTITY.rotation = new BABYLON.Vector3(
    //     alphaRot*subFactor3, 
    //     betaRot*subFactor6, 
    //     gammaRot*subFactor9
    // )

    // Waveforms
    const rateOfChange = 0.042
    const waveForms = [
        {current: 00, limit: 12, peaked: false},
        {current: 13, limit: 13, peaked: false},
        {current: 00, limit: 14, peaked: false},
        {current: 15, limit: 15, peaked: false},
        {current: 00, limit: 16, peaked: false},
        {current: 17, limit: 17, peaked: false},
        {current: 00, limit: 18, peaked: false}
    ]
    
    // Instantiate TransformNodes to manifest movement of forms
    // Generate scene
    const createScene = () => {
        let scene = new BABYLON.Scene(engine)
        scene.clearColor = new BABYLON.Color3.Black()

        // TargetCamera and sphere shapes produce the pseudo-2D top-down view of circles
        const eye = new BABYLON.TargetCamera('eye', new BABYLON.Vector3(0, 27, 0), scene)
        // This targets the eye to scene origin
        eye.setTarget(new BABYLON.Vector3(15, -720, 0))

        // Generate the Rayarc, Toreus & Spheras for the Ayat
        let theThiccness = 0.22

        // Akali Atet Toreus - Black / Death
        const nToreus1 = BABYLON.MeshBuilder.CreateTorus('nToreus1', TOREUS(waveForms[0].current, theThiccness), scene)
        const nToreus2 = BABYLON.MeshBuilder.CreateTorus('nToreus2', TOREUS(waveForms[0].current, theThiccness), scene)
        nToreus1.position.y = SUPERPOS+0
        nToreus2.position.y = SUPERPOS+0
        nToreus1.position.x = SINGULARITY+XPOS_1
        nToreus2.position.x = SINGULARITY+XPOS_2
        nToreus2.material = black
        nToreus1.material = black // n is for nULL

        // Akosh Atet Toreus - White / Life
        const gToreus1 = BABYLON.MeshBuilder.CreateTorus('gToreus1', TOREUS(waveForms[1].current, theThiccness), scene)
        const gToreus2 = BABYLON.MeshBuilder.CreateTorus('gToreus2', TOREUS(waveForms[1].current, theThiccness), scene)
        gToreus1.position.y = SUPERPOS+0.01
        gToreus2.position.y = SUPERPOS+0.01
        gToreus1.position.x = SINGULARITY+DOPPLER+XPOS_1
        gToreus2.position.x = SINGULARITY-DOPPLER+XPOS_2
        gToreus2.material = white
        gToreus1.material = white // g is for gAIA

        // Aura Atet Toreus - Yellow / Air / Subliminal
        const mToreus1 = BABYLON.MeshBuilder.CreateTorus('mToreus1', TOREUS(waveForms[2].current, theThiccness), scene)
        const mToreus2 = BABYLON.MeshBuilder.CreateTorus('mToreus2', TOREUS(waveForms[2].current, theThiccness), scene)
        mToreus1.position.y = SUPERPOS-0.01
        mToreus2.position.y = SUPERPOS-0.01
        mToreus1.position.x = SINGULARITY+(DOPPLER+DOPPLER)+XPOS_1
        mToreus2.position.x = SINGULARITY+(DOPPLER+DOPPLER)+XPOS_2
        mToreus2.material = yellow
        mToreus1.material = yellow // m is for mAIA

        // Cryo Atet Toreus - Blue / Water / Darkness
        const aToreus1 = BABYLON.MeshBuilder.CreateTorus('aToreus1', TOREUS(waveForms[3].current, theThiccness), scene)
        const aToreus2 = BABYLON.MeshBuilder.CreateTorus('aToreus2', TOREUS(waveForms[3].current, theThiccness), scene)
        aToreus1.position.y = SUPERPOS-0.02
        aToreus2.position.y = SUPERPOS-0.02
        aToreus1.position.x = SINGULARITY-(DOPPLER+DOPPLER)+XPOS_1
        aToreus2.position.x = SINGULARITY-(DOPPLER+DOPPLER)+XPOS_2
        aToreus2.material = blue
        aToreus1.material = blue // a is for aBYSS

        // Zero Atet Toreus - Teal / Vaccuum / Plenum
        const zToreus2 = BABYLON.MeshBuilder.CreateTorus('cToreus2', TOREUS(waveForms[4].current, theThiccness), scene)
        const zToreus1 = BABYLON.MeshBuilder.CreateTorus('cToreus1', TOREUS(waveForms[4].current, theThiccness), scene)
        zToreus1.position.y = SUPERPOS-0.03
        zToreus2.position.y = SUPERPOS-0.03
        zToreus1.position.x = SINGULARITY-DOPPLER+XPOS_1
        zToreus2.position.x = SINGULARITY-DOPPLER+XPOS_2
        zToreus2.material = teal
        zToreus1.material = teal // z is for zERO-POINT

        // Pyro Atet Toreus - Magenta / Fire / Light
        const pToreus1 = BABYLON.MeshBuilder.CreateTorus('pToreus1', TOREUS(waveForms[5].current, theThiccness), scene)
        const pToreus2 = BABYLON.MeshBuilder.CreateTorus('pToreus2', TOREUS(waveForms[5].current, theThiccness), scene)
        pToreus1.position.y = SUPERPOS-0.04
        pToreus2.position.y = SUPERPOS-0.04
        pToreus1.position.x = SINGULARITY+DOPPLER+XPOS_1
        pToreus2.position.x = SINGULARITY+DOPPLER+XPOS_2
        pToreus2.material = magenta
        pToreus1.material = magenta // p is for pLASMA

        // Zon Atet Toreus - Purple / Chaos / Transmutation             -- Synchro --
        const oToreus1 = BABYLON.MeshBuilder.CreateTorus('oToreus1', TOREUS(waveForms[6].current, theThiccness), scene)
        const oToreus2 = BABYLON.MeshBuilder.CreateTorus('oToreus2', TOREUS(waveForms[6].current, theThiccness), scene)
        oToreus1.position.y = SUPERPOS-0.05
        oToreus2.position.y = SUPERPOS-0.05
        oToreus1.position.x = SINGULARITY+(DOPPLER+DOPPLER)+XPOS_1
        oToreus2.position.x = SINGULARITY+(DOPPLER+DOPPLER)+XPOS_2
        oToreus2.material = purple
        oToreus1.material = purple // o is for oMEGA

        // NOTE: No more than one sphera may be present in the core of a being
        // Akali Sphera

        // Akosh Atet Sphera - White / Life
        const gSphera1 = BABYLON.MeshBuilder.CreateSphere('gSphera', SPHERA_GEO, scene)
        const gSphera2 = BABYLON.MeshBuilder.CreateSphere('gSphera', SPHERA_GEO, scene)
        gSphera1.position.y = SUPERPOS
        gSphera2.position.y = SUPERPOS
        gSphera1.position.x = XPOS_1
        gSphera2.position.x = XPOS_2
        gSphera2.material = white
        gSphera1.material = white // g is for gAIA


        // Zon Sphera
        // Akali Rayarc
        // Akosh Rayarc

        // Zon Rayarc

        return scene
    }
    
    // Experiments...

    engine.runRenderLoop(() => {
        // --- Transmutations --- \\
        // Spin|Energy
        const ROTVAL = Math.PI
        const ENTROPY = 1.618
        // alphaRot -= (ROTVAL / ENTROPY)
        // betaRot -= (ROTVAL / ENTROPY)
        // gammaRot -= (ROTVAL / ENTROPY)

        // Expansion|Contraction
        waveForms.forEach(wave => {
            if (!(wave.current >= wave.limit) && !wave.peaked) {
                wave.current += rateOfChange
            } else if (wave.peaked && wave.current > 00) {
                wave.current -= rateOfChange
            } else {
                wave.peaked = !(wave.current <= 00)
            }
        })
        
        // Iterate Scene
        createScene().render()
    })

    // •)) Synthesthesia ~~
    //   const synth = new Tone.Synth().toDestination()
    //   synth.triggerAttackRelease("C4", "8n")
})
