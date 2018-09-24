"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const request_promise_1 = __importDefault(require("request-promise"));
class mykoobAPI {
    constructor() {
        this.timeout = 10000;
        this.filter = true;
    }
    authorize(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield request_promise_1.default({
                method: "POST",
                timeout: this.timeout,
                url: "https://www.mykoob.lv/?oauth2/authorizeDevice",
                form: {
                    use_oauth_proxy: 1,
                    client: "MykoobMobile",
                    username: data.username,
                    password: data.password
                }
            });
            let parsedResponse = JSON.parse(response);
            if (this.filter) {
                delete parsedResponse.token_type;
                delete parsedResponse.refresh_token;
                delete parsedResponse.scope;
            }
            return parsedResponse;
        });
    }
    apisDetailed(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield request_promise_1.default({
                method: "POST",
                timeout: this.timeout,
                url: "https://www.mykoob.lv//?api/resource",
                form: {
                    api: "all_device_apis_detailed",
                    access_token: token,
                }
            });
            let parsedResponse = JSON.parse(response);
            if (this.filter) {
                for (let index in parsedResponse) {
                    delete parsedResponse[index].in;
                    delete parsedResponse[index].out;
                    delete parsedResponse[index].errors;
                }
                delete parsedResponse.register_device;
                delete parsedResponse.unregister_device;
                delete parsedResponse.notification_settings;
            }
            return parsedResponse;
        });
    }
    userData(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield request_promise_1.default({
                method: "POST",
                timeout: this.timeout,
                url: "https://www.mykoob.lv//?api/resource",
                form: {
                    api: "user_data",
                    access_token: token,
                }
            });
            return JSON.parse(response);
        });
    }
    userActivities(token, config) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield request_promise_1.default({
                method: "POST",
                timeout: this.timeout,
                url: "https://www.mykoob.lv//?api/resource",
                form: {
                    api: "user_activities",
                    access_token: token,
                    date_from: config.from,
                    date_to: config.to
                }
            });
            return JSON.parse(response);
        });
    }
    lessonsPlan(token, config) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield request_promise_1.default({
                method: "POST",
                timeout: this.timeout,
                url: "https://www.mykoob.lv//?api/resource",
                form: {
                    api: "user_lessonsplan",
                    access_token: token,
                    date_from: config.from,
                    date_to: config.to,
                    school_classes_id: config.classesID,
                    school_user_id: config.userID
                }
            });
            return JSON.parse(response);
        });
    }
}
module.exports = mykoobAPI;
