var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LRL SCENE
var scenes;
(function (scenes) {
    var lrlScene = (function (_super) {
        __extends(lrlScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function lrlScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        lrlScene.prototype.start = function () {
            // add LRL Scene Image
            this._SceneImage = new createjs.Bitmap("../../Assets/images/BlackBear.jpg");
            this.addChild(this._SceneImage);
            // add the START_OVER button to the LRLScene scene -----------------------------------------------------------------------------------------------
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        lrlScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        lrlScene.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return lrlScene;
    })(objects.Scene);
    scenes.lrlScene = lrlScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=LRLScene.js.map