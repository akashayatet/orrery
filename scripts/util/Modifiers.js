export default class Modifiers {
    /* Verbosity bump of inbuilt Babylon method - converts degrees to radians */
    RAD = (fromDegrees) => { return BABYLON.Tools.ToRadians(fromDegrees) }

    /* Global/Scene X & Y Axis Roots */
    X_ROOT      = 2
    Y_ROOT      = 1
    Z_ROOT      = 0     // Global Center in case of top-down only view

    /* Anti-Aliasing Preference */
    A_ALIAS     = true

    /* Shape Complexity Modifiers */
    TOREUS_T    = 27    // Tesselations
    SPHERA_S    = 12    // Segments
    OMEGA_DIA   = 2     // Global Diameter Ratio Constant

    /* Red|Blue Shifters */
    DOPPLER     = 0.00  // Anaglyph depth

    /* Merkabah Spectrum Color & Material Constants */
    MERKABA = {       
        _MATERIAL: (_spectrum, _energy, targetScene) => {
            const material = new BABYLON.StandardMaterial(targetScene)
            material.alpha = energy
            material.emissiveColor = spectrum
            return material
        },
        BLCK: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Purple(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: (targetScene) => {return _MATERIAL(this.LIGHT, this.ENERGY, targetScene)}
        },
        WHTE: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.White(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: (targetScene) => {return _MATERIAL(this.LIGHT, this.ENERGY, targetScene)}
        },
        YLLW: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Yellow(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: (targetScene) => {return _MATERIAL(this.LIGHT, this.ENERGY, targetScene)}
        },
        BLUE: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Blue(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: (targetScene) => {return _MATERIAL(this.LIGHT, this.ENERGY, targetScene)}
        },
        TEAL: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Teal(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: (targetScene) => {return _MATERIAL(this.LIGHT, this.ENERGY, targetScene)}
        },
        MGNT: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Red(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: (targetScene) => {return _MATERIAL(this.LIGHT, this.ENERGY, targetScene)}
        },
        PURP: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Magenta(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: (targetScene) => {return _MATERIAL(this.LIGHT, this.ENERGY, targetScene)}
        }
    }
    
    // Placed at EOF for emphasis on properties as these are meant to be called directly
    constructor () {
        console.warn('The Modifiers class is not intended to be instantiated via constructor.')
        return this
    }
}