var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// RLR SCENE
var scenes;
(function (scenes) {
    var rlrScene = (function (_super) {
        __extends(rlrScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function rlrScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        rlrScene.prototype.start = function () {
            // add RLR Scene Image
            this._SceneImage = new createjs.Bitmap("../../Assets/images/Rock.jpg");
            this.addChild(this._SceneImage);
            // add the START_OVER button to the RLRScene scene -----------------------------------------------------------------------------------------------
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        rlrScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        rlrScene.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return rlrScene;
    })(objects.Scene);
    scenes.rlrScene = rlrScene;
})(scenes || (scenes = {}));
