"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const utils_1 = require("../../utils");
const bcrypt_1 = require("bcrypt");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        text: true
    },
    username: {
        type: String,
        required: true,
        text: true
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
    collection: 'users'
});
UserSchema.pre('save', function (next) {
    const user = this;
    utils_1.hashPassword(user.password).then((hash) => {
        user.password = hash;
        next();
    }).catch(next);
});
UserSchema.methods.verifyPassword = function (password) {
    return new Promise((resolve, reject) => {
        bcrypt_1.compare(password, this.password, function (err, isMatch) {
            if (err)
                return reject(err);
            resolve(isMatch);
        });
    });
};
exports.User = mongoose_1.model('users', UserSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9kYi91c2VyL21vZGVsLnRzIiwic291cmNlcyI6WyIvaG9tZS9hcHBpbnZlbnRpdnJoLTA1OC9Bc2hpc2gtd29yay9yY2MvYXBpL2RiL3VzZXIvbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBZ0Q7QUFFaEQsdUNBQTJDO0FBQzNDLG1DQUFpQztBQUVqQyxNQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDMUIsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxHQUFHLEVBQUU7UUFDRCxJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtLQUN0QjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7S0FDdEI7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7Q0FDSixFQUFFO0lBQ0MsVUFBVSxFQUFFLE9BQU87Q0FDdEIsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBUyxJQUFJO0lBQ2hDLE1BQU0sSUFBSSxHQUFRLElBQUksQ0FBQztJQUN2QixvQkFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLFVBQVMsUUFBZ0I7SUFDekQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQW1DLEVBQUUsTUFBNEIsRUFBRSxFQUFFO1FBQ3JGLGdCQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFVLEVBQUUsT0FBZ0I7WUFDbEUsSUFBSSxHQUFHO2dCQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBO0FBR1ksUUFBQSxJQUFJLEdBQXdCLGdCQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBVc2VyRG9jdW1lbnQgfSBmcm9tICcuL2RvY3VtZW50JztcbmltcG9ydCB7IGhhc2hQYXNzd29yZCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHQnO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB1c2VybmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0ZXh0OiB0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBkb2I6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNyZWF0ZWRPbjoge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBkZWZhdWx0OiBEYXRlLm5vdygpXG4gICAgfSxcbiAgICB1cGRhdGVkT246IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3coKVxuICAgIH0sXG4gICAgc3RhdHVzQ29kZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9XG59LCB7XG4gICAgY29sbGVjdGlvbjogJ3VzZXJzJ1xufSk7XG5cblVzZXJTY2hlbWEucHJlKCdzYXZlJywgZnVuY3Rpb24obmV4dCkge1xuICAgIGNvbnN0IHVzZXI6IGFueSA9IHRoaXM7XG4gICAgaGFzaFBhc3N3b3JkKHVzZXIucGFzc3dvcmQpLnRoZW4oKGhhc2gpID0+IHtcbiAgICAgICAgdXNlci5wYXNzd29yZCA9IGhhc2g7XG4gICAgICAgIG5leHQoKTtcbiAgICB9KS5jYXRjaChuZXh0KTtcbn0pO1xuXG5Vc2VyU2NoZW1hLm1ldGhvZHMudmVyaWZ5UGFzc3dvcmQgPSBmdW5jdGlvbihwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoaXNNYXRjaDogYm9vbGVhbikgPT4gdm9pZCwgcmVqZWN0OiAoZXJyOiBFcnJvcikgPT4gdm9pZCkgPT4ge1xuICAgICAgICBjb21wYXJlKHBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkLCBmdW5jdGlvbihlcnI6IEVycm9yLCBpc01hdGNoOiBib29sZWFuKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc29sdmUoaXNNYXRjaCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cbmV4cG9ydCBjb25zdCBVc2VyOiBNb2RlbDxVc2VyRG9jdW1lbnQ+ID0gbW9kZWwoJ3VzZXJzJywgVXNlclNjaGVtYSk7XG4iXX0=