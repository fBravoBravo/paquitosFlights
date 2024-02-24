"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
function getToken() {
    return __awaiter(this, void 0, void 0, function* () {
        let headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
        const body = {
            grant_type: "client_credentials",
            client_id: process.env.API_KEY,
            client_secret: process.env.API_SECRET,
        };
        const uriAuth = "https://test.api.amadeus.com/v1/security/oauth2/token";
        //init token
        const response = yield fetch(uriAuth, {
            method: "POST",
            headers: headers,
            body: "grant_type=client_credentials&client_id=" +
                body.client_id +
                "&client_secret=" +
                body.client_secret,
        });
        const data = yield response.json();
        const token = data.access_token;
        const bearerString = `Bearer ${token}`;
        return bearerString;
    });
}
exports.getToken = getToken;
