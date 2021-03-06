"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const mongoose_1 = require("mongoose");
const environments_1 = require("./environments");
const colors = require("colors/safe");
require("./auth/init");
const routes_1 = require("./routes");
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', routes_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
mongoose_1.connect(environments_1.config.MONGO_URI, { useNewUrlParser: true }).then(function () {
    console.log(colors.yellow('>>'), colors.green('Database Connection Successful'));
}).catch(function () {
    console.log(colors.yellow('>>'), colors.red('Database Connection Error..'));
});
exports.default = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9hcHAudHMiLCJzb3VyY2VzIjpbIi9ob21lL2FwcGludmVudGl2cmgtMDU4L0FzaGlzaC13b3JrL3JjYy9hcGkvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbUNBQW1DO0FBQ25DLDZCQUE2QjtBQUM3Qix5Q0FBeUM7QUFDekMsaUNBQWlDO0FBQ2pDLDhDQUE4QztBQUM5QywwQ0FBMEM7QUFDMUMsMkJBQTJCO0FBQzNCLDZCQUE2QjtBQUM3Qix1Q0FBbUM7QUFDbkMsaURBQXdDO0FBQ3hDLHNDQUFzQztBQUl0Qyx1QkFBcUI7QUFDckIscUNBQThCO0FBRTlCLE1BQU0sR0FBRyxHQUFnQixPQUFPLEVBQUUsQ0FBQztBQUVuQyxvQkFBb0I7QUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNoRCxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFL0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV4RCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFFaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsZ0JBQU0sQ0FBQyxDQUFDO0FBRXJCLHlDQUF5QztBQUN6QyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUMvRCxJQUFJLEdBQUcsR0FBUSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFnQjtBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBUSxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDekUsa0RBQWtEO0lBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVuRSx3QkFBd0I7SUFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBTyxDQUFDLHFCQUFNLENBQUMsU0FBUyxFQUFFLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztBQUNsRixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDN0UsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZmF2aWNvbiBmcm9tICdzZXJ2ZS1mYXZpY29uJztcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBlanMgZnJvbSAnZWpzJztcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9lbnZpcm9ubWVudHMnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcblxuaW1wb3J0IHsgQXBwbGljYXRpb24sIFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcblxuaW1wb3J0ICcuL2F1dGgvaW5pdCc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuY29uc3QgYXBwOiBBcHBsaWNhdGlvbiA9IGV4cHJlc3MoKTtcblxuLy8gdmlldyBlbmdpbmUgc2V0dXBcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJ3ZpZXdzJykpO1xuYXBwLmVuZ2luZSgnaHRtbCcsIGVqcy5yZW5kZXJGaWxlKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcblxuYXBwLnVzZShmYXZpY29uKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnLCAnZmF2aWNvbi5wbmcnKSkpO1xuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSkpO1xuXG5hcHAudXNlKGNvcnMoKSk7XG5cbmFwcC51c2UoJy8nLCByb3V0ZXMpO1xuXG4vLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxuYXBwLnVzZShmdW5jdGlvbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuXHR2YXIgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ05vdCBGb3VuZCcpO1xuXHRlcnIuc3RhdHVzID0gNDA0O1xuXHRuZXh0KGVycik7XG59KTtcblxuLy8gZXJyb3IgaGFuZGxlclxuYXBwLnVzZShmdW5jdGlvbihlcnI6IGFueSwgcmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcblx0Ly8gc2V0IGxvY2Fscywgb25seSBwcm92aWRpbmcgZXJyb3IgaW4gZGV2ZWxvcG1lbnRcblx0cmVzLmxvY2Fscy5tZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG5cdHJlcy5sb2NhbHMuZXJyb3IgPSByZXEuYXBwLmdldCgnZW52JykgPT09ICdkZXZlbG9wbWVudCcgPyBlcnIgOiB7fTtcblxuXHQvLyByZW5kZXIgdGhlIGVycm9yIHBhZ2Vcblx0cmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG5cdHJlcy5yZW5kZXIoJ2Vycm9yJyk7XG59KTtcblxuY29ubmVjdChjb25maWcuTU9OR09fVVJJLCB7dXNlTmV3VXJsUGFyc2VyOiB0cnVlfSkudGhlbihmdW5jdGlvbigpIHtcblx0Y29uc29sZS5sb2coY29sb3JzLnllbGxvdygnPj4nKSwgY29sb3JzLmdyZWVuKCdEYXRhYmFzZSBDb25uZWN0aW9uIFN1Y2Nlc3NmdWwnKSk7XG59KS5jYXRjaChmdW5jdGlvbigpIHtcblx0Y29uc29sZS5sb2coY29sb3JzLnllbGxvdygnPj4nKSwgY29sb3JzLnJlZCgnRGF0YWJhc2UgQ29ubmVjdGlvbiBFcnJvci4uJykpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdfQ==