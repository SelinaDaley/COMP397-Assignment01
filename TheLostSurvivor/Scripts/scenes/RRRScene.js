var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// RRR SCENE
var scenes;
(function (scenes) {
    var rrrScene = (function (_super) {
        __extends(rrrScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function rrrScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        rrrScene.prototype.start = function () {
            // add RRR Scene Image
            this._SceneImage = new createjs.Bitmap("../../Assets/images/Car.jpg");
            this.addChild(this._SceneImage);
            // add the START_OVER button to the RRRScene scene -----------------------------------------------------------------------------------------------
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        rrrScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        rrrScene.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return rrrScene;
    })(objects.Scene);
    scenes.rrrScene = rrrScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=RRRScene.js.map