var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LLR SCENE
var scenes;
(function (scenes) {
    var llrScene = (function (_super) {
        __extends(llrScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function llrScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        llrScene.prototype.start = function () {
            // add LLR Scene Image
            this._SceneImage = new createjs.Bitmap("../../Assets/images/Falling.jpg");
            this.addChild(this._SceneImage);
            // add the START_OVER button to the LLRScene scene -----------------------------------------------------------------------------------------------
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        llrScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        llrScene.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return llrScene;
    })(objects.Scene);
    scenes.llrScene = llrScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=LLRScene.js.map