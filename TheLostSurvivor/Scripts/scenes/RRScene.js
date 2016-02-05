var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LL SCENE
var scenes;
(function (scenes) {
    var rrScene = (function (_super) {
        __extends(rrScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function rrScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        rrScene.prototype.start = function () {
            // add RR Scene Image
            this._SceneImage = new createjs.Bitmap("../../Assets/images/River.jpg");
            this.addChild(this._SceneImage);
            // add the LEFT button to the RRScene scene -----------------------------------------------------------------------------------------------
            this._leftButton = new objects.Button("LeftButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftButton);
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);
            // add the Right button to the RRScene scene ----------------------------------------------------------------------------------------------
            this._rightButton = new objects.Button("RightButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightButton);
            // RIGHT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        rrScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT Scene Button click event handler
        rrScene.prototype._leftButtonClick = function (event) {
            // Switch to the RRL Scene
            scene = config.Scene.RRL_Scene;
            changeScene();
        };
        // RIGHT Scene Button click event handler
        rrScene.prototype._rightButtonClick = function (event) {
            // Switch to the RRR Scene
            scene = config.Scene.RRR_Scene;
            changeScene();
        };
        return rrScene;
    })(objects.Scene);
    scenes.rrScene = rrScene;
})(scenes || (scenes = {}));