"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("nodemailer");
const environments_1 = require("../../environments");
function sendEmail(options) {
    console.log(process.env.SENDER_EMAIL, process.env.SENDER_PASSWORD);
    return new Promise(function (resolve, reject) {
        const transporter = nodemailer_1.createTransport({
            service: "gmail",
            auth: {
                user: environments_1.config.SENDER_EMAIL,
                pass: environments_1.config.SENDER_PASSWORD
            }
        });
        transporter.sendMail({
            from: 'RAP TEAM',
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html
        }, function (error, info) {
            if (error)
                return reject(error);
            resolve(info);
        });
    });
}
exports.sendEmail = sendEmail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS91dGlscy9lbWFpbC9zZW5kLnRzIiwic291cmNlcyI6WyIvaG9tZS9hcHBpbnZlbnRpdnJoLTA1OC9Bc2hpc2gtd29yay9yY2MvYXBpL3V0aWxzL2VtYWlsL3NlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkM7QUFDN0MscURBQTJDO0FBUzNDLG1CQUEwQixPQUFvQjtJQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO1FBQ3ZDLE1BQU0sV0FBVyxHQUFHLDRCQUFlLENBQUM7WUFDaEMsT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxxQkFBTSxDQUFDLFlBQVk7Z0JBQ3pCLElBQUksRUFBRSxxQkFBTSxDQUFDLGVBQWU7YUFDL0I7U0FDSixDQUFDLENBQUM7UUFDSCxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ2pCLElBQUksRUFBRSxVQUFVO1lBQ2hCLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNkLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztZQUN4QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ3JCLEVBQUUsVUFBUyxLQUFLLEVBQUUsSUFBSTtZQUNuQixJQUFJLEtBQUs7Z0JBQUUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBdEJELDhCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRyYW5zcG9ydCB9IGZyb20gJ25vZGVtYWlsZXInO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzJ1xuXG5pbnRlcmZhY2UgTWFpbE9wdGlvbnMge1xuICAgIHRvOiBzdHJpbmc7XG4gICAgc3ViamVjdDogc3RyaW5nO1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgaHRtbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRFbWFpbChvcHRpb25zOiBNYWlsT3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlNFTkRFUl9FTUFJTCwgcHJvY2Vzcy5lbnYuU0VOREVSX1BBU1NXT1JEKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgICAgICAgIHNlcnZpY2U6IFwiZ21haWxcIixcbiAgICAgICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgICAgICB1c2VyOiBjb25maWcuU0VOREVSX0VNQUlMLFxuICAgICAgICAgICAgICAgIHBhc3M6IGNvbmZpZy5TRU5ERVJfUEFTU1dPUkRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgICAgICAgIGZyb206ICdSQVAgVEVBTScsXG4gICAgICAgICAgICB0bzogb3B0aW9ucy50byxcbiAgICAgICAgICAgIHN1YmplY3Q6IG9wdGlvbnMuc3ViamVjdCxcbiAgICAgICAgICAgIHRleHQ6IG9wdGlvbnMudGV4dCxcbiAgICAgICAgICAgIGh0bWw6IG9wdGlvbnMuaHRtbFxuICAgICAgICB9LCBmdW5jdGlvbihlcnJvciwgaW5mbykge1xuICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVzb2x2ZShpbmZvKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbiJdfQ==