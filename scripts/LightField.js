import Toreus from "./classes/Toreus.js";
import Modifiers from "./util/Modifiers.js"


window.addEventListener('DOMContentLoaded', () => {
    
    // Modifiers & Constants
    let MODS;
    const MERKABA = { /* Alpha Values for each MerKahBah Spectrum Band */
    // WARNING: Moving this to Modifiers.js breaks Babylon for some unknown reason. Keep here for now.
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

    // TODO: Replace with Sphera class; the following should be returned by OBJECT.getGeometry()
    const SPHERA_GEO = {
        diameter: new Modifiers().OMEGA_DIA*0.618,   /* Should be sized to match a subset ratio of a Toreus boundary */
        segments: new Modifiers().SPHERA_S
    }

    // Target the mindfield
    const mField = document.getElementById('mindfield')
    mField.width = window.innerWidth
    mField.height = window.innerHeight

    // Create GPU Engine
    const engine = new BABYLON.Engine(mField, Modifiers.A_ALIAS)

    // --- Oscillation Tuning  & Experiments --- \\
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
    
    // Instantiate TransformNodes to manifest movement of forms
    const waveForms = [
        {current: 0, limit: 12, peaked: false},
        {current: 0, limit: 13, peaked: false},
        {current: 0, limit: 14, peaked: false},
        {current: 0, limit: 15, peaked: false},
        {current: 0, limit: 16, peaked: false},
        {current: 0, limit: 17, peaked: false},
        {current: 0, limit: 18, peaked: false}
    ]
    // --- Oscillation Tuning  & Experiments --- \\

    // Generate scene
    const createScene = () => {
        let scene = new BABYLON.Scene(engine)
        scene.clearColor = new BABYLON.Color3.Black()

        // Instantiate Modifiers for this scene
        MODS = new Modifiers(scene)

        // Scene-specific Values
        const XPOS_1 = -MODS.X_ROOT
        const XPOS_2 = +MODS.X_ROOT

        // TargetCamera and sphere shapes produce the pseudo-2D top-down view of circles
        const eye = new BABYLON.TargetCamera('eye', new BABYLON.Vector3(0, 36, 0), scene)
        eye.setTarget(new BABYLON.Vector3(15, -720, 0))

        // Generate Protoglyphics (if needed)

        // Generate the Rayarc, Toreus & Spheras for the Ayat
        /* THE AYAT * The sun and moon aspects of the three elements; the organs of the atet.
         * {BLCK} :~: WHTE :~: Blue • Teal • White • Yellow • Magenta • Purple
         * A.K.A. MerKahBah Spectrum
         */
        const black = new BABYLON.StandardMaterial(scene) // Material only needs to be defined once
        black.alpha = MERKABA.BLCK.ALPHA
        black.emissiveColor = MERKABA.BLCK.COLOR // May need to be diffuseColor instead
        const white = new BABYLON.StandardMaterial(scene)
        white.alpha = MERKABA.WHTE.ALPHA
        white.emissiveColor = MERKABA.WHTE.COLOR
        const yellow = new BABYLON.StandardMaterial(scene)
        yellow.alpha = MERKABA.YLLW.ALPHA
        yellow.emissiveColor = MERKABA.YLLW.COLOR
        const blue = new BABYLON.StandardMaterial(scene)
        blue.alpha = MERKABA.BLUE.ALPHA
        blue.emissiveColor = MERKABA.BLUE.COLOR
        const teal = new BABYLON.StandardMaterial(scene)
        teal.alpha = MERKABA.TEAL.ALPHA
        teal.emissiveColor = MERKABA.TEAL.COLOR
        const magenta = new BABYLON.StandardMaterial(scene)
        magenta.alpha = MERKABA.MGNT.ALPHA
        magenta.emissiveColor = MERKABA.MGNT.COLOR
        const purple = new BABYLON.StandardMaterial(scene)
        purple.alpha = MERKABA.PURP.ALPHA
        purple.emissiveColor = MERKABA.PURP.COLOR
        
        let theThiccness = 0.22

        // Akali Atet Toreus - Black / Death
        // const nToreus1 = BABYLON.MeshBuilder.CreateTorus('nToreus1', TOREUS(waveForms[0].current, theThiccness), scene)
        const nToreus1 = new Toreus(waveForms[0].current, theThiccness, 0, 'nToreus1', scene)
        const nToreus2 = new Toreus(waveForms[0].current, theThiccness, 0, 'nToreus2', scene)
        nToreus1.y(0)
        nToreus2.y(0)
        nToreus1.x(XPOS_1)
        nToreus2.x(XPOS_2)
        // Figure out what these do and how to make them work
        // nToreus2.outlineColor = new BABYLON.Color3(1, 1, 1)
        // nToreus2.outlineWidth = 1
        // overlayAlpha: 0.5
        // overlayColor: {…}
        nToreus2.matter(black)
        nToreus1.matter(black) // n is for nULL

        // Akosh Atet Toreus - White / Life ::: g is for gAIA
        const gToreus1 = new Toreus(waveForms[1].current, theThiccness, 0, 'gToreus1', scene)
        const gToreus2 = new Toreus(waveForms[1].current, theThiccness, 0, 'gToreus2', scene)
        if (waveForms[1].peaked) {
            gToreus1.kill()
            gToreus2.kill()
        } else {
            gToreus1.y(0.01)
            gToreus2.y(0.01)
            gToreus1.x(MODS.DOPPLER+XPOS_1)
            gToreus2.x(MODS.DOPPLER+XPOS_2)
            gToreus1.matter(white)
            gToreus2.matter(white)
        }

        // Aura Atet Toreus - Yellow / Air / Subliminal ::: m is for mAIA
        const mToreus1 = new Toreus(waveForms[2].current, theThiccness, 0, 'mToreus1', scene)
        const mToreus2 = new Toreus(waveForms[2].current, theThiccness, 0, 'mToreus2', scene)
        if (waveForms[2].peaked) {
            mToreus1.kill()
            mToreus2.kill()
        } else {
            mToreus1.y(-0.01)
            mToreus2.y(-0.01)
            mToreus1.x((MODS.DOPPLER+MODS.DOPPLER)+XPOS_1)
            mToreus2.x((MODS.DOPPLER+MODS.DOPPLER)+XPOS_2)
            mToreus2.matter(yellow)
            mToreus1.matter(yellow)
        }

        // Cryo Atet Toreus - Blue / Water / Darkness ::: a is for aBYSS
        const aToreus1 = new Toreus(waveForms[3].current, theThiccness, 0, 'aToreus1', scene)
        const aToreus2 = new Toreus(waveForms[3].current, theThiccness, 0, 'aToreus2', scene)
        if (waveForms[3].peaked) {
            aToreus1.kill()
            aToreus2.kill()
        } else {
            aToreus1.y(-0.02)
            aToreus2.y(-0.02)
            aToreus1.x(-(MODS.DOPPLER+MODS.DOPPLER)+XPOS_1)
            aToreus2.x(-(MODS.DOPPLER+MODS.DOPPLER)+XPOS_2)
            aToreus2.matter(blue)
            aToreus1.matter(blue)
        }

        // Zero Atet Toreus - Teal / Vaccuum / Plenum ::: z is for zERO-POINT
        const zToreus1 = new Toreus(waveForms[4].current, theThiccness, 0, 'zToreus1', scene)
        const zToreus2 = new Toreus(waveForms[4].current, theThiccness, 0, 'zToreus2', scene)
        if (waveForms[4].peaked) {
            zToreus1.kill()
            zToreus2.kill()
        } else {
            zToreus1.y(-0.03)
            zToreus2.y(-0.03)
            zToreus1.x(-MODS.DOPPLER+XPOS_1)
            zToreus2.x(-MODS.DOPPLER+XPOS_2)
            zToreus2.matter(teal)
            zToreus1.matter(teal)
        }

        // Pyro Atet Toreus - Magenta / Fire / Light ::: p is for pLASMA
        const pToreus1 = new Toreus(waveForms[5].current, theThiccness, 0, 'pToreus1', scene)
        const pToreus2 = new Toreus(waveForms[5].current, theThiccness, 0, 'pToreus2', scene)
        if (waveForms[5].peaked) {
            pToreus1.kill()
            pToreus2.kill()
        } else {
            pToreus1.y(-0.04)
            pToreus2.y(-0.04)
            pToreus1.x(MODS.DOPPLER+XPOS_1)
            pToreus2.x(MODS.DOPPLER+XPOS_2)
            pToreus2.matter(magenta)
            pToreus1.matter(magenta)
        }

        // Zon Atet Toreus - Purple / Chaos / Transmutation ::: o is for oMEGA
        const oToreus1 = new Toreus(waveForms[6].current, theThiccness, 0, 'oToreus1', scene)
        const oToreus2 = new Toreus(waveForms[6].current, theThiccness, 0, 'oToreus2', scene)
        if (waveForms[6].peaked) {
            oToreus1.kill()
            oToreus2.kill()
        } else {
            oToreus1.y(-0.05)
            oToreus2.y(-0.05)
            oToreus1.x((MODS.DOPPLER+MODS.DOPPLER)+XPOS_1)
            oToreus2.x((MODS.DOPPLER+MODS.DOPPLER)+XPOS_2)
            oToreus2.matter(purple)
            oToreus1.matter(purple)
        }

        // Akali Sphera
        // Akosh Atet Sphera - White / Life
        const gSphera1 = BABYLON.MeshBuilder.CreateSphere('gSphera', SPHERA_GEO, scene)
        const gSphera2 = BABYLON.MeshBuilder.CreateSphere('gSphera', SPHERA_GEO, scene)
        gSphera1.position.y = MODS.Y_ROOT
        gSphera2.position.y = MODS.Y_ROOT
        gSphera1.position.x = MODS.X_ROOT+XPOS_1
        gSphera2.position.x = MODS.X_ROOT+XPOS_2
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
            } else {
                wave.current = 0
                wave.peaked = false
            }
        })
        
        // Iterate Scene
        createScene().render()
      })

      // •)) Synesthesia ~~
    //   const synth = new Tone.Synth().toDestination()
    //   synth.triggerAttackRelease("C4", "8n")
})
