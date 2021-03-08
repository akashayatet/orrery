class Modifiers {
    // The target scene for a given Modifiers instance
    _scene = ''

    /* Verbosity bump of inbuilt Babylon method - converts degrees to radians */
    RAD = (fromDegrees) => { return BABYLON.Tools.ToRadians(fromDegrees) }

    /* Global/Scene X & Y Axis Roots */
    X_ROOT      = 2
    Y_ROOT      = 1
    Z_ROOT      = 0     // Global Center in case of top-down only view

    /* Anti-Aliasing Preference */
    A_ALIAS     = true

    /* Shape Complexity Modifiers */
    TOREUS_T    = 12    // Tesselations
    SPHERA_S    = 12    // Segments
    OMEGA_DIA   = 2     // Global Diameter Ratio Constant

    /* Red|Blue Shifters */
    DOPPLER     = 0.00  // Anaglyph depth

    /* Merkabah Spectrum Color & Material Constants WARN: This breaks Babylon for some reason DO NOT USE*/
    MERKABA = {       
        BLACK: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Purple(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: () => {
                const black = new BABYLON.StandardMaterial(this._scene)
                black.alpha = ENERGY
                black.emissiveColor = LIGHT
                return black
            }
        },
        WHITE: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.White(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: () => {return _MATERIAL(LIGHT, ENERGY, this._scene)}
        },
        YELLOW: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Yellow(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: () => {return _MATERIAL(LIGHT, ENERGY, this._scene)}
        },
        BLUE: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Blue(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: () => {return _MATERIAL(LIGHT, ENERGY, this._scene)}
        },
        TEAL: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Teal(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: () => {return _MATERIAL(LIGHT, ENERGY, this._scene)}
        },
        MAGENTA: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Red(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: () => {return _MATERIAL(LIGHT, ENERGY, this._scene)}
        },
        PURPLE: {
            ENERGY: 1.00,
            LIGHT: new BABYLON.Color3.Magenta(), // May need to be diffuseColor instead
            SOUND: '',
            MATTER: () => {return _MATERIAL(LIGHT, ENERGY, this._scene)}
        }
    }
    

    constructor (targetScene) {
        this._scene = targetScene
    }
}
export default Modifiers