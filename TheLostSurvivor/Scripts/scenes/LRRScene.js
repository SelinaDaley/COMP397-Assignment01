var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LRR SCENE
var scenes;
(function (scenes) {
    var lrrScene = (function (_super) {
        __extends(lrrScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function lrrScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        lrrScene.prototype.start = function () {
            // add LRR Scene Image
            this._SceneImage = new createjs.Bitmap("../../Assets/images/Snake.jpg");
            this.addChild(this._SceneImage);
            // add the START_OVER button to the LRRScene scene -----------------------------------------------------------------------------------------------
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        lrrScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        lrrScene.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return lrrScene;
    })(objects.Scene);
    scenes.lrrScene = lrrScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=LRRScene.js.map