// INTRO SCENE
module scenes {
    export class Intro extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _introImage: createjs.Bitmap;
        private _leftButton: objects.Button;
        private _rightButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/Plane.jpg");
            this.addChild(this._introImage);
            
            // add the LEFT button to the MENU scene
            this._leftButton = new objects.Button(
                "LeftButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._leftButton);
            
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);
            
            // add the RIGHT button to the MENU scene
            this._rightButton = new objects.Button(
                "RightButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rightButton);
            
            // RIGHT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT Button click event handler
        private _leftButtonClick(event: createjs.MouseEvent) {
            // Switch to the L Scene
            scene = config.Scene.L_Scene;
            changeScene();
        }
        
        // RIGHT Button click event handler
        private _rightButtonClick(event: createjs.MouseEvent) {
            // Switch to the R Scene
            scene = config.Scene.R_Scene;
            changeScene();
        }
    }
}