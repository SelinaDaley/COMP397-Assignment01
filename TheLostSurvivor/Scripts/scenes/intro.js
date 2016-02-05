var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Intro = (function (_super) {
        __extends(Intro, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Intro() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Intro.prototype.start = function () {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/Plane.jpg");
            this.addChild(this._introImage);
            // add the LEFT button to the MENU scene
            this._leftButton = new objects.Button("LeftButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftButton);
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);
            // add the RIGHT button to the MENU scene
            this._rightButton = new objects.Button("RightButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightButton);
            // RIGHT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Intro.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT Button click event handler
        Intro.prototype._leftButtonClick = function (event) {
            // Switch to the L Scene
            scene = config.Scene.L_Scene;
            changeScene();
        };
        // RIGHT Button click event handler
        Intro.prototype._rightButtonClick = function (event) {
            // Switch to the R Scene
            scene = config.Scene.R_Scene;
            changeScene();
        };
        return Intro;
    })(objects.Scene);
    scenes.Intro = Intro;
})(scenes || (scenes = {}));
