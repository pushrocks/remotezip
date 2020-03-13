"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// node native scope
const path_1 = __importDefault(require("path"));
exports.path = path_1.default;
// @pushrocks scope
const smartfile = __importStar(require("@pushrocks/smartfile"));
exports.smartfile = smartfile;
const smartpath = __importStar(require("@pushrocks/smartpath"));
exports.smartpath = smartpath;
// third party scope
const tar_1 = __importDefault(require("tar"));
exports.tar = tar_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhcmNoaXZlLnBsdWdpbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGFyY2hpdmUucGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsZ0RBQXdCO0FBRWYsZUFGRixjQUFJLENBRUU7QUFFYixtQkFBbUI7QUFDbkIsZ0VBQWtEO0FBR3pDLDhCQUFTO0FBRmxCLGdFQUFrRDtBQUU5Qiw4QkFBUztBQUU3QixvQkFBb0I7QUFDcEIsOENBQXNCO0FBRWIsY0FGRixhQUFHLENBRUUifQ==