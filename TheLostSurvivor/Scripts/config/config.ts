module config {

    // Scene Constants
    export class Scene {
        public static INTRO: number = 0;
        //public static LEFT_CAVE: number = 1;
        //public static RIGHT_CAVE: number = 2;
        public static L_Scene: number = 1;
        public static R_Scene: number = 2;

        public static LL_Scene: number = 3;
        public static LR_Scene: number = 4;
        public static RL_Scene: number = 5;
        public static RR_Scene: number = 6;

        public static LLL_Scene: number = 7;
        public static LLR_Scene: number = 8;
        public static LRL_Scene: number = 9;
        public static LRR_Scene: number = 10;

        public static RLL_Scene: number = 11;
        public static RLR_Scene: number = 12;
        public static RRL_Scene: number = 13;
        public static RRR_Scene: number = 14;

    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}