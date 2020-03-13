"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = __importStar(require("./smartarchive.plugins"));
class SmartArchive {
    constructor() { }
    extractArchiveFromFilePath(filePathArg, targetDir) {
        const parsedPath = plugins.path.parse(filePathArg);
        switch (parsedPath.ext) {
        }
    }
    ;
}
exports.SmartArchive = SmartArchive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhcmNoaXZlLmNsYXNzZXMuc21hcnRhcmNoaXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRhcmNoaXZlLmNsYXNzZXMuc21hcnRhcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdFQUFrRDtBQUVsRCxNQUFhLFlBQVk7SUFFdkIsZ0JBQWUsQ0FBQztJQUVULDBCQUEwQixDQUFDLFdBQW1CLEVBQUUsU0FBaUI7UUFDdEUsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkQsUUFBUSxVQUFVLENBQUMsR0FBRyxFQUFFO1NBRXZCO0lBQ0gsQ0FBQztJQUFBLENBQUM7Q0FDSDtBQVZELG9DQVVDIn0=