/// <reference path="./index.ts" />
var RemotezipPlugins;
(function (RemotezipPlugins) {
    RemotezipPlugins.init = function () {
        var plugins = {
            beautylog: require("beautylog"),
            gulp: require("gulp"),
            g: {
                unzip: require("gulp-unzip"),
                remoteSrc: require("gulp-remote-src")
            },
            path: require("path")
        };
        return plugins;
    };
})(RemotezipPlugins || (RemotezipPlugins = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW90ZXppcC5wbHVnaW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUNuQyxJQUFPLGdCQUFnQixDQWF0QjtBQWJELFdBQU8sZ0JBQWdCLEVBQUMsQ0FBQztJQUNWLHFCQUFJLEdBQUc7UUFDZCxJQUFJLE9BQU8sR0FBRztZQUNWLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQy9CLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3JCLENBQUMsRUFBQztnQkFDRSxLQUFLLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQztnQkFDNUIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQzthQUN4QztZQUNELElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ3hCLENBQUM7UUFDRixNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUMsQ0FBQTtBQUNMLENBQUMsRUFiTSxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBYXRCIiwiZmlsZSI6InJlbW90ZXppcC5wbHVnaW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW5kZXgudHNcIiAvPlxubW9kdWxlIFJlbW90ZXppcFBsdWdpbnMge1xuICAgIGV4cG9ydCB2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGx1Z2lucyA9IHtcbiAgICAgICAgICAgIGJlYXV0eWxvZzogcmVxdWlyZShcImJlYXV0eWxvZ1wiKSxcbiAgICAgICAgICAgIGd1bHA6IHJlcXVpcmUoXCJndWxwXCIpLFxuICAgICAgICAgICAgZzp7XG4gICAgICAgICAgICAgICAgdW56aXA6IHJlcXVpcmUoXCJndWxwLXVuemlwXCIpLFxuICAgICAgICAgICAgICAgIHJlbW90ZVNyYzogcmVxdWlyZShcImd1bHAtcmVtb3RlLXNyY1wiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IHJlcXVpcmUoXCJwYXRoXCIpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBwbHVnaW5zO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
