window.addEventListener('DOMContentLoaded', () => {

    // Constants
    const RAD = (fromDegrees) => { return BABYLON.Tools.ToRadians(fromDegrees) } /* Verbosity bump */
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
    console.debug(`45 degrees in radians is ${RAD(45)}`)
    const TOREUS_GEO = {
        diameter: 2,
        thickness: 0.25,
        tessellation: 72
    }
    const SPHERA_GEO = {diameter: 2, segments: 32}

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
        scene.clearColor = new BABYLON.Color3.Black()

        // TargetCamera and sphere shapes produce the pseudo-2D top-down view of circles
        const eye = new BABYLON.TargetCamera('eye', new BABYLON.Vector3(0, 10, 0), scene)
        // This targets the eye to scene origin
        eye.setTarget(BABYLON.Vector3.Zero())

        // Generate the Toreus & Spheras
        
        // Atet Maxim Toreus - (M):::(C):::(Y):::({W})
        const wToreus = BABYLON.MeshBuilder.CreateTorus('wToreus', TOREUS_GEO, scene)
        wToreus.position.y = 1
        wToreus.position.x = 0
        const toreusWhite = new BABYLON.StandardMaterial(scene)
        toreusWhite.wireframe = 1
        toreusWhite.WireFrameFillMode = 0
        toreusWhite.alpha = 0.75
        toreusWhite.emissiveColor = new BABYLON.Color3.White()
        wToreus.material = toreusWhite

        // Aura Maxim Toreus
        const aToreus = BABYLON.MeshBuilder.CreateTorus('aToreus', TOREUS_GEO, scene)
        aToreus.position.y = 1
        aToreus.position.x = 0
        const toreusYellow = new BABYLON.StandardMaterial(scene)
        toreusYellow.wireframe = 1
        toreusYellow.WireFrameFillMode = 0
        toreusYellow.alpha = 0.010
        toreusYellow.emissiveColor = new BABYLON.Color3.Yellow()
        aToreus.material = toreusYellow

        // Cryo Maxium Toreus
        const cToreus = BABYLON.MeshBuilder.CreateTorus('cToreus', TOREUS_GEO, scene)
        cToreus.position.y = 1
        cToreus.position.x = -0.03
        const toreusTeal = new BABYLON.StandardMaterial(scene)
        toreusTeal.wireframe = 1
        toreusTeal.WireFrameFillMode = 0
        toreusTeal.alpha = 0.09
        toreusTeal.emissiveColor = new BABYLON.Color3.Teal()
        cToreus.material = toreusTeal

        // Pyro Maxim Toreus
        const pToreus = BABYLON.MeshBuilder.CreateTorus('pToreus', TOREUS_GEO, scene)
        pToreus.position.y = 1
        pToreus.position.x = 0.03
        const toreusMagenta = new BABYLON.StandardMaterial(scene)
        toreusMagenta.wireframe = 1
        toreusMagenta.WireFrameFillMode = 0
        toreusMagenta.alpha = 0.12
        toreusMagenta.emissiveColor = new BABYLON.Color3.Magenta()
        pToreus.material = toreusMagenta

        // Aura Maxim Sphera - (M):::(C):::({Y}):::(W)
        // const ySphera = SPHERA_GEN('ySphera', scene)
        // ySphera.position.y = globalSpheraPosition.superpositionY + 2
        // ySphera.position.x = globalSpheraPosition.fulcrumX - globalSpheraPosition.ecliptic
        // const spheraYellow = new BABYLON.StandardMaterial(scene)
        // spheraYellow.emissiveColor = new BABYLON.Color3.Yellow() // Yellowish
        // spheraYellow.useEmissive = false
        // ySphera.wireframe = 1
        // ySphera.alpha = 0.50
        // spheraYellow.alpha = 0.25
        // ySphera.material = spheraYellow

        // Cryo Maxim Sphera - (M):::({C}):::(Y):::(W)
        // const cSphera = SPHERA_GEN('cSphera', scene)
        // cSphera.position.y = globalSpheraPosition.superpositionY + 3
        // cSphera.position.x = globalSpheraPosition.blueshiftX
        // const spheraCyan = new BABYLON.StandardMaterial(scene) 
        // spheraCyan.emissiveColor = new BABYLON.Color3.Teal() // Tealish-Cyan
        // cSphera.wireframe = 1
        // cSphera.alpha = 256
        // spheraCyan.alpha = 0.25
        // cSphera.material = spheraCyan

        // Pyro Maxim Sphera - ({M}):::(C):::(Y):::(W)
        // const mSphera = SPHERA_GEN('mSphera', scene)
        // mSphera.position.y = globalSpheraPosition.superpositionY + 4
        // mSphera.position.x = globalSpheraPosition.redshiftX
        // const spheraMagent = new BABYLON.StandardMaterial(scene) 
        // spheraMagent.emissiveColor = new BABYLON.Color3.Magenta() // Magentlemandorlady
        // mSphera.wireframe = 1
        // mSphera.alpha = 0.25
        // spheraMagent.alpha = 0.25
        // mSphera.material = spheraMagent

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
