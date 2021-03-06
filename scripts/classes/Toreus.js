import Modifiers from "../util/Modifiers.js";

class Toreus {
    // Public Properties
    name = ''
    
    // Private Properties
    _mesh;
    _scene;
    _geometry = {
        diameter: 0,
        thickness: 0,
        tessellation: 0
    }

    // methods
    getMesh = () => {
        /* To avoid duplicates, should check this._scene for an instance of this._name 
         * and dispose of that before creating a new one. Once I can figure out how to search by name.
         * This can also be leveraged to avoid having to create a new mesh every time getMesh() is called.
         */
        let newMesh = BABYLON.MeshBuilder.CreateTorus(this.name, this._geometry, this._scene)
        if (!this._mesh || this._mesh !== newMesh) {/* absolute equals necessary here */
            // Purge old mesh from memory & replace it
            this.mesh && this._mesh.dispose()
            this._mesh = newMesh
        } else {
            // Discard new mesh
            newMesh.dispose()
        }
        return this._mesh
    }

    rotate = (alpha, beta, gamma) => {this._mesh.rotation = new BABYLON.Vector3(alpha, beta, gamma)}
    x = (newX) => {this._mesh.position.x = new Modifiers().X_ROOT + newX}
    y = (newY) => {this._mesh.position.y = new Modifiers().Y_ROOT + newY}
    z = (newZ) => {this._mesh.position.z = new Modifiers().Z_ROOT + newZ}

    kill = () => {this._mesh.dispose()}
    duplicate = (newName, newScene) => {return new Toreus(this.diameter, this.thickness, this.tesselation, newName, newScene)}
    
    getGeometry = () => {return this._geometry}
    updateGeometry = (diameter, thickness, tessellation) => {
        this._geometry.diameter = diameter
        this._geometry.thickness = thickness
        this._geometry.tessellation = tessellation
        return this.getMesh()
    }
    updateDiameter = (newDiameter) => {this._geometry.diameter = newDiameter}
    updateThickness = (newThickness) => {this._geometry.thickness = newThickness}
    updateTessellations = (newTessellation) => {this._geometry.tessellation = newTessellation}
    matter = (meshMaterial) => {this._mesh.material = meshMaterial}

    constructor (diameter, thickness, tessellation, tName, targetScene) {
        this.name = tName
        this._scene = targetScene
        let MODS = new Modifiers()
        let baseDiameter = MODS.OMEGA_DIA
        this._geometry = {
            diameter: baseDiameter + (diameter ? diameter : 0),
            thickness: (MODS.RAD(baseDiameter) * MODS.TOREUS_T) + (thickness ? thickness : 0),
            tessellation: MODS.TOREUS_T + (tessellation ? tessellation : 0)
            // NOTE: Tessellation also impacts color depth
        }
        this.getMesh()
    }
}
export default Toreus