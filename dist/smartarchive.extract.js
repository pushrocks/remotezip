"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartarchive.plugins");
exports.toFS = function (options) {
    if (!plugins.path.isAbsolute(options.toPath)) {
        plugins.beautylog.error('Please supply remotezip with an absolute path');
        return;
    }
    ;
    plugins.gulp.task('remotezip', function () {
        plugins.beautylog.log('Now trying to download and extract...');
        let stream = plugins.g.remoteSrc(['master.zip'], {
            base: 'https://github.com/UmbrellaZone/legaldocs/archive/'
        })
            .pipe(plugins.g.unzip())
            .pipe(plugins.gulp.dest(options.toPath));
        return stream;
    });
    plugins.gulp.task('default', ['remotezip'], function () {
        plugins.beautylog.success('Download complete and archive extracted');
        if (typeof options.cb === 'function') {
            options.cb();
        }
        ;
    });
    plugins.gulp.start.apply(plugins.gulp, ['default']);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhcmNoaXZlLmV4dHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGFyY2hpdmUuZXh0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFrRDtBQUN2QyxRQUFBLElBQUksR0FBRyxVQUFVLE9BQTZDO0lBRXZFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFBO1FBQ3hFLE1BQU0sQ0FBQTtJQUNSLENBQUM7SUFBQSxDQUFDO0lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQzdCLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7UUFDOUQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBRSxZQUFZLENBQUUsRUFBRTtZQUNqRCxJQUFJLEVBQUUsb0RBQW9EO1NBQzNELENBQUM7YUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQTtJQUNmLENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUUsV0FBVyxDQUFFLEVBQUU7UUFDNUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQTtRQUNwRSxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUE7UUFDZCxDQUFDO1FBQUEsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBRSxTQUFTLENBQUUsQ0FBQyxDQUFBO0FBQ3ZELENBQUMsQ0FBQSJ9