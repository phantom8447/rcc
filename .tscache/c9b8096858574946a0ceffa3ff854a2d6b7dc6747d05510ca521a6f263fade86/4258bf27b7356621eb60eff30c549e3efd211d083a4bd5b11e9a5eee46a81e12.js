"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const utils_1 = require("../../utils");
const bcrypt_1 = require("bcrypt");
const AdminSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    },
    statusCode: {
        type: Number,
        default: 0
    }
}, {
    collection: 'admins'
});
AdminSchema.pre('save', function (next) {
    const user = this;
    utils_1.hashPassword(user.password).then((hash) => {
        user.password = hash;
        next();
    }).catch(next);
});
AdminSchema.methods.verifyPassword = function (password) {
    return new Promise((resolve, reject) => {
        bcrypt_1.compare(password, this.password, function (err, isMatch) {
            if (err)
                return reject(err);
            resolve(isMatch);
        });
    });
};
exports.Admin = mongoose_1.model('admins', AdminSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9kYi9hZG1pbi9tb2RlbC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9kYi9hZG1pbi9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFnRDtBQUVoRCx1Q0FBMkM7QUFDM0MsbUNBQWlDO0FBRWpDLE1BQU0sV0FBVyxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUMzQixJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxHQUFHLEVBQUU7UUFDRCxJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtLQUN0QjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7S0FDdEI7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7Q0FDSixFQUFFO0lBQ0MsVUFBVSxFQUFFLFFBQVE7Q0FDdkIsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBUyxJQUFJO0lBQ2pDLE1BQU0sSUFBSSxHQUFRLElBQUksQ0FBQztJQUN2QixvQkFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILFdBQVcsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLFVBQVMsUUFBZ0I7SUFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQW1DLEVBQUUsTUFBNEIsRUFBRSxFQUFFO1FBQ3JGLGdCQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFVLEVBQUUsT0FBZ0I7WUFDbEUsSUFBSSxHQUFHO2dCQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBO0FBR1ksUUFBQSxLQUFLLEdBQTJCLGdCQUFLLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBBZG1pbkRvY3VtZW50IH0gZnJvbSAnLi9kb2N1bWVudCc7XG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0JztcblxuY29uc3QgQWRtaW5TY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHVzZXJuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGRvYjoge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY3JlYXRlZE9uOiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIGRlZmF1bHQ6IERhdGUubm93KClcbiAgICB9LFxuICAgIHVwZGF0ZWRPbjoge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBkZWZhdWx0OiBEYXRlLm5vdygpXG4gICAgfSxcbiAgICBzdGF0dXNDb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgIH1cbn0sIHtcbiAgICBjb2xsZWN0aW9uOiAnYWRtaW5zJ1xufSk7XG5cbkFkbWluU2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uKG5leHQpIHtcbiAgICBjb25zdCB1c2VyOiBhbnkgPSB0aGlzO1xuICAgIGhhc2hQYXNzd29yZCh1c2VyLnBhc3N3b3JkKS50aGVuKChoYXNoKSA9PiB7XG4gICAgICAgIHVzZXIucGFzc3dvcmQgPSBoYXNoO1xuICAgICAgICBuZXh0KCk7XG4gICAgfSkuY2F0Y2gobmV4dCk7XG59KTtcblxuQWRtaW5TY2hlbWEubWV0aG9kcy52ZXJpZnlQYXNzd29yZCA9IGZ1bmN0aW9uKHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IChpc01hdGNoOiBib29sZWFuKSA9PiB2b2lkLCByZWplY3Q6IChlcnI6IEVycm9yKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgIGNvbXBhcmUocGFzc3dvcmQsIHRoaXMucGFzc3dvcmQsIGZ1bmN0aW9uKGVycjogRXJyb3IsIGlzTWF0Y2g6IGJvb2xlYW4pIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVzb2x2ZShpc01hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGNvbnN0IEFkbWluOiBNb2RlbDxBZG1pbkRvY3VtZW504oCL4oCLPiA9IG1vZGVsKCdhZG1pbnMnLCBBZG1pblNjaGVtYSk7XG4iXX0=