import Modifiers from "../util/Modifiers";


export default class Toreus {

    // Public Properties
    name = ''
    diameter;
    thickness;
    tesselation;

    // Private Properties
    _mesh;
    _scene = ''

    // methods
    get = () => {return this /* Refactor to select this mesh from it's scene by name; otherwise redundant */}
    kill = () => {this._mesh.dispose()}

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
