"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model");
function checkPresent(query) {
    return model_1.Admin.countDocuments(query).then(count => count > 0);
}
exports.checkPresent = checkPresent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYXBwaW52ZW50aXZyaC0wNTgvQXNoaXNoLXdvcmsvcmNjL2FwaS9kYi9hZG1pbi9vcGVyYXRpb25zL2NoZWNrLXByZXNlbnQudHMiLCJzb3VyY2VzIjpbIi9ob21lL2FwcGludmVudGl2cmgtMDU4L0FzaGlzaC13b3JrL3JjYy9hcGkvZGIvYWRtaW4vb3BlcmF0aW9ucy9jaGVjay1wcmVzZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQWlDO0FBRWpDLHNCQUE2QixLQUEyQjtJQUNwRCxPQUFPLGFBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFGRCxvQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkbWluIH0gZnJvbSBcIi4uL21vZGVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1ByZXNlbnQocXVlcnk6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIEFkbWluLmNvdW50RG9jdW1lbnRzKHF1ZXJ5KS50aGVuKGNvdW50ID0+IGNvdW50ID4gMCk7XG59Il19