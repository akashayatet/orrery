import Modifiers from "../util/Modifiers.js";

class Toreus {

    // Public Properties
    name = ''
    diameter;
    thickness;
    tesselation;

    // Private Properties
    _mesh;
    _scene = ''

    // methods
    rotate = (orientation) => {} 
    x = (newX) => {this._mesh.position.x = Modifiers.X_ROOT + newX}
    y = (newY) => {this._mesh.position.y = Modifiers.Y_ROOT + newY}
    z = (newZ) => {}
    kill = () => {this._mesh.dispose()}
    getMesh = () => {return this._mesh /* Refactor to select this mesh from it's scene by name; otherwise redundant */}
    setColor = (colorName) => {this._mesh.material = Modifiers[colorName.toUpperCase()].MATTER}
    duplicate = (newName, newScene) => {return new Toreus(this.diameter, this.thickness, this.tesselation, newName, newScene)}

    constructor (diameter, thickness, tesselation, tName, targetScene) {

        this.name = tName
        this._scene = targetScene
        this.diameter = diameter
        this.thickness = thickness
        this.tesselation = tesselation
        let geometry = {
            diameter: Modifiers.OMEGA_DIA + this.diameter ? this.diameter : 0,
            thickness: (Modifiers.RAD(Modifiers.OMEGA_DIA)*(thickness ? thickness : 0)),
            tessellation: Modifiers.TOREUS_T + (tesselation ? tesselation : 0) // Also affects color depth
        }
        this._mesh = BABYLON.MeshBuilder.CreateTorus(tName, geometry, targetScene)
    }
}
export default Toreus