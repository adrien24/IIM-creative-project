type ViewPort = {
    width: number,
    height: number,
    aspectRatio: number
}
export default {
    methods: {
        /**
         * @param container (this.container)
         * @author tristanseclet@icloud.com
         **/
        setViewportSize(container: HTMLElement): ViewPort {
            /**
             * The viewport corresponds to the canvas of the scene (container)
             * the width of the viewport must always be initialized to the width of the screen (container.clientWidth)
             * the height of the viewport must always be set to the height of the screen (container.clientHeight)
             **/

            const width: number = container.clientWidth;
            const height: number = container.clientHeight;
            const aspectRatio: number = width / height;

            return {
                width,
                height,
                aspectRatio,
            };

        },
    },

};



