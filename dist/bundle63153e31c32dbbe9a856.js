/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ToDoClass.js":
/*!**********************************!*\
  !*** ./src/scripts/ToDoClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var ToDo = /*#__PURE__*/_createClass(function ToDo(category, header, description, dueDate) {
  _classCallCheck(this, ToDo);
  this.category = category;
  this.header = header;
  this.description = description;
  this.dueDate = dueDate;
});


/***/ }),

/***/ "./src/scripts/all.js":
/*!****************************!*\
  !*** ./src/scripts/all.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allModule)
/* harmony export */ });
/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/all.scss */ "./src/styles/all.scss");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/scripts/form.js");


var modal = document.getElementById('input-modal');
function allModule(parent) {
  var introContainer = document.createElement('div');
  var introHeader = document.createElement('h1');
  var introSubtextContainer = document.createElement('div');
  var introSubText1 = document.createElement('p');
  var showInputBtn = document.createElement('button');
  introContainer.classList.add('intro-container');
  introHeader.classList.add('intro-header');
  introSubtextContainer.classList.add('intro-subtext-container');
  showInputBtn.classList.add('show-input-btn');
  introHeader.textContent = "All of your To-Dos";
  introSubText1.textContent = "Surely all of them will be done soon right?";
  showInputBtn.textContent = "CREATE";
  introContainer.appendChild(introHeader);
  introContainer.appendChild(introSubtextContainer);
  introSubtextContainer.appendChild(introSubText1);
  introContainer.appendChild(showInputBtn);
  showInputBtn.addEventListener('click', function () {
    modal.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_1__.showForm)("school"));
    modal.style.display = "flex";
  });
  return introContainer;
}

/***/ }),

/***/ "./src/scripts/archive.js":
/*!********************************!*\
  !*** ./src/scripts/archive.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDone": () => (/* binding */ createDone),
/* harmony export */   "createHolder": () => (/* binding */ createHolder),
/* harmony export */   "default": () => (/* binding */ archiveModule)
/* harmony export */ });
/* harmony import */ var _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayofobjects */ "./src/scripts/arrayofobjects.js");

function archiveModule(parent) {
  var introContainer = document.createElement('div');
  var introHeader = document.createElement('h1');
  var introSubtextContainer = document.createElement('div');
  var introSubText1 = document.createElement('p');
  introContainer.classList.add('intro-container');
  introHeader.classList.add('intro-header');
  introSubtextContainer.classList.add('intro-subtext-container');
  introHeader.textContent = "Archive";
  introSubText1.textContent = "Is where all of your task are surely done here.";
  introContainer.appendChild(introHeader);
  introContainer.appendChild(introSubtextContainer);
  introSubtextContainer.appendChild(introSubText1);
  return introContainer;
}
function createDone() {
  var toDoContainer = document.createElement('div');
  var toDoHeader = document.createElement('h2');
  var line = document.createElement('hr');
  toDoContainer.appendChild(toDoHeader);
  toDoContainer.appendChild(line);
  toDoContainer.classList.add('to-do-container');
  toDoContainer.setAttribute('id', 'to-do-done-container');
  line.classList.add('line');
  toDoHeader.textContent = "Done";
  return toDoContainer;
}
function createHolder() {
  var toDoHolder = document.createElement('div');
  if (_arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.archive.length === 0) {
    var noItem = document.createElement('div');
    toDoHolder.appendChild(noItem);
    toDoHolder.classList.add('to-do-holder');
    toDoHolder.setAttribute('id', 'done-holder');
    noItem.classList.add('no-item-placeholder');
    noItem.textContent = "Are you actually this lazy? Just kidding.";
    noItem.style.color = "#ECECEC";
    noItem.style.textAlign = "center";
    return toDoHolder;
  }
  for (var i = 0; i < _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.archive.length; i++) {
    var toDoItem = document.createElement('div');
    var toDoDetailsContainer = document.createElement('div');
    var toDoHeaderAndDueOptionsContainer = document.createElement('div');
    var toDoSubText = document.createElement('div');
    var toDoItemHeader = document.createElement('div');
    var dueOptionsContainer = document.createElement('div');
    var dueContainer = document.createElement('div');
    var dueHolderText = document.createElement('div');
    var dueText = document.createElement('div');

    //inside todoholder
    toDoHolder.appendChild(toDoItem);
    toDoItem.appendChild(toDoDetailsContainer);
    toDoDetailsContainer.appendChild(toDoHeaderAndDueOptionsContainer);
    toDoDetailsContainer.appendChild(toDoSubText);
    toDoHeaderAndDueOptionsContainer.appendChild(toDoItemHeader);
    toDoHeaderAndDueOptionsContainer.appendChild(dueOptionsContainer);
    dueOptionsContainer.appendChild(dueContainer);
    dueContainer.appendChild(dueHolderText);
    dueContainer.appendChild(dueText);
    toDoHolder.classList.add('to-do-holder');
    toDoHolder.setAttribute('id', 'school-holder');
    toDoItem.classList.add('to-do-item');
    toDoDetailsContainer.classList.add('to-do-details-container');
    toDoHeaderAndDueOptionsContainer.classList.add('header-and-due-options-container');
    toDoSubText.classList.add('to-do-sub-text');
    toDoItemHeader.classList.add('to-do-item-header');
    dueOptionsContainer.classList.add('due-options-container');
    dueContainer.classList.add('due-container');
    dueHolderText.classList.add('due-holder-text');
    dueText.classList.add('due-text');
    toDoItemHeader.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.archive[i].header;
    toDoSubText.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.archive[i].description;
    dueHolderText.textContent = "Task Done:";
    dueText.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.archive[i].dueDate;
  }
  return toDoHolder;
}

/***/ }),

/***/ "./src/scripts/archiveObject.js":
/*!**************************************!*\
  !*** ./src/scripts/archiveObject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "putToArchive": () => (/* binding */ putToArchive)
/* harmony export */ });
/* harmony import */ var _ToDoClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoClass */ "./src/scripts/ToDoClass.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayofobjects */ "./src/scripts/arrayofobjects.js");
/* harmony import */ var _school__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./school */ "./src/scripts/school.js");
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work */ "./src/scripts/work.js");
/* harmony import */ var _personal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal */ "./src/scripts/personal.js");






function putToArchive(index, category) {
  var dateToday = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), "hh:mm aaaaa'm', yyyy-MM-dd");
  if (category === "school") {
    var schoolHolder = document.getElementById('school-holder');
    var schoolContainer = document.getElementById('to-do-school-container');
    var _category = _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.school[index].category;
    var header = _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.school[index].header;
    var description = _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.school[index].description;
    localStorage.removeItem("school");
    var objectArchive = new _ToDoClass__WEBPACK_IMPORTED_MODULE_0__["default"](_category, header, description, dateToday);
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.archive.push(objectArchive);
    schoolHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.school.splice(index, 1);
    schoolContainer.appendChild((0,_school__WEBPACK_IMPORTED_MODULE_2__.schoolItemHolder)());
    localStorage.setItem("school", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.school));
    localStorage.setItem("archive", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.archive));
  } else if (category === "work") {
    var workHolder = document.getElementById('work-holder');
    var workContainer = document.getElementById('to-do-work-container');
    var _category2 = _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.work[index].category;
    var _header = _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.work[index].header;
    var _description = _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.work[index].description;
    localStorage.removeItem("work");
    var _objectArchive = new _ToDoClass__WEBPACK_IMPORTED_MODULE_0__["default"](_category2, _header, _description, dateToday);
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.archive.push(_objectArchive);
    workHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.work.splice(index, 1);
    workContainer.appendChild((0,_work__WEBPACK_IMPORTED_MODULE_3__.workItemHolder)());
    localStorage.setItem("work", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.work));
    localStorage.setItem("archive", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.archive));
  } else if (category === "personal") {
    var personalHolder = document.getElementById('personal-holder');
    var personalContainer = document.getElementById('to-do-personal-container');
    var _category3 = _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.personal[index].category;
    var _header2 = _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.personal[index].header;
    var _description2 = _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.personal[index].description;
    localStorage.removeItem("personal");
    var _objectArchive2 = new _ToDoClass__WEBPACK_IMPORTED_MODULE_0__["default"](_category3, _header2, _description2, dateToday);
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.archive.push(_objectArchive2);
    personalHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.personal.splice(index, 1);
    personalContainer.appendChild((0,_personal__WEBPACK_IMPORTED_MODULE_4__.personalItemHolder)());
    localStorage.setItem("personal", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.personal));
    localStorage.setItem("archive", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.archive));
  }
}

/***/ }),

/***/ "./src/scripts/arrayofobjects.js":
/*!***************************************!*\
  !*** ./src/scripts/arrayofobjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "archive": () => (/* binding */ archive),
/* harmony export */   "personal": () => (/* binding */ personal),
/* harmony export */   "school": () => (/* binding */ school),
/* harmony export */   "work": () => (/* binding */ work)
/* harmony export */ });
var school = [];
var work = [];
var personal = [];
var archive = [];

/***/ }),

/***/ "./src/scripts/createObject.js":
/*!*************************************!*\
  !*** ./src/scripts/createObject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createObject": () => (/* binding */ createObject)
/* harmony export */ });
/* harmony import */ var _ToDoClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoClass */ "./src/scripts/ToDoClass.js");
/* harmony import */ var _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayofobjects */ "./src/scripts/arrayofobjects.js");
/* harmony import */ var _school__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./school */ "./src/scripts/school.js");
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work */ "./src/scripts/work.js");
/* harmony import */ var _personal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal */ "./src/scripts/personal.js");





function createObject(category, header, description, date) {
  var toDoObject = new _ToDoClass__WEBPACK_IMPORTED_MODULE_0__["default"](category, header, description, date);
  if (toDoObject.category === "school") {
    var schoolHolder = document.getElementById('school-holder');
    var schoolContainer = document.getElementById('to-do-school-container');
    if (schoolHolder === null && schoolContainer === null) {
      _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.school.push(toDoObject);
      localStorage.setItem("school", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.school));
      return;
    }
    schoolHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.school.push(toDoObject);
    localStorage.setItem("school", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.school));
    schoolContainer.appendChild((0,_school__WEBPACK_IMPORTED_MODULE_2__.schoolItemHolder)());
    return;
  } else if (toDoObject.category === "work") {
    var workHolder = document.getElementById('work-holder');
    var workContainer = document.getElementById('to-do-work-container');
    if (workHolder === null && workContainer === null) {
      _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.work.push(toDoObject);
      localStorage.setItem("work", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.work));
      return;
    }
    workHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.work.push(toDoObject);
    localStorage.setItem("work", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.work));
    workContainer.appendChild((0,_work__WEBPACK_IMPORTED_MODULE_3__.workItemHolder)());
    return;
  } else if (toDoObject.category === "personal") {
    var personalHolder = document.getElementById('personal-holder');
    var personalContainer = document.getElementById('to-do-personal-container');
    if (personalHolder === null && personalContainer === null) {
      _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.personal.push(toDoObject);
      localStorage.setItem("personal", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.personal));
      return;
    }
    personalHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.personal.push(toDoObject);
    localStorage.setItem("personal", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.personal));
    personalContainer.appendChild((0,_personal__WEBPACK_IMPORTED_MODULE_4__.personalItemHolder)());
    return;
  }
}

/***/ }),

/***/ "./src/scripts/deleteModal.js":
/*!************************************!*\
  !*** ./src/scripts/deleteModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showDeleteModal": () => (/* binding */ showDeleteModal)
/* harmony export */ });
/* harmony import */ var _deleteObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteObject */ "./src/scripts/deleteObject.js");

var modal = document.getElementById('input-modal');
function showDeleteModal(index, category, header) {
  var deleteContainer = document.createElement('div');
  var infoContainer = document.createElement('div');
  var info = document.createElement('div');
  var itemHeader = document.createElement('div');
  var delButtonContainer = document.createElement('div');
  var yesBtn = document.createElement('button');
  var noBtn = document.createElement('button');
  deleteContainer.appendChild(infoContainer);
  deleteContainer.appendChild(delButtonContainer);
  infoContainer.appendChild(info);
  infoContainer.appendChild(itemHeader);
  delButtonContainer.appendChild(yesBtn);
  delButtonContainer.appendChild(noBtn);
  deleteContainer.classList.add('delete-modal-containers');
  infoContainer.classList.add('delete-info-container');
  info.classList.add('delete-info');
  itemHeader.classList.add('delete-info-header');
  delButtonContainer.classList.add('delete-button-container');
  yesBtn.classList.add('delete-btn-style');
  noBtn.classList.add('delete-btn-style');
  info.textContent = "Are you sure you want to delete";
  itemHeader.textContent = "".concat(header, "?");
  yesBtn.textContent = "YES";
  noBtn.textContent = "NO";
  yesBtn.addEventListener('click', function () {
    clearOutContainer(modal);
    (0,_deleteObject__WEBPACK_IMPORTED_MODULE_0__.deleteObject)(index, category);
    modal.style.display = "none";
  });
  noBtn.addEventListener('click', function () {
    clearOutContainer(modal);
    modal.style.display = "none";
  });
  return deleteContainer;
}
function clearOutContainer(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/***/ }),

/***/ "./src/scripts/deleteObject.js":
/*!*************************************!*\
  !*** ./src/scripts/deleteObject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteObject": () => (/* binding */ deleteObject)
/* harmony export */ });
/* harmony import */ var _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayofobjects */ "./src/scripts/arrayofobjects.js");
/* harmony import */ var _school__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school */ "./src/scripts/school.js");
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work */ "./src/scripts/work.js");
/* harmony import */ var _personal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal */ "./src/scripts/personal.js");




function deleteObject(index, category) {
  if (category === "school") {
    var schoolHolder = document.getElementById('school-holder');
    var schoolContainer = document.getElementById('to-do-school-container');
    localStorage.removeItem("school");
    schoolHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.school.splice(index, 1);
    schoolContainer.appendChild((0,_school__WEBPACK_IMPORTED_MODULE_1__.schoolItemHolder)());
    console.log(_arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.school);
    localStorage.setItem("school", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.school));
    return;
  } else if (category === "work") {
    var workHolder = document.getElementById('work-holder');
    var workContainer = document.getElementById('to-do-work-container');
    localStorage.removeItem("work");
    workHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.work.splice(index, 1);
    workContainer.appendChild((0,_work__WEBPACK_IMPORTED_MODULE_2__.workItemHolder)());
    console.log(_arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.work);
    localStorage.setItem("work", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.work));
    return;
  } else if (category === "personal") {
    var personalHolder = document.getElementById('personal-holder');
    var personalContainer = document.getElementById('to-do-personal-container');
    localStorage.removeItem("personal");
    personalHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.personal.splice(index, 1);
    personalContainer.appendChild((0,_personal__WEBPACK_IMPORTED_MODULE_3__.personalItemHolder)());
    localStorage.setItem("personal", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.personal));
    console.log(_arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.personal);
    return;
  }
}

/***/ }),

/***/ "./src/scripts/editModal.js":
/*!**********************************!*\
  !*** ./src/scripts/editModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showEditModal": () => (/* binding */ showEditModal)
/* harmony export */ });
/* harmony import */ var _editObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editObject */ "./src/scripts/editObject.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _inputValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputValidation */ "./src/scripts/inputValidation.js");



var modal = document.getElementById('input-modal');
function showEditModal(index, category, header, desc) {
  var editModalContainer = document.createElement('div');
  var editInfoContainer = document.createElement('div');
  var editInfoSubText = document.createElement('div');
  var editInfo = document.createElement('div');
  var editFormHolder = document.createElement('div');
  var editForm = document.createElement('form');
  var editInputContainer = document.createElement('div');
  var editHeaderHolder = document.createElement('div');
  var editDescHolder = document.createElement('div');
  var editDueDateHolder = document.createElement('div');
  var editBtnContainer = document.createElement('div');
  var applyBtn = document.createElement('button');
  var closeBtn = document.createElement('button');
  var editHeaderLabel = document.createElement('label');
  var editHeaderInput = document.createElement('input');
  var editDescLabel = document.createElement('label');
  var editDescInput = document.createElement('input');
  var editDueDateLabel = document.createElement('label');
  var editDueDateInput = document.createElement('input');
  editModalContainer.appendChild(editInfoContainer);
  editModalContainer.appendChild(editFormHolder);
  editInfoContainer.appendChild(editInfoSubText);
  editInfoContainer.appendChild(editInfo);
  editFormHolder.appendChild(editForm);
  editForm.appendChild(editInputContainer);
  editForm.appendChild(editBtnContainer);
  editInputContainer.appendChild(editHeaderHolder);
  editInputContainer.appendChild(editDescHolder);
  editInputContainer.appendChild(editDueDateHolder);
  editBtnContainer.appendChild(applyBtn);
  editBtnContainer.appendChild(closeBtn);
  editHeaderHolder.appendChild(editHeaderLabel);
  editHeaderHolder.appendChild(editHeaderInput);
  editDescHolder.appendChild(editDescLabel);
  editDescHolder.appendChild(editDescInput);
  editDueDateHolder.appendChild(editDueDateLabel);
  editDueDateHolder.appendChild(editDueDateInput);
  editModalContainer.classList.add('edit-modal-container');
  editInfoContainer.classList.add('edit-info-container');
  editInfoSubText.classList.add('edit-info-sub-text');
  editInfo.classList.add('edit-info');
  editFormHolder.classList.add('edit-form-holder');
  editForm.classList.add('edit-form');
  editForm.setAttribute('method', 'get');
  editForm.setAttribute('action', '');
  editInputContainer.classList.add('edit-input-container');
  editHeaderHolder.classList.add('edit-header-holder');
  editHeaderLabel.classList.add('edit-header-label');
  editHeaderInput.classList.add('edit-header-input');
  editHeaderLabel.setAttribute('for', 'edit-header');
  editHeaderInput.setAttribute('type', 'text');
  editHeaderInput.setAttribute('name', 'edit-header');
  editHeaderInput.setAttribute('id', 'edit-header');
  editDescHolder.classList.add('edit-desc-holder');
  editDescLabel.classList.add('edit-desc-label');
  editDescInput.classList.add('edit-desc-input');
  editDescLabel.setAttribute('for', 'edit-desc');
  editDescInput.setAttribute('type', 'text');
  editDescInput.setAttribute('name', 'edit-desc');
  editDescInput.setAttribute('id', 'edit-desc');
  editDueDateHolder.classList.add('edit-due-date-holder');
  editDueDateLabel.classList.add('edit-due-date-label');
  editDueDateInput.classList.add('edit-due-date-input');
  editDueDateLabel.setAttribute('for', 'edit-due-date');
  editDueDateInput.setAttribute('type', 'datetime-local');
  editDueDateInput.setAttribute('name', 'edit-due-date');
  editDueDateInput.setAttribute('id', 'edit-edit-date');
  editBtnContainer.classList.add('edit-btn-container');
  editInfoSubText.textContent = "You are now currently editing:";
  editInfo.textContent = header;
  editHeaderLabel.textContent = "Change the header.";
  editDescLabel.textContent = "Change the description.";
  editDueDateLabel.textContent = "Change the due-date.";
  editHeaderInput.value = header;
  editDescInput.value = desc;
  applyBtn.textContent = "APPLY";
  closeBtn.textContent = "CLOSE";
  applyBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var thisHeader = editHeaderInput.value.trim();
    var thisDesc = editDescInput.value.trim();
    var thisDate = editDueDateInput.value;
    (0,_inputValidation__WEBPACK_IMPORTED_MODULE_1__["default"])(true, thisHeader, thisDesc, thisDate, editHeaderLabel, editDescLabel, editDueDateLabel, editHeaderInput, editDescInput, editDueDateInput);
    if (thisDate === "") {
      return;
    } else {
      thisDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(thisDate), "hh:mm aaaaa'm', yyyy-MM-dd");
    }
    (0,_editObject__WEBPACK_IMPORTED_MODULE_0__.editObject)(index, category, thisHeader, thisDesc, thisDate);
    modal.style.display = "none";
    clearOutContainer(modal);
  });
  closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = "none";
    clearOutContainer(modal);
  });
  return editModalContainer;
}
function clearOutContainer(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/***/ }),

/***/ "./src/scripts/editObject.js":
/*!***********************************!*\
  !*** ./src/scripts/editObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editObject": () => (/* binding */ editObject)
/* harmony export */ });
/* harmony import */ var _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayofobjects */ "./src/scripts/arrayofobjects.js");
/* harmony import */ var _school__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school */ "./src/scripts/school.js");
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work */ "./src/scripts/work.js");
/* harmony import */ var _personal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal */ "./src/scripts/personal.js");




function editObject(index, category, header, desc, date) {
  if (category === "school") {
    var schoolHolder = document.getElementById('school-holder');
    var schoolContainer = document.getElementById('to-do-school-container');
    schoolHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.school[index].header = header;
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.school[index].description = desc;
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.school[index].dueDate = date;
    localStorage.setItem("school", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.school));
    schoolContainer.appendChild((0,_school__WEBPACK_IMPORTED_MODULE_1__.schoolItemHolder)());
    return;
  } else if (category === "work") {
    var workHolder = document.getElementById('work-holder');
    var workContainer = document.getElementById('to-do-work-container');
    workHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.work[index].header = header;
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.work[index].description = desc;
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.work[index].dueDate = date;
    localStorage.setItem("work", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.work));
    workContainer.appendChild((0,_work__WEBPACK_IMPORTED_MODULE_2__.workItemHolder)());
    return;
  } else if (category === "personal") {
    var personalHolder = document.getElementById('personal-holder');
    var personalContainer = document.getElementById('to-do-personal-container');
    personalHolder.remove();
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.personal[index].header = header;
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.personal[index].description = desc;
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.personal[index].dueDate = date;
    localStorage.setItem("personal", JSON.stringify(_arrayofobjects__WEBPACK_IMPORTED_MODULE_0__.personal));
    personalContainer.appendChild((0,_personal__WEBPACK_IMPORTED_MODULE_3__.personalItemHolder)());
    return;
  }
}

/***/ }),

/***/ "./src/scripts/form.js":
/*!*****************************!*\
  !*** ./src/scripts/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showForm": () => (/* binding */ showForm)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _createObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createObject */ "./src/scripts/createObject.js");
/* harmony import */ var _inputValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputValidation */ "./src/scripts/inputValidation.js");
/* harmony import */ var _successModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./successModal */ "./src/scripts/successModal.js");




var modal = document.getElementById('input-modal');

// This is form for the All, School, Work, and Personal Module
// Except the Home Module.
function showForm(category) {
  var inputContainer = document.createElement('div');
  var formContainer = document.createElement('div');
  var buttonContainer = document.createElement('div');
  var form = document.createElement('form');
  var categoryContainer = document.createElement('div');
  var labelForCategory = document.createElement('label');
  var inputForCategory = document.createElement('select');
  var selection1 = document.createElement('option');
  var selection2 = document.createElement('option');
  var selection3 = document.createElement('option');
  var taskHeaderContainer = document.createElement('div');
  var labelForTaskHeader = document.createElement('label');
  var inputForTaskHeader = document.createElement('input');
  var taskDescContainer = document.createElement('div');
  var labelForTaskDesc = document.createElement('label');
  var inputForTaskDesc = document.createElement('textarea');
  var dueDateTimeContainer = document.createElement('div');
  var labelForDueDateTime = document.createElement('label');
  var inputForDueDateTime = document.createElement('input');
  var submitBtn = document.createElement('button');
  var closeBtn = document.createElement('button');
  inputContainer.appendChild(formContainer);
  formContainer.appendChild(form);
  form.appendChild(categoryContainer);
  categoryContainer.appendChild(labelForCategory);
  categoryContainer.appendChild(inputForCategory);
  inputForCategory.appendChild(selection1);
  inputForCategory.appendChild(selection2);
  inputForCategory.appendChild(selection3);
  form.appendChild(taskHeaderContainer);
  taskHeaderContainer.appendChild(labelForTaskHeader);
  taskHeaderContainer.appendChild(inputForTaskHeader);
  form.appendChild(taskDescContainer);
  taskDescContainer.appendChild(labelForTaskDesc);
  taskDescContainer.appendChild(inputForTaskDesc);
  form.appendChild(dueDateTimeContainer);
  dueDateTimeContainer.appendChild(labelForDueDateTime);
  dueDateTimeContainer.appendChild(inputForDueDateTime);
  form.appendChild(buttonContainer);
  buttonContainer.appendChild(submitBtn);
  buttonContainer.appendChild(closeBtn);
  inputContainer.classList.add('input-container');
  inputContainer.classList.add('input-modal-container');
  formContainer.classList.add('input-form-container');
  form.classList.add('input-form');
  form.setAttribute('method', 'get');
  form.setAttribute('action', '');
  categoryContainer.classList.add('category-holder');
  inputForCategory.classList.add('select-category');
  labelForCategory.textContent = "Is it for?";
  selection1.textContent = "School";
  selection2.textContent = "Work";
  selection3.textContent = "Personal";
  inputForCategory.setAttribute('id', 'category');
  labelForCategory.setAttribute('for', 'category');
  inputForCategory.setAttribute('name', 'category');
  selection1.setAttribute('value', 'school');
  selection2.setAttribute('value', 'work');
  selection3.setAttribute('value', 'personal');
  taskHeaderContainer.classList.add('task-header-holder');
  labelForTaskHeader.textContent = "Add a header.";
  labelForTaskHeader.setAttribute('for', 'taskheader');
  inputForTaskHeader.setAttribute('type', 'text');
  inputForTaskHeader.setAttribute('id', 'task-header');
  inputForTaskHeader.setAttribute('name', 'taskheader');
  inputForTaskHeader.setAttribute('placeholder', 'Enter an eye catching task...');
  taskDescContainer.classList.add('task-desc-holder');
  labelForTaskDesc.textContent = "Describe it.";
  labelForTaskDesc.setAttribute('for', 'taskdesc');
  inputForTaskDesc.setAttribute('type', 'text');
  inputForTaskDesc.setAttribute('id', 'task-desc');
  inputForTaskDesc.setAttribute('name', 'taskdesc');
  inputForTaskDesc.setAttribute('placeholder', "Enter the description...");
  dueDateTimeContainer.classList.add('due-date-time-holder');
  labelForDueDateTime.textContent = "When will you finish it?";
  labelForDueDateTime.setAttribute('for', 'datetime');
  inputForDueDateTime.setAttribute('type', 'datetime-local');
  inputForDueDateTime.setAttribute('id', 'due-date-time');
  inputForDueDateTime.setAttribute('name', 'datetime');
  buttonContainer.classList.add('button-container');
  submitBtn.setAttribute('id', "submit-input-btn");
  closeBtn.setAttribute('id', "close-input-btn");
  submitBtn.textContent = "SUBMIT";
  closeBtn.textContent = "CLOSE";
  inputForCategory.value = category;
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var category = inputForCategory.value.toLowerCase();
    var header = inputForTaskHeader.value.trim();
    var description = inputForTaskDesc.value.trim();
    var date = inputForDueDateTime.value;
    (0,_inputValidation__WEBPACK_IMPORTED_MODULE_1__["default"])(false, header, description, date, labelForTaskHeader, labelForTaskDesc, labelForDueDateTime, inputForTaskHeader, inputForTaskDesc, inputForDueDateTime);
    if (date === "") {
      return;
    } else {
      date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(date), "hh:mm aaaaa'm', yyyy-MM-dd");
    }
    (0,_createObject__WEBPACK_IMPORTED_MODULE_0__.createObject)(category, header, description, date);
    clearOutContainer(modal);
    modal.appendChild((0,_successModal__WEBPACK_IMPORTED_MODULE_2__["default"])(category));
  });
  closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clearOutContainer(modal);
    modal.style.display = "none";
  });
  return inputContainer;
}
function clearOutContainer(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeModule),
/* harmony export */   "showForm": () => (/* binding */ showForm)
/* harmony export */ });
/* harmony import */ var _styles_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.scss */ "./src/styles/home.scss");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _createObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createObject */ "./src/scripts/createObject.js");
/* harmony import */ var _inputValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputValidation */ "./src/scripts/inputValidation.js");
/* harmony import */ var _successModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./successModal */ "./src/scripts/successModal.js");





var modal = document.getElementById('input-modal');
function homeModule(parent) {
  var hasPressYes = false;
  var introContainer = document.createElement('div');
  var introHeader = document.createElement('h1');
  var introSubtextContainer = document.createElement('div');
  var introSubText1 = document.createElement('p');
  var introSubText2 = document.createElement('p');
  var introSubText3 = document.createElement('p');
  var showInputBtn = document.createElement('button');
  introContainer.classList.add('intro-container');
  introHeader.classList.add('intro-header');
  introSubtextContainer.classList.add('intro-subtext-container');
  showInputBtn.classList.add('show-input-btn');
  introHeader.textContent = "Welcome";
  introSubText1.textContent = "Have something to do?";
  introSubText2.textContent = "Have you been procastinating and...";
  introSubText3.textContent = "Haven't done anything productive today?";
  showInputBtn.textContent = "YES";
  introContainer.appendChild(introHeader);
  introContainer.appendChild(introSubtextContainer);
  introContainer.appendChild(showInputBtn);
  introSubtextContainer.appendChild(introSubText1);
  introSubtextContainer.appendChild(introSubText2);
  introSubtextContainer.appendChild(introSubText3);
  showInputBtn.addEventListener('click', function () {
    if (!hasPressYes) {
      parent.appendChild(showForm());
      hasPressYes = true;
    }
  });
  return introContainer;
}
function showForm() {
  var inputContainer = document.createElement('div');
  var header = document.createElement('div');
  var formContainer = document.createElement('div');
  var form = document.createElement('form');
  var categoryContainer = document.createElement('div');
  var labelForCategory = document.createElement('label');
  var inputForCategory = document.createElement('select');
  var selection1 = document.createElement('option');
  var selection2 = document.createElement('option');
  var selection3 = document.createElement('option');
  var taskHeaderContainer = document.createElement('div');
  var labelForTaskHeader = document.createElement('label');
  var inputForTaskHeader = document.createElement('input');
  var taskDescContainer = document.createElement('div');
  var labelForTaskDesc = document.createElement('label');
  var inputForTaskDesc = document.createElement('textarea');
  var dueDateTimeContainer = document.createElement('div');
  var labelForDueDateTime = document.createElement('label');
  var inputForDueDateTime = document.createElement('input');
  var submitBtn = document.createElement('button');
  inputContainer.appendChild(header);
  inputContainer.appendChild(formContainer);
  formContainer.appendChild(form);
  form.appendChild(categoryContainer);
  categoryContainer.appendChild(labelForCategory);
  categoryContainer.appendChild(inputForCategory);
  inputForCategory.appendChild(selection1);
  inputForCategory.appendChild(selection2);
  inputForCategory.appendChild(selection3);
  form.appendChild(taskHeaderContainer);
  taskHeaderContainer.appendChild(labelForTaskHeader);
  taskHeaderContainer.appendChild(inputForTaskHeader);
  form.appendChild(taskDescContainer);
  taskDescContainer.appendChild(labelForTaskDesc);
  taskDescContainer.appendChild(inputForTaskDesc);
  form.appendChild(dueDateTimeContainer);
  dueDateTimeContainer.appendChild(labelForDueDateTime);
  dueDateTimeContainer.appendChild(inputForDueDateTime);
  form.appendChild(submitBtn);
  header.textContent = "Great, now write it down.";
  inputContainer.classList.add('input-container');
  header.classList.add('input-header');
  formContainer.classList.add('input-form-container');
  form.classList.add('input-form');
  form.setAttribute('method', 'get');
  form.setAttribute('action', '');
  categoryContainer.classList.add('category-holder');
  inputForCategory.classList.add('select-category');
  labelForCategory.textContent = "Is it for?";
  selection1.textContent = "School";
  selection2.textContent = "Work";
  selection3.textContent = "Personal";
  inputForCategory.setAttribute('id', 'category');
  labelForCategory.setAttribute('for', 'category');
  inputForCategory.setAttribute('name', 'category');
  selection1.setAttribute('value', 'school');
  selection2.setAttribute('value', 'work');
  selection3.setAttribute('value', 'personal');
  taskHeaderContainer.classList.add('task-header-holder');
  labelForTaskHeader.textContent = "Add a header.";
  labelForTaskHeader.setAttribute('for', 'taskheader');
  inputForTaskHeader.setAttribute('type', 'text');
  inputForTaskHeader.setAttribute('id', 'task-header');
  inputForTaskHeader.setAttribute('name', 'taskheader');
  inputForTaskHeader.setAttribute('placeholder', 'Enter an eye catching task...');
  taskDescContainer.classList.add('task-desc-holder');
  labelForTaskDesc.textContent = "Describe it.";
  labelForTaskDesc.setAttribute('for', 'taskdesc');
  inputForTaskDesc.setAttribute('type', 'text');
  inputForTaskDesc.setAttribute('id', 'task-desc');
  inputForTaskDesc.setAttribute('name', 'taskdesc');
  inputForTaskDesc.setAttribute('placeholder', "Enter the description...");
  dueDateTimeContainer.classList.add('due-date-time-holder');
  labelForDueDateTime.textContent = "When will you finish it?";
  labelForDueDateTime.setAttribute('for', 'datetime');
  inputForDueDateTime.setAttribute('type', 'datetime-local');
  inputForDueDateTime.setAttribute('id', 'due-date-time');
  inputForDueDateTime.setAttribute('name', 'datetime');
  submitBtn.setAttribute('id', "submit-input-btn");
  submitBtn.textContent = "SUBMIT";
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var category = inputForCategory.value.toLowerCase();
    var header = inputForTaskHeader.value.trim();
    var description = inputForTaskDesc.value.trim();
    var date = inputForDueDateTime.value;
    (0,_inputValidation__WEBPACK_IMPORTED_MODULE_2__["default"])(false, header, description, date, labelForTaskHeader, labelForTaskDesc, labelForDueDateTime, inputForTaskHeader, inputForTaskDesc, inputForDueDateTime);
    if (date === "") {
      return;
    } else {
      date = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(date), "hh:mm aaaaa'm', yyyy-MM-dd");
    }
    (0,_createObject__WEBPACK_IMPORTED_MODULE_1__.createObject)(category, header, description, date);
    clearOutContainer(modal);
    modal.style.display = "flex";
    modal.appendChild((0,_successModal__WEBPACK_IMPORTED_MODULE_3__["default"])(category));
    inputForTaskHeader.value = "";
    inputForTaskDesc.value = "";
    inputForDueDateTime.value = "";
  });
  return inputContainer;
}
function clearOutContainer(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/***/ }),

/***/ "./src/scripts/inputValidation.js":
/*!****************************************!*\
  !*** ./src/scripts/inputValidation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inputValidation)
/* harmony export */ });
function inputValidation(cameFromEdit, header, description, date, labelHeader, labelSubText, labelDueTime, inputHeader, inputSubText, inputDueTime) {
  if (header === null || header === "") {
    labelHeader.textContent = "Put some header in it!";
    labelHeader.style.fontWeight = 'bold';
    labelHeader.style.color = "#f83939";
    inputHeader.style.border = "1px solid #f83939";
    return;
  } else {
    labelHeader.textContent = "Add a header.";
    labelHeader.style.fontWeight = '400';
    labelHeader.style.color = "inherit";
    inputHeader.style.border = "none";
    if (cameFromEdit) {
      labelHeader.textContent = "Change the header.";
    }
  }
  if (description === null || description === "") {
    labelSubText.textContent = "Put some description in it!";
    labelSubText.style.fontWeight = 'bold';
    labelSubText.style.color = "#f83939";
    inputSubText.style.border = "1px solid #f83939";
    return;
  } else {
    labelSubText.textContent = "Describe it.";
    labelSubText.style.fontWeight = '400';
    labelSubText.style.color = "inherit";
    inputSubText.style.border = "none";
    if (cameFromEdit) {
      labelSubText.textContent = "Change the description.";
    }
  }
  if (date === null || date === "") {
    labelDueTime.textContent = "Put some date in it!";
    labelDueTime.style.fontWeight = 'bold';
    labelDueTime.style.color = "#f83939";
    inputDueTime.style.border = "1px solid #f83939";
    return;
  } else {
    labelDueTime.textContent = "When will you finish it?";
    labelDueTime.style.fontWeight = '400';
    labelDueTime.style.color = "inherit";
    inputDueTime.style.border = "none";
    if (cameFromEdit) {
      inputDueTime.textContent = "Change the due-date.";
    }
  }
}

/***/ }),

/***/ "./src/scripts/isDoneModal.js":
/*!************************************!*\
  !*** ./src/scripts/isDoneModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showIsDoneModal": () => (/* binding */ showIsDoneModal)
/* harmony export */ });
/* harmony import */ var _archiveObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./archiveObject */ "./src/scripts/archiveObject.js");

var modal = document.getElementById('input-modal');
function showIsDoneModal(index, category, header, checkbox) {
  var doneContainer = document.createElement('div');
  var infoContainer = document.createElement('div');
  var info = document.createElement('div');
  var itemHeader = document.createElement('div');
  var doneButtonContainer = document.createElement('div');
  var yesBtn = document.createElement('button');
  var noBtn = document.createElement('button');
  doneContainer.appendChild(infoContainer);
  doneContainer.appendChild(doneButtonContainer);
  infoContainer.appendChild(info);
  infoContainer.appendChild(itemHeader);
  doneButtonContainer.appendChild(yesBtn);
  doneButtonContainer.appendChild(noBtn);
  doneContainer.classList.add('done-modal-containers');
  infoContainer.classList.add('done-info-container');
  info.classList.add('done-info');
  itemHeader.classList.add('done-info-header');
  doneButtonContainer.classList.add('done-button-container');
  yesBtn.classList.add('done-btn-style');
  noBtn.classList.add('done-btn-style');
  info.textContent = "Are you sure you're done at";
  itemHeader.textContent = "".concat(header, "?");
  yesBtn.textContent = "YES";
  noBtn.textContent = "NO";
  yesBtn.addEventListener('click', function () {
    clearOutContainer(modal);
    (0,_archiveObject__WEBPACK_IMPORTED_MODULE_0__.putToArchive)(index, category);
    modal.style.display = "none";
  });
  noBtn.addEventListener('click', function () {
    clearOutContainer(modal);
    modal.style.display = "none";
    checkbox.checked = false;
  });
  return doneContainer;
}
function clearOutContainer(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/***/ }),

/***/ "./src/scripts/personal.js":
/*!*********************************!*\
  !*** ./src/scripts/personal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPersonalToDo": () => (/* binding */ createPersonalToDo),
/* harmony export */   "default": () => (/* binding */ personalModule),
/* harmony export */   "personalItemHolder": () => (/* binding */ personalItemHolder)
/* harmony export */ });
/* harmony import */ var _styles_personal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/personal.scss */ "./src/styles/personal.scss");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/scripts/form.js");
/* harmony import */ var _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrayofobjects */ "./src/scripts/arrayofobjects.js");
/* harmony import */ var _deleteModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteModal */ "./src/scripts/deleteModal.js");
/* harmony import */ var _editModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editModal */ "./src/scripts/editModal.js");
/* harmony import */ var _isDoneModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isDoneModal */ "./src/scripts/isDoneModal.js");






var modal = document.getElementById('input-modal');
function personalModule(parent) {
  var introContainer = document.createElement('div');
  var introHeader = document.createElement('h1');
  var introSubtextContainer = document.createElement('div');
  var introSubText1 = document.createElement('p');
  var showInputBtn = document.createElement('button');
  introContainer.classList.add('intro-container');
  introHeader.classList.add('intro-header');
  introSubtextContainer.classList.add('intro-subtext-container');
  showInputBtn.classList.add('show-input-btn');
  introHeader.textContent = "Personal";
  introSubText1.textContent = "Doing something really productive for yourself?! Cap.";
  showInputBtn.textContent = "CREATE";
  introContainer.appendChild(introHeader);
  introContainer.appendChild(introSubtextContainer);
  introSubtextContainer.appendChild(introSubText1);
  introContainer.appendChild(showInputBtn);
  showInputBtn.addEventListener('click', function () {
    modal.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_1__.showForm)("personal"));
    modal.style.display = "flex";
  });
  return introContainer;
}
function createPersonalToDo() {
  var toDoContainer = document.createElement('div');
  var toDoHeader = document.createElement('h2');
  var line = document.createElement('hr');
  toDoContainer.appendChild(toDoHeader);
  toDoContainer.setAttribute('id', 'to-do-personal-container');
  toDoContainer.appendChild(line);
  toDoContainer.classList.add('to-do-container');
  line.classList.add('line');
  toDoHeader.textContent = "Personal";
  return toDoContainer;
}
function personalItemHolder() {
  var toDoHolder = document.createElement('div');
  if (_arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal.length === 0) {
    var noItem = document.createElement('div');
    toDoHolder.appendChild(noItem);
    toDoHolder.classList.add('to-do-holder');
    toDoHolder.setAttribute('id', 'personal-holder');
    noItem.classList.add('no-item-placeholder');
    noItem.textContent = "Don't you have to do something?";
    noItem.style.color = "#ECECEC";
    noItem.style.textAlign = "center";
    return toDoHolder;
  }
  var _loop = function _loop(i) {
    var toDoItem = document.createElement('div');
    var toDoCheckBox = document.createElement('input');
    var toDoDetailsContainer = document.createElement('div');
    var toDoHeaderAndDueOptionsContainer = document.createElement('div');
    var toDoSubText = document.createElement('div');
    var toDoItemHeader = document.createElement('div');
    var dueOptionsContainer = document.createElement('div');
    var dueContainer = document.createElement('div');
    var dueHolderText = document.createElement('div');
    var dueText = document.createElement('div');
    var optionsContainer = document.createElement('div');
    var deleteBtn = document.createElement('i');
    var editBtn = document.createElement('i');
    var checkBtn = document.createElement('i');

    //inside todoholder
    toDoHolder.appendChild(toDoItem);
    toDoItem.appendChild(toDoCheckBox);
    toDoItem.appendChild(toDoDetailsContainer);
    toDoDetailsContainer.appendChild(toDoHeaderAndDueOptionsContainer);
    toDoDetailsContainer.appendChild(toDoSubText);
    toDoHeaderAndDueOptionsContainer.appendChild(toDoItemHeader);
    toDoHeaderAndDueOptionsContainer.appendChild(dueOptionsContainer);
    dueOptionsContainer.appendChild(dueContainer);
    dueContainer.appendChild(dueHolderText);
    dueContainer.appendChild(dueText);
    dueOptionsContainer.appendChild(optionsContainer);
    optionsContainer.appendChild(deleteBtn);
    optionsContainer.appendChild(editBtn);
    optionsContainer.appendChild(checkBtn);
    toDoHolder.classList.add('to-do-holder');
    toDoHolder.setAttribute('id', 'personal-holder');
    toDoItem.classList.add('to-do-item');
    toDoCheckBox.classList.add('to-do-check-box');
    toDoDetailsContainer.classList.add('to-do-details-container');
    toDoHeaderAndDueOptionsContainer.classList.add('header-and-due-options-container');
    toDoSubText.classList.add('to-do-sub-text');
    toDoItemHeader.classList.add('to-do-item-header');
    dueOptionsContainer.classList.add('due-options-container');
    dueContainer.classList.add('due-container');
    dueHolderText.classList.add('due-holder-text');
    dueText.classList.add('due-text');
    optionsContainer.classList.add('options-container');
    deleteBtn.classList.add('fa-solid');
    deleteBtn.classList.add('fa-trash');
    editBtn.classList.add('fa-solid');
    editBtn.classList.add('fa-pen');
    checkBtn.classList.add('fa-solid');
    checkBtn.classList.add('fa-check');
    toDoCheckBox.setAttribute('type', 'checkbox');
    toDoItemHeader.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].header;
    toDoSubText.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].description;
    dueHolderText.textContent = "Due:";
    dueText.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].dueDate;

    //functionalities of each to-do items
    toDoCheckBox.addEventListener('click', function () {
      modal.appendChild((0,_isDoneModal__WEBPACK_IMPORTED_MODULE_5__.showIsDoneModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].header, toDoCheckBox));
      modal.style.display = "flex";
    });
    deleteBtn.addEventListener('click', function () {
      modal.appendChild((0,_deleteModal__WEBPACK_IMPORTED_MODULE_3__.showDeleteModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].header));
      modal.style.display = "flex";
    });
    editBtn.addEventListener('click', function () {
      modal.appendChild((0,_editModal__WEBPACK_IMPORTED_MODULE_4__.showEditModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].header, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].description));
      modal.style.display = "flex";
    });
    checkBtn.addEventListener('click', function () {
      modal.appendChild((0,_isDoneModal__WEBPACK_IMPORTED_MODULE_5__.showIsDoneModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal[i].header, toDoCheckBox));
      modal.style.display = "flex";
    });
  };
  for (var i = 0; i < _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.personal.length; i++) {
    _loop(i);
  }
  return toDoHolder;
}

/***/ }),

/***/ "./src/scripts/retrieveObjects.js":
/*!****************************************!*\
  !*** ./src/scripts/retrieveObjects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retrieveAll": () => (/* binding */ retrieveAll),
/* harmony export */   "retrieveArchive": () => (/* binding */ retrieveArchive),
/* harmony export */   "retrievePersonal": () => (/* binding */ retrievePersonal),
/* harmony export */   "retrieveSchool": () => (/* binding */ retrieveSchool),
/* harmony export */   "retrieveWork": () => (/* binding */ retrieveWork)
/* harmony export */ });
/* harmony import */ var _ToDoClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoClass */ "./src/scripts/ToDoClass.js");
/* harmony import */ var _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayofobjects */ "./src/scripts/arrayofobjects.js");


function retrieveSchool() {
  // Will retrieve the data in localStorage
  var retrievedSchoolData = JSON.parse(localStorage.getItem("school"));
  if (retrievedSchoolData != null) {
    // Also everytime when the navigation is pressed. 
    // The array of this page will be cleared out
    // Same goes for every function.
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.school.length = 0;
    for (var i = 0; i < retrievedSchoolData.length; i++) {
      var category = retrievedSchoolData[i].category;
      var header = retrievedSchoolData[i].header;
      var description = retrievedSchoolData[i].description;
      var dueDate = retrievedSchoolData[i].dueDate;
      var schoolData = new _ToDoClass__WEBPACK_IMPORTED_MODULE_0__["default"](category, header, description, dueDate);
      _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.school.push(schoolData);
    }
  }
}
function retrieveWork() {
  var retrievedWorkData = JSON.parse(localStorage.getItem("work"));
  if (retrievedWorkData != null) {
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.work.length = 0;
    for (var i = 0; i < retrievedWorkData.length; i++) {
      var category = retrievedWorkData[i].category;
      var header = retrievedWorkData[i].header;
      var description = retrievedWorkData[i].description;
      var dueDate = retrievedWorkData[i].dueDate;
      var workData = new _ToDoClass__WEBPACK_IMPORTED_MODULE_0__["default"](category, header, description, dueDate);
      _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.work.push(workData);
    }
  }
}
function retrievePersonal() {
  var retrievedPersonalData = JSON.parse(localStorage.getItem("personal"));
  if (retrievedPersonalData != null) {
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.personal.length = 0;
    for (var i = 0; i < retrievedPersonalData.length; i++) {
      var category = retrievedPersonalData[i].category;
      var header = retrievedPersonalData[i].header;
      var description = retrievedPersonalData[i].description;
      var dueDate = retrievedPersonalData[i].dueDate;
      var personalData = new _ToDoClass__WEBPACK_IMPORTED_MODULE_0__["default"](category, header, description, dueDate);
      _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.personal.push(personalData);
    }
  }
}
function retrieveArchive() {
  var retrievedArchiveData = JSON.parse(localStorage.getItem("archive"));
  if (retrievedArchiveData != null) {
    _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.archive.length = 0;
    for (var i = 0; i < retrievedArchiveData.length; i++) {
      var category = retrievedArchiveData[i].category;
      var header = retrievedArchiveData[i].header;
      var description = retrievedArchiveData[i].description;
      var dueDate = retrievedArchiveData[i].dueDate;
      var archiveData = new _ToDoClass__WEBPACK_IMPORTED_MODULE_0__["default"](category, header, description, dueDate);
      _arrayofobjects__WEBPACK_IMPORTED_MODULE_1__.archive.push(archiveData);
    }
  }
}
function retrieveAll() {
  retrieveSchool();
  retrieveWork();
  retrievePersonal();
}

/***/ }),

/***/ "./src/scripts/school.js":
/*!*******************************!*\
  !*** ./src/scripts/school.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSchoolToDo": () => (/* binding */ createSchoolToDo),
/* harmony export */   "default": () => (/* binding */ schoolModule),
/* harmony export */   "schoolItemHolder": () => (/* binding */ schoolItemHolder)
/* harmony export */ });
/* harmony import */ var _styles_school_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/school.scss */ "./src/styles/school.scss");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/scripts/form.js");
/* harmony import */ var _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrayofobjects */ "./src/scripts/arrayofobjects.js");
/* harmony import */ var _deleteModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteModal */ "./src/scripts/deleteModal.js");
/* harmony import */ var _editModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editModal */ "./src/scripts/editModal.js");
/* harmony import */ var _isDoneModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isDoneModal */ "./src/scripts/isDoneModal.js");






var modal = document.getElementById('input-modal');
function schoolModule(parent) {
  var introContainer = document.createElement('div');
  var introHeader = document.createElement('h1');
  var introSubtextContainer = document.createElement('div');
  var introSubText1 = document.createElement('p');
  var introSubText2 = document.createElement('p');
  var showInputBtn = document.createElement('button');
  introContainer.classList.add('intro-container');
  introHeader.classList.add('intro-header');
  introSubtextContainer.classList.add('intro-subtext-container');
  showInputBtn.classList.add('show-input-btn');
  introHeader.textContent = "School";
  introSubText1.textContent = "Seems like you're the student,";
  introSubText2.textContent = "that tells the teacher about the homework.";
  showInputBtn.textContent = "CREATE";
  introContainer.appendChild(introHeader);
  introContainer.appendChild(introSubtextContainer);
  introSubtextContainer.appendChild(introSubText1);
  introSubtextContainer.appendChild(introSubText2);
  introContainer.appendChild(showInputBtn);
  showInputBtn.addEventListener('click', function () {
    modal.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_1__.showForm)("school"));
    modal.style.display = "flex";
  });
  return introContainer;
}
function createSchoolToDo() {
  var toDoContainer = document.createElement('div');
  var toDoHeader = document.createElement('h2');
  var line = document.createElement('hr');
  toDoContainer.appendChild(toDoHeader);
  toDoContainer.appendChild(line);
  toDoContainer.classList.add('to-do-container');
  toDoContainer.setAttribute('id', 'to-do-school-container');
  line.classList.add('line');
  toDoHeader.textContent = "School";
  return toDoContainer;
}
function schoolItemHolder() {
  var toDoHolder = document.createElement('div');
  if (_arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school.length === 0) {
    var noItem = document.createElement('div');
    toDoHolder.appendChild(noItem);
    toDoHolder.classList.add('to-do-holder');
    toDoHolder.setAttribute('id', 'school-holder');
    noItem.classList.add('no-item-placeholder');
    noItem.textContent = "No homeworks currently?";
    noItem.style.color = "#ECECEC";
    noItem.style.textAlign = "center";
    return toDoHolder;
  }
  var _loop = function _loop(i) {
    var toDoItem = document.createElement('div');
    var toDoCheckBox = document.createElement('input');
    var toDoDetailsContainer = document.createElement('div');
    var toDoHeaderAndDueOptionsContainer = document.createElement('div');
    var toDoSubText = document.createElement('div');
    var toDoItemHeader = document.createElement('div');
    var dueOptionsContainer = document.createElement('div');
    var dueContainer = document.createElement('div');
    var dueHolderText = document.createElement('div');
    var dueText = document.createElement('div');
    var optionsContainer = document.createElement('div');
    var deleteBtn = document.createElement('i');
    var editBtn = document.createElement('i');
    var checkBtn = document.createElement('i');

    //inside todoholder
    toDoHolder.appendChild(toDoItem);
    toDoItem.appendChild(toDoCheckBox);
    toDoItem.appendChild(toDoDetailsContainer);
    toDoDetailsContainer.appendChild(toDoHeaderAndDueOptionsContainer);
    toDoDetailsContainer.appendChild(toDoSubText);
    toDoHeaderAndDueOptionsContainer.appendChild(toDoItemHeader);
    toDoHeaderAndDueOptionsContainer.appendChild(dueOptionsContainer);
    dueOptionsContainer.appendChild(dueContainer);
    dueContainer.appendChild(dueHolderText);
    dueContainer.appendChild(dueText);
    dueOptionsContainer.appendChild(optionsContainer);
    optionsContainer.appendChild(deleteBtn);
    optionsContainer.appendChild(editBtn);
    optionsContainer.appendChild(checkBtn);
    toDoHolder.classList.add('to-do-holder');
    toDoHolder.setAttribute('id', 'school-holder');
    toDoItem.classList.add('to-do-item');
    toDoCheckBox.classList.add('to-do-check-box');
    toDoDetailsContainer.classList.add('to-do-details-container');
    toDoHeaderAndDueOptionsContainer.classList.add('header-and-due-options-container');
    toDoSubText.classList.add('to-do-sub-text');
    toDoItemHeader.classList.add('to-do-item-header');
    dueOptionsContainer.classList.add('due-options-container');
    dueContainer.classList.add('due-container');
    dueHolderText.classList.add('due-holder-text');
    dueText.classList.add('due-text');
    optionsContainer.classList.add('options-container');
    deleteBtn.classList.add('fa-solid');
    deleteBtn.classList.add('fa-trash');
    editBtn.classList.add('fa-solid');
    editBtn.classList.add('fa-pen');
    checkBtn.classList.add('fa-solid');
    checkBtn.classList.add('fa-check');
    toDoCheckBox.setAttribute('type', 'checkbox');
    toDoItemHeader.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].header;
    toDoSubText.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].description;
    dueHolderText.textContent = "Due:";
    dueText.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].dueDate;

    //functionalities of each to-do items
    toDoCheckBox.addEventListener('click', function () {
      modal.appendChild((0,_isDoneModal__WEBPACK_IMPORTED_MODULE_5__.showIsDoneModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].header, toDoCheckBox));
      modal.style.display = "flex";
    });
    deleteBtn.addEventListener('click', function () {
      modal.appendChild((0,_deleteModal__WEBPACK_IMPORTED_MODULE_3__.showDeleteModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].header));
      modal.style.display = "flex";
    });
    editBtn.addEventListener('click', function () {
      modal.appendChild((0,_editModal__WEBPACK_IMPORTED_MODULE_4__.showEditModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].header, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].description));
      modal.style.display = "flex";
    });
    checkBtn.addEventListener('click', function () {
      modal.appendChild((0,_isDoneModal__WEBPACK_IMPORTED_MODULE_5__.showIsDoneModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school[i].header, toDoCheckBox));
      modal.style.display = "flex";
    });
  };
  for (var i = 0; i < _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.school.length; i++) {
    _loop(i);
  }
  return toDoHolder;
}

/***/ }),

/***/ "./src/scripts/successModal.js":
/*!*************************************!*\
  !*** ./src/scripts/successModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showSuccessModal)
/* harmony export */ });
var modal = document.getElementById('input-modal');
function showSuccessModal(category) {
  var successContainer = document.createElement('div');
  var infoContainer = document.createElement('div');
  var info = document.createElement('div');
  var itemHeader = document.createElement('div');
  var successButtonContainer = document.createElement('div');
  var yesBtn = document.createElement('button');
  successContainer.appendChild(infoContainer);
  successContainer.appendChild(successButtonContainer);
  infoContainer.appendChild(info);
  infoContainer.appendChild(itemHeader);
  successButtonContainer.appendChild(yesBtn);
  successContainer.classList.add('success-modal-containers');
  infoContainer.classList.add('success-info-container');
  info.classList.add('success-info');
  itemHeader.classList.add('success-info-header');
  successButtonContainer.classList.add('success-button-container');
  yesBtn.classList.add('success-btn-style');
  info.textContent = "Successfully added to your";
  itemHeader.textContent = "".concat(category.charAt(0).toUpperCase() + category.slice(1), " page!");
  yesBtn.textContent = "OKAY";
  yesBtn.addEventListener('click', function () {
    clearOutContainer(modal);
    modal.style.display = "none";
  });
  return successContainer;
}
function clearOutContainer(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/***/ }),

/***/ "./src/scripts/work.js":
/*!*****************************!*\
  !*** ./src/scripts/work.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWorkToDo": () => (/* binding */ createWorkToDo),
/* harmony export */   "default": () => (/* binding */ workModule),
/* harmony export */   "workItemHolder": () => (/* binding */ workItemHolder)
/* harmony export */ });
/* harmony import */ var _styles_work_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/work.scss */ "./src/styles/work.scss");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/scripts/form.js");
/* harmony import */ var _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrayofobjects */ "./src/scripts/arrayofobjects.js");
/* harmony import */ var _deleteModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteModal */ "./src/scripts/deleteModal.js");
/* harmony import */ var _editModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editModal */ "./src/scripts/editModal.js");
/* harmony import */ var _isDoneModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isDoneModal */ "./src/scripts/isDoneModal.js");






var modal = document.getElementById('input-modal');
function workModule(parent) {
  var introContainer = document.createElement('div');
  var introHeader = document.createElement('h1');
  var introSubtextContainer = document.createElement('div');
  var introSubText1 = document.createElement('p');
  var showInputBtn = document.createElement('button');
  introContainer.classList.add('intro-container');
  introHeader.classList.add('intro-header');
  introSubtextContainer.classList.add('intro-subtext-container');
  showInputBtn.classList.add('show-input-btn');
  introHeader.textContent = "Work";
  introSubText1.textContent = "Do you think this task will be done in its due date?";
  showInputBtn.textContent = "CREATE";
  introContainer.appendChild(introHeader);
  introContainer.appendChild(introSubtextContainer);
  introSubtextContainer.appendChild(introSubText1);
  introContainer.appendChild(showInputBtn);
  showInputBtn.addEventListener('click', function () {
    modal.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_1__.showForm)("work"));
    modal.style.display = "flex";
  });
  return introContainer;
}
function createWorkToDo() {
  var toDoContainer = document.createElement('div');
  var toDoHeader = document.createElement('h2');
  var line = document.createElement('hr');
  toDoContainer.appendChild(toDoHeader);
  toDoContainer.setAttribute('id', 'to-do-work-container');
  toDoContainer.appendChild(line);
  toDoContainer.classList.add('to-do-container');
  line.classList.add('line');
  toDoHeader.textContent = "Work";
  return toDoContainer;
}
function workItemHolder() {
  var toDoHolder = document.createElement('div');
  if (_arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work.length === 0) {
    var noItem = document.createElement('div');
    toDoHolder.appendChild(noItem);
    toDoHolder.classList.add('to-do-holder');
    toDoHolder.setAttribute('id', 'work-holder');
    noItem.classList.add('no-item-placeholder');
    noItem.textContent = "Are you currently on leave?";
    noItem.style.color = "#ECECEC";
    noItem.style.textAlign = "center";
    return toDoHolder;
  }
  var _loop = function _loop(i) {
    var toDoItem = document.createElement('div');
    var toDoCheckBox = document.createElement('input');
    var toDoDetailsContainer = document.createElement('div');
    var toDoHeaderAndDueOptionsContainer = document.createElement('div');
    var toDoSubText = document.createElement('div');
    var toDoItemHeader = document.createElement('div');
    var dueOptionsContainer = document.createElement('div');
    var dueContainer = document.createElement('div');
    var dueHolderText = document.createElement('div');
    var dueText = document.createElement('div');
    var optionsContainer = document.createElement('div');
    var deleteBtn = document.createElement('i');
    var editBtn = document.createElement('i');
    var checkBtn = document.createElement('i');

    //inside todoholder
    toDoHolder.appendChild(toDoItem);
    toDoItem.appendChild(toDoCheckBox);
    toDoItem.appendChild(toDoDetailsContainer);
    toDoDetailsContainer.appendChild(toDoHeaderAndDueOptionsContainer);
    toDoDetailsContainer.appendChild(toDoSubText);
    toDoHeaderAndDueOptionsContainer.appendChild(toDoItemHeader);
    toDoHeaderAndDueOptionsContainer.appendChild(dueOptionsContainer);
    dueOptionsContainer.appendChild(dueContainer);
    dueContainer.appendChild(dueHolderText);
    dueContainer.appendChild(dueText);
    dueOptionsContainer.appendChild(optionsContainer);
    optionsContainer.appendChild(deleteBtn);
    optionsContainer.appendChild(editBtn);
    optionsContainer.appendChild(checkBtn);
    toDoHolder.classList.add('to-do-holder');
    toDoHolder.setAttribute('id', 'work-holder');
    toDoItem.classList.add('to-do-item');
    toDoCheckBox.classList.add('to-do-check-box');
    toDoDetailsContainer.classList.add('to-do-details-container');
    toDoHeaderAndDueOptionsContainer.classList.add('header-and-due-options-container');
    toDoSubText.classList.add('to-do-sub-text');
    toDoItemHeader.classList.add('to-do-item-header');
    dueOptionsContainer.classList.add('due-options-container');
    dueContainer.classList.add('due-container');
    dueHolderText.classList.add('due-holder-text');
    dueText.classList.add('due-text');
    optionsContainer.classList.add('options-container');
    deleteBtn.classList.add('fa-solid');
    deleteBtn.classList.add('fa-trash');
    editBtn.classList.add('fa-solid');
    editBtn.classList.add('fa-pen');
    checkBtn.classList.add('fa-solid');
    checkBtn.classList.add('fa-check');
    toDoCheckBox.setAttribute('type', 'checkbox');
    toDoItemHeader.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].header;
    toDoSubText.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].description;
    dueHolderText.textContent = "Due:";
    dueText.textContent = _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].dueDate;

    //functionalities of each to-do items
    toDoCheckBox.addEventListener('click', function () {
      modal.appendChild((0,_isDoneModal__WEBPACK_IMPORTED_MODULE_5__.showIsDoneModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].header, toDoCheckBox));
      modal.style.display = "flex";
    });
    deleteBtn.addEventListener('click', function () {
      modal.appendChild((0,_deleteModal__WEBPACK_IMPORTED_MODULE_3__.showDeleteModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].header));
      modal.style.display = "flex";
    });
    editBtn.addEventListener('click', function () {
      modal.appendChild((0,_editModal__WEBPACK_IMPORTED_MODULE_4__.showEditModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].header, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].description));
      modal.style.display = "flex";
    });
    checkBtn.addEventListener('click', function () {
      modal.appendChild((0,_isDoneModal__WEBPACK_IMPORTED_MODULE_5__.showIsDoneModal)(i, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].category, _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work[i].header, toDoCheckBox));
      modal.style.display = "flex";
    });
  };
  for (var i = 0; i < _arrayofobjects__WEBPACK_IMPORTED_MODULE_2__.work.length; i++) {
    _loop(i);
  }
  return toDoHolder;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/all.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/all.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".intro-container {\n  display: flex;\n  flex-direction: column;\n  color: #1E1E1E;\n  margin-bottom: 48px;\n  animation-name: showIntro;\n  animation-duration: 1.2s;\n}\n@keyframes showIntro {\n  from {\n    opacity: 0;\n    margin-left: -50px;\n  }\n  to {\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n\n.intro-header {\n  font-size: 3.5rem;\n}\n\n.intro-subtext-container {\n  display: flex;\n  flex-direction: column;\n  font-weight: 300;\n  gap: 8px;\n  margin-bottom: 12px;\n  font-size: 1.8rem;\n}\n\n.show-input-btn {\n  color: #1E1E1E;\n  cursor: pointer;\n  font-size: 1.2rem;\n  width: 120px;\n  height: 50px;\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  transition: 250ms ease-in-out;\n  box-shadow: 0 4px 3px 1px #888888;\n}\n.show-input-btn:hover {\n  color: #ECECEC;\n  background-color: #1E1E1E;\n}\n.show-input-btn:active {\n  background-color: #ECECEC;\n  color: #1E1E1E;\n  border: 1px solid #1E1E1E;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  animation-name: showInput;\n  animation-duration: 1.2s;\n}\n@keyframes showInput {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.input-container .input-header {\n  font-size: 1.5rem;\n}\n.input-container .input-form-container {\n  border-radius: 10px;\n  padding: 1.2em;\n  background-color: #FFFFFF;\n}\n\n.input-form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  color: #1E1E1E;\n}\n.input-form .category-holder, .input-form .task-header-holder,\n.input-form .task-desc-holder, .input-form .due-date-time-holder {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.input-form .category-holder select, .input-form .category-holder input, .input-form .category-holder textarea, .input-form .task-header-holder select, .input-form .task-header-holder input, .input-form .task-header-holder textarea,\n.input-form .task-desc-holder select,\n.input-form .task-desc-holder input,\n.input-form .task-desc-holder textarea, .input-form .due-date-time-holder select, .input-form .due-date-time-holder input, .input-form .due-date-time-holder textarea {\n  font-family: \"Roboto\", sans-serif;\n  height: 45px;\n  padding: 0.4em;\n  outline: none;\n  border: none;\n  background-color: #ECECEC;\n}\n.input-form .category-holder select option, .input-form .task-header-holder select option,\n.input-form .task-desc-holder select option, .input-form .due-date-time-holder select option {\n  background-color: #1E1E1E;\n  color: #ECECEC;\n}\n.input-form .category-holder select option:hover, .input-form .task-header-holder select option:hover,\n.input-form .task-desc-holder select option:hover, .input-form .due-date-time-holder select option:hover {\n  background-color: #888888;\n}\n.input-form #submit-input-btn {\n  cursor: pointer;\n  border-radius: 10px;\n  box-shadow: 0 4px 3px 1px #888888;\n  width: 120px;\n  height: 40px;\n  font-size: 1rem;\n  font-weight: 300;\n  border: none;\n  outline: none;\n  transition: 250ms ease-in-out;\n  box-shadow: 0 4px 3px 1px #888888;\n}\n.input-form #submit-input-btn:hover {\n  color: #ECECEC;\n  background-color: #1E1E1E;\n}\n.input-form #submit-input-btn:active {\n  background-color: #ECECEC;\n  color: #1E1E1E;\n  border: 1px solid #1E1E1E;\n}\n\n@media only screen and (max-width: 55em) {\n  .intro-header {\n    font-size: 3rem;\n  }\n  .intro-subtext-container {\n    font-size: 1.5rem;\n  }\n  .show-input-btn {\n    font-size: 1rem;\n    width: 110px;\n    height: 40px;\n  }\n  .input-container .input-header {\n    font-size: 1.1rem;\n  }\n  .input-container .input-form-container {\n    border-radius: 10px;\n    padding: 1em;\n    background-color: #FFFFFF;\n  }\n}\n@media only screen and (max-width: 31.25em) {\n  .intro-container {\n    margin-bottom: 28px;\n  }\n  .intro-header {\n    font-size: 9vw;\n  }\n  .intro-subtext-container {\n    font-size: 5vw;\n    gap: 2px;\n    margin-bottom: 8px;\n  }\n  .show-input-btn {\n    font-size: 0.8rem;\n    width: 90px;\n    height: 35px;\n  }\n  .input-container .input-header {\n    font-size: 4.5vw;\n  }\n  .input-container .input-form-container {\n    border-radius: 10px;\n    padding: 1em;\n    background-color: #FFFFFF;\n  }\n  .input-container .input-form-container .input-form .category-holder label, .input-container .input-form-container .input-form .task-header-holder label,\n  .input-container .input-form-container .input-form .task-desc-holder label, .input-container .input-form-container .input-form .due-date-time-holder label {\n    font-size: 0.8rem;\n  }\n  .input-container .input-form-container .input-form .category-holder input, .input-container .input-form-container .input-form .category-holder select, .input-container .input-form-container .input-form .category-holder textarea, .input-container .input-form-container .input-form .task-header-holder input, .input-container .input-form-container .input-form .task-header-holder select, .input-container .input-form-container .input-form .task-header-holder textarea,\n  .input-container .input-form-container .input-form .task-desc-holder input,\n  .input-container .input-form-container .input-form .task-desc-holder select,\n  .input-container .input-form-container .input-form .task-desc-holder textarea, .input-container .input-form-container .input-form .due-date-time-holder input, .input-container .input-form-container .input-form .due-date-time-holder select, .input-container .input-form-container .input-form .due-date-time-holder textarea {\n    height: 40px;\n  }\n  .input-container .input-form-container .input-form .category-holder .button-container #submit-input-btn, .input-container .input-form-container .input-form .category-holder .button-container #close-input-btn, .input-container .input-form-container .input-form .task-header-holder .button-container #submit-input-btn, .input-container .input-form-container .input-form .task-header-holder .button-container #close-input-btn,\n  .input-container .input-form-container .input-form .task-desc-holder .button-container #submit-input-btn,\n  .input-container .input-form-container .input-form .task-desc-holder .button-container #close-input-btn, .input-container .input-form-container .input-form .due-date-time-holder .button-container #submit-input-btn, .input-container .input-form-container .input-form .due-date-time-holder .button-container #close-input-btn {\n    font-size: 0.8rem;\n    width: 90px;\n    height: 35px;\n  }\n  .input-container .input-form-container .input-form #submit-input-btn, .input-container .input-form-container .input-form #close-input-btn {\n    font-size: 0.8rem;\n    width: 90px;\n    height: 35px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/home.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,cAAA;EACA,mBAAA;EACA,yBAAA;EACA,wBAAA;AACJ;AACI;EACI;IACI,UAAA;IACA,kBAAA;EACV;EAEM;IACI,UAAA;IACA,cAAA;EAAV;AACF;;AAGA;EACI,iBAAA;AAAJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,QAAA;EACA,mBAAA;EACA,iBAAA;AACJ;;AACA;EACI,cAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,6BAAA;EACA,iCAAA;AAEJ;AADI;EACI,cAAA;EACA,yBAAA;AAGR;AADI;EACI,yBAAA;EACA,cAAA;EACA,yBAAA;AAGR;;AAAA;EACI,aAAA;EACA,sBAAA;EACA,QAAA;EACA,yBAAA;EACA,wBAAA;AAGJ;AADI;EACI;IACI,UAAA;EAGV;EAAM;IACI,UAAA;EAEV;AACF;AAAI;EACI,iBAAA;AAER;AAAI;EACI,mBAAA;EACA,cAAA;EACA,yBAAA;AAER;;AACA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,cAAA;AAEJ;AADI;;EAEI,aAAA;EACA,sBAAA;EACA,QAAA;AAGR;AAFQ;;;;EACI,iCAAA;EACA,YAAA;EACA,cAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;AAOZ;AAJY;;EACI,yBAAA;EACA,cAAA;AAOhB;AALY;;EACI,yBAAA;AAQhB;AAJI;EACI,eAAA;EACA,mBAAA;EACA,iCAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,iCAAA;AAMR;AALQ;EACI,cAAA;EACA,yBAAA;AAOZ;AALQ;EACI,yBAAA;EACA,cAAA;EACA,yBAAA;AAOZ;;AAFA;EACI;IACI,eAAA;EAKN;EAHE;IACI,iBAAA;EAKN;EAHE;IACI,eAAA;IACA,YAAA;IACA,YAAA;EAKN;EAFM;IACI,iBAAA;EAIV;EAFM;IACI,mBAAA;IACA,YAAA;IACA,yBAAA;EAIV;AACF;AAAA;EACI;IACI,mBAAA;EAEN;EAAE;IACI,cAAA;EAEN;EAAE;IACI,cAAA;IACA,QAAA;IACA,kBAAA;EAEN;EAAE;IACI,iBAAA;IACA,WAAA;IACA,YAAA;EAEN;EACM;IACI,gBAAA;EACV;EACM;IACI,mBAAA;IACA,YAAA;IACA,yBAAA;EACV;EAGkB;;IACI,iBAAA;EAAtB;EAEkB;;;;IACI,YAAA;EAGtB;EAAsB;;;IACI,iBAAA;IACA,WAAA;IACA,YAAA;EAI1B;EAAc;IACI,iBAAA;IACA,WAAA;IACA,YAAA;EAElB;AACF","sourcesContent":[".intro-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: #1E1E1E;\r\n    margin-bottom: 48px;\r\n    animation-name: showIntro;\r\n    animation-duration: 1.2s;\r\n\r\n    @keyframes showIntro {\r\n        from {\r\n            opacity: 0;\r\n            margin-left: -50px;\r\n        }\r\n\r\n        to {\r\n            opacity: 1;\r\n            margin-left: 0;\r\n        }\r\n    }\r\n}\r\n.intro-header{\r\n    font-size: 3.5rem;\r\n}\r\n.intro-subtext-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-weight: 300;\r\n    gap: 8px;\r\n    margin-bottom: 12px;\r\n    font-size: 1.8rem;\r\n}\r\n.show-input-btn{\r\n    color: #1E1E1E;\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    width: 120px;\r\n    height: 50px;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 10px;\r\n    background-color: #FFFFFF;\r\n    transition: 250ms ease-in-out;\r\n    box-shadow: 0 4px 3px 1px #888888;\r\n    &:hover{\r\n        color: #ECECEC;\r\n        background-color: #1E1E1E;\r\n    }\r\n    &:active{\r\n        background-color: #ECECEC;\r\n        color: #1E1E1E;\r\n        border: 1px solid #1E1E1E;\r\n    }\r\n}\r\n.input-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n    animation-name: showInput;\r\n    animation-duration: 1.2s;\r\n\r\n    @keyframes showInput {\r\n        from {\r\n            opacity: 0;\r\n        }\r\n\r\n        to {\r\n            opacity: 1;\r\n        }\r\n    }\r\n    .input-header{\r\n        font-size: 1.5rem;\r\n    }\r\n    .input-form-container{\r\n        border-radius: 10px;\r\n        padding: 1.2em;\r\n        background-color: #FFFFFF;\r\n    }\r\n}\r\n.input-form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    color: #1E1E1E;\r\n    .category-holder, .task-header-holder,\r\n    .task-desc-holder, .due-date-time-holder{\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 5px;\r\n        select, input, textarea{\r\n            font-family: 'Roboto', sans-serif;\r\n            height: 45px;\r\n            padding: 0.4em;\r\n            outline: none;\r\n            border: none;\r\n            background-color: #ECECEC;\r\n        }\r\n        select{\r\n            option{\r\n                background-color: #1E1E1E;\r\n                color: #ECECEC;\r\n            }\r\n            option:hover{\r\n                background-color: #888888;\r\n            }\r\n        }\r\n    }\r\n    #submit-input-btn{\r\n        cursor: pointer;\r\n        border-radius: 10px;\r\n        box-shadow: 0 4px 3px 1px #888888;\r\n        width: 120px;\r\n        height: 40px;\r\n        font-size: 1rem;\r\n        font-weight: 300;\r\n        border: none;\r\n        outline: none;\r\n        transition: 250ms ease-in-out;\r\n        box-shadow: 0 4px 3px 1px #888888;\r\n        &:hover{\r\n            color: #ECECEC;\r\n            background-color: #1E1E1E;\r\n        }\r\n        &:active{\r\n            background-color: #ECECEC;\r\n            color: #1E1E1E;\r\n            border: 1px solid #1E1E1E;\r\n        }\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 55em){\r\n    .intro-header{\r\n        font-size: 3rem;\r\n    }\r\n    .intro-subtext-container{\r\n        font-size: 1.5rem;\r\n    }\r\n    .show-input-btn{\r\n        font-size: 1rem;\r\n        width: 110px;\r\n        height: 40px;\r\n    }\r\n    .input-container{\r\n        .input-header{\r\n            font-size: 1.1rem;\r\n        }\r\n        .input-form-container{\r\n            border-radius: 10px;\r\n            padding: 1em;\r\n            background-color: #FFFFFF;\r\n        }\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 31.25em){\r\n    .intro-container{\r\n        margin-bottom: 28px;\r\n    }\r\n    .intro-header{\r\n        font-size: 9vw;\r\n    }\r\n    .intro-subtext-container{\r\n        font-size: 5vw;\r\n        gap: 2px;\r\n        margin-bottom: 8px;\r\n    }\r\n    .show-input-btn{\r\n        font-size: 0.8rem;\r\n        width: 90px;\r\n        height: 35px;\r\n    }\r\n    .input-container{\r\n        .input-header{\r\n            font-size: 4.5vw;\r\n        }\r\n        .input-form-container{\r\n            border-radius: 10px;\r\n            padding: 1em;\r\n            background-color: #FFFFFF;\r\n            .input-form{\r\n                .category-holder, .task-header-holder,\r\n                .task-desc-holder, .due-date-time-holder{\r\n                    label{\r\n                        font-size: 0.8rem;\r\n                    }\r\n                    input, select, textarea{\r\n                        height: 40px;\r\n                    }\r\n                    .button-container{\r\n                        #submit-input-btn, #close-input-btn{\r\n                            font-size: 0.8rem;\r\n                            width: 90px;\r\n                            height: 35px;\r\n                        }\r\n                    }\r\n                }\r\n                #submit-input-btn, #close-input-btn{\r\n                    font-size: 0.8rem;\r\n                    width: 90px;\r\n                    height: 35px;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  background-color: #ECECEC;\n}\n\nnav {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #1E1E1E;\n}\nnav .item-container {\n  display: flex;\n  align-items: center;\n  color: #ECECEC;\n  padding: 10px;\n  gap: 15px;\n  transition: 250ms ease-in-out;\n}\nnav .item-container .icon-container {\n  font-size: 1.2rem;\n  padding: 10px;\n}\nnav .item-container .item-text {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnav .item-container:hover {\n  cursor: pointer;\n  background-color: #0F0F0F !important;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n#content {\n  flex: 1;\n  padding: 2rem 3rem;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 3px;\n}\nfooter a {\n  align-self: center;\n  text-decoration: none;\n  color: #1E1E1E;\n  width: fit-content;\n}\nfooter a:hover .name {\n  text-decoration: underline;\n}\nfooter .credit {\n  font-size: 1.2rem;\n  width: auto;\n  display: flex;\n  gap: 0.2em;\n}\nfooter .credit .github-logo {\n  transition: 250ms ease-in-out;\n}\n\n.style-modal {\n  background-color: rgba(17, 17, 17, 0.6);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  position: fixed;\n  overflow: auto;\n  display: none;\n  -webkit-animation-name: openmodal;\n  animation-name: openmodal;\n  -webkit-animation-duration: 0.7s;\n  animation-duration: 0.7s;\n}\n@keyframes openmodal {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.style-modal .input-modal-container {\n  width: 500px;\n  margin: 1em;\n}\n.style-modal .delete-modal-containers, .style-modal .success-modal-containers, .style-modal .done-modal-containers {\n  width: 400px;\n  margin: 1em;\n  background-color: #ECECEC;\n  padding: 1em;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.style-modal .delete-modal-containers .delete-info-container, .style-modal .success-modal-containers .delete-info-container, .style-modal .success-modal-containers .success-info-container, .style-modal .done-modal-containers .delete-info-container, .style-modal .done-modal-containers .done-info-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n}\n.style-modal .delete-modal-containers .delete-info-container .delete-info-header, .style-modal .success-modal-containers .delete-info-container .delete-info-header, .style-modal .success-modal-containers .success-info-container .delete-info-header, .style-modal .done-modal-containers .delete-info-container .delete-info-header, .style-modal .done-modal-containers .done-info-container .delete-info-header {\n  font-weight: bold;\n}\n.style-modal .delete-modal-containers .delete-button-container, .style-modal .success-modal-containers .delete-button-container, .style-modal .success-modal-containers .success-button-container, .style-modal .done-modal-containers .delete-button-container, .style-modal .done-modal-containers .done-button-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n}\n.style-modal .delete-modal-containers .delete-button-container .delete-btn-style, .style-modal .success-modal-containers .delete-button-container .delete-btn-style, .style-modal .success-modal-containers .success-button-container .delete-btn-style, .style-modal .success-modal-containers .success-button-container .success-btn-style, .style-modal .done-modal-containers .delete-button-container .delete-btn-style, .style-modal .done-modal-containers .done-button-container .delete-btn-style, .style-modal .done-modal-containers .done-button-container .done-btn-style {\n  cursor: pointer;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  width: 120px;\n  height: 40px;\n  font-size: 1rem;\n  font-weight: 300;\n  border: none;\n  outline: none;\n  transition: 250ms ease-in-out;\n  box-shadow: 0 4px 3px 1px #888888;\n}\n.style-modal .delete-modal-containers .delete-button-container .delete-btn-style:hover, .style-modal .success-modal-containers .delete-button-container .delete-btn-style:hover, .style-modal .success-modal-containers .success-button-container .delete-btn-style:hover, .style-modal .success-modal-containers .success-button-container .success-btn-style:hover, .style-modal .done-modal-containers .delete-button-container .delete-btn-style:hover, .style-modal .done-modal-containers .done-button-container .delete-btn-style:hover, .style-modal .done-modal-containers .done-button-container .done-btn-style:hover {\n  color: #ECECEC;\n  background-color: #1E1E1E;\n}\n.style-modal .delete-modal-containers .delete-button-container .delete-btn-style:active, .style-modal .success-modal-containers .delete-button-container .delete-btn-style:active, .style-modal .success-modal-containers .success-button-container .delete-btn-style:active, .style-modal .success-modal-containers .success-button-container .success-btn-style:active, .style-modal .done-modal-containers .delete-button-container .delete-btn-style:active, .style-modal .done-modal-containers .done-button-container .delete-btn-style:active, .style-modal .done-modal-containers .done-button-container .done-btn-style:active {\n  background-color: #ECECEC;\n  color: #1E1E1E;\n  border: 1px solid #1E1E1E;\n}\n.style-modal .edit-modal-container {\n  background-color: #FFFFFF;\n  width: 500px;\n  border-radius: 10px;\n  padding: 1.2em;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin: 1em;\n}\n.style-modal .edit-modal-container .edit-info-container {\n  font-size: 1.2rem;\n}\n.style-modal .edit-modal-container .edit-info-container .edit-info-sub-text {\n  font-weight: 300;\n}\n.style-modal .edit-modal-container .edit-info-container .edit-info {\n  font-weight: bold;\n}\n.style-modal .edit-modal-container .edit-form-holder .edit-form {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-header-holder, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-desc-holder, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-due-date-holder {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-header-holder input, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-desc-holder input, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-due-date-holder input {\n  height: 45px;\n  padding: 0.4em;\n  outline: none;\n  border: none;\n  background-color: #ECECEC;\n}\n.style-modal .edit-modal-container .edit-form-holder .edit-form .edit-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.style-modal .edit-modal-container .edit-form-holder .edit-form .edit-btn-container button {\n  cursor: pointer;\n  border-radius: 10px;\n  background-color: #ECECEC;\n  width: 120px;\n  height: 40px;\n  font-size: 1rem;\n  font-weight: 300;\n  border: none;\n  outline: none;\n  transition: 250ms ease-in-out;\n  box-shadow: 0 4px 3px 1px #888888;\n}\n.style-modal .edit-modal-container .edit-form-holder .edit-form .edit-btn-container button:hover {\n  color: #ECECEC;\n  background-color: #1E1E1E;\n}\n.style-modal .edit-modal-container .edit-form-holder .edit-form .edit-btn-container button:active {\n  background-color: #ECECEC;\n  color: #1E1E1E;\n  border: 1px solid #1E1E1E;\n}\n.style-modal .done-modal-containers .done-info-container .done-info-header {\n  font-weight: bold;\n}\n.style-modal .success-modal-containers {\n  -webkit-animation-name: openSuccess;\n  animation-name: openSuccess;\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n}\n@keyframes openSuccess {\n  from {\n    transform: scale(0.5);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.style-modal .success-modal-containers .success-info-container .success-info-header {\n  font-weight: bold;\n}\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.button-container #close-input-btn {\n  cursor: pointer;\n  border-radius: 10px;\n  box-shadow: 0 4px 3px 1px #888888;\n  width: 120px;\n  height: 40px;\n  font-size: 1rem;\n  font-weight: 300;\n  border: none;\n  outline: none;\n  transition: 250ms ease-in-out;\n  box-shadow: 0 4px 3px 1px #888888;\n}\n.button-container #close-input-btn:hover {\n  color: #ECECEC;\n  background-color: #1E1E1E;\n}\n.button-container #close-input-btn:active {\n  background-color: #ECECEC;\n  color: #1E1E1E;\n  border: 1px solid #1E1E1E;\n}\n\n@media only screen and (max-width: 64em) {\n  #content {\n    padding: 1rem 2rem;\n  }\n}\n@media only screen and (max-width: 55em) {\n  nav .item-container {\n    gap: 5px;\n  }\n}\n@media only screen and (max-width: 45.375em) {\n  #content {\n    padding: 1rem 1.5rem;\n  }\n  nav .item-container {\n    justify-content: center;\n  }\n  nav .item-container .item-text {\n    display: none;\n  }\n}\n@media only screen and (max-width: 31.25em) {\n  body {\n    flex-direction: column-reverse;\n  }\n  #content {\n    padding: 1rem;\n  }\n  nav {\n    gap: 4px;\n    flex-direction: row;\n    height: fit-content;\n    align-items: center;\n    justify-content: center;\n  }\n  nav .item-container {\n    padding: 5px;\n    justify-content: center;\n  }\n  nav .item-container .item-text {\n    display: none;\n  }\n  nav .item-container .icon-container {\n    font-size: 0.9rem;\n  }\n  .style-modal .input-modal-container, .style-modal .edit-modal-container {\n    margin: 0.5em;\n  }\n  .style-modal .edit-modal-container {\n    padding: 1em;\n  }\n  .style-modal .edit-modal-container .edit-info-container {\n    font-size: 1rem;\n  }\n  .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-header-holder label, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-desc-holder label, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-due-date-holder label {\n    font-size: 0.8rem;\n  }\n  .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-header-holder input, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-header-holder select, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-header-holder textarea, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-desc-holder input, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-desc-holder select, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-desc-holder textarea, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-due-date-holder input, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-due-date-holder select, .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-input-container .edit-due-date-holder textarea {\n    height: 40px;\n  }\n  .style-modal .edit-modal-container .edit-form-holder .edit-form .edit-btn-container button {\n    font-size: 0.8rem;\n    width: 90px;\n    height: 35px;\n  }\n  .style-modal .delete-modal-containers, .style-modal .done-modal-containers, .style-modal .success-modal-containers {\n    margin: 0.5em;\n  }\n  .style-modal .delete-modal-containers .delete-info-container, .style-modal .done-modal-containers .delete-info-container, .style-modal .success-modal-containers .delete-info-container, .style-modal .done-modal-containers .done-info-container, .style-modal .success-modal-containers .success-info-container {\n    font-size: 0.9rem;\n  }\n  .style-modal .delete-modal-containers .delete-button-container .delete-btn-style, .style-modal .done-modal-containers .delete-button-container .delete-btn-style, .style-modal .success-modal-containers .delete-button-container .delete-btn-style, .style-modal .done-modal-containers .done-button-container .delete-btn-style, .style-modal .success-modal-containers .success-button-container .delete-btn-style, .style-modal .done-modal-containers .done-button-container .done-btn-style, .style-modal .success-modal-containers .success-button-container .success-btn-style {\n    font-size: 0.8rem;\n    width: 90px;\n    height: 35px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AACA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;AACJ;;AACA;EACI,YAAA;AAEJ;;AAAA;EACI,YAAA;EACA,iCAAA;EACA,aAAA;EACA,yBAAA;AAGJ;;AADA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;AAIJ;AAHI;EACI,aAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;EACA,SAAA;EACA,6BAAA;AAKR;AAJQ;EACI,iBAAA;EACA,aAAA;AAMZ;AAJQ;EACI,WAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAMZ;AAJQ;EACI,eAAA;EACA,oCAAA;AAMZ;;AAFA;EACI,OAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AAKJ;;AAHA;EACI,OAAA;EACA,kBAAA;AAMJ;;AAJA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAOJ;AANI;EACI,kBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;AAQR;AALY;EACI,0BAAA;AAOhB;AAFI;EACI,iBAAA;EACA,WAAA;EACA,aAAA;EACA,UAAA;AAIR;AAFQ;EACI,6BAAA;AAIZ;;AAAA;EACI,uCAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,eAAA;EACA,cAAA;EACA,aAAA;EACA,iCAAA;EACA,yBAAA;EACA,gCAAA;EACA,wBAAA;AAGJ;AADI;EACI;IACI,UAAA;EAGV;EAAM;IACI,UAAA;EAEV;AACF;AAAI;EACI,YAAA;EACA,WAAA;AAER;AAAI;EACI,YAAA;EACA,WAAA;EACA,yBAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAER;AADQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;AAGZ;AAFY;EACI,iBAAA;AAIhB;AADQ;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAGZ;AAFY;EACI,eAAA;EACA,mBAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,iCAAA;AAIhB;AAHgB;EACI,cAAA;EACA,yBAAA;AAKpB;AAHgB;EACI,yBAAA;EACA,cAAA;EACA,yBAAA;AAKpB;AAAI;EACI,yBAAA;EACA,YAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,WAAA;AAER;AADQ;EACI,iBAAA;AAGZ;AAFY;EACI,gBAAA;AAIhB;AAFY;EACI,iBAAA;AAIhB;AAAY;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAEhB;AADgB;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAGpB;AAFoB;EACI,aAAA;EACA,sBAAA;EACA,QAAA;AAIxB;AAHwB;EACI,YAAA;EACA,cAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;AAK5B;AADgB;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAGpB;AAFoB;EACI,eAAA;EACA,mBAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,iCAAA;AAIxB;AAHwB;EACI,cAAA;EACA,yBAAA;AAK5B;AAHwB;EACI,yBAAA;EACA,cAAA;EACA,yBAAA;AAK5B;AAMY;EACI,iBAAA;AAJhB;AAcI;EACI,mCAAA;EACA,2BAAA;EACA,gCAAA;EACA,wBAAA;AAZR;AAcQ;EACI;IACI,qBAAA;EAZd;EAeU;IACI,mBAAA;EAbd;AACF;AAkBY;EACI,iBAAA;AAhBhB;AA2BA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAzBJ;AA0BI;EACI,eAAA;EACA,mBAAA;EACA,iCAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,iCAAA;AAxBR;AAyBQ;EACI,cAAA;EACA,yBAAA;AAvBZ;AAyBQ;EACI,yBAAA;EACA,cAAA;EACA,yBAAA;AAvBZ;;AA2BA;EACI;IACI,kBAAA;EAxBN;AACF;AA2BA;EAEQ;IACI,QAAA;EA1BV;AACF;AA8BA;EACI;IACI,oBAAA;EA5BN;EA+BM;IACI,uBAAA;EA7BV;EA8BU;IACI,aAAA;EA5Bd;AACF;AAiCA;EACI;IACI,8BAAA;EA/BN;EAiCE;IACI,aAAA;EA/BN;EAiCE;IACI,QAAA;IACA,mBAAA;IACA,mBAAA;IACA,mBAAA;IACA,uBAAA;EA/BN;EAgCM;IACI,YAAA;IACA,uBAAA;EA9BV;EA+BU;IACI,aAAA;EA7Bd;EA+BU;IACI,iBAAA;EA7Bd;EAkCM;IACI,aAAA;EAhCV;EAkCM;IACI,YAAA;EAhCV;EAiCU;IACI,eAAA;EA/Bd;EAqC0B;IACI,iBAAA;EAnC9B;EAqC0B;IACI,YAAA;EAnC9B;EAwCsB;IACI,iBAAA;IACA,WAAA;IACA,YAAA;EAtC1B;EA4CM;IACI,aAAA;EA1CV;EA2CU;IACI,iBAAA;EAzCd;EA4Cc;IACI,iBAAA;IACA,WAAA;IACA,YAAA;EA1ClB;AACF","sourcesContent":[" @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');\r\n*, *::after, *::before{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nhtml{\r\n    height: 100%;\r\n}\r\nbody{\r\n    height: 100%;\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    background-color: #ECECEC;\r\n}\r\nnav{\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #1E1E1E;\r\n    .item-container{\r\n        display: flex;\r\n        align-items: center;\r\n        color: #ECECEC;\r\n        padding: 10px;\r\n        gap: 15px;\r\n        transition: 250ms ease-in-out;\r\n        .icon-container{\r\n            font-size: 1.2rem;\r\n            padding: 10px;\r\n        }\r\n        .item-text{\r\n            width: 100%;\r\n            padding: 10px;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n        &:hover{\r\n            cursor: pointer;\r\n            background-color: #0F0F0F !important;    \r\n        }\r\n    }\r\n}\r\nmain{\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: scroll;\r\n}\r\n#content{\r\n    flex: 1;\r\n    padding: 2rem 3rem;\r\n}\r\nfooter{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 3px;\r\n    a {\r\n        align-self: center;\r\n        text-decoration: none;\r\n        color: #1E1E1E;\r\n        width: fit-content;\r\n\r\n        &:hover {\r\n            .name {\r\n                text-decoration: underline;\r\n            }\r\n        }\r\n    }\r\n\r\n    .credit {\r\n        font-size: 1.2rem;\r\n        width: auto;\r\n        display: flex;\r\n        gap: 0.2em;\r\n\r\n        .github-logo {\r\n            transition: 250ms ease-in-out;\r\n        }\r\n    }\r\n}\r\n.style-modal{\r\n    background-color: rgba(17, 17, 17, 0.6);\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index: 1;\r\n    position: fixed;\r\n    overflow: auto;\r\n    display: none;\r\n    -webkit-animation-name: openmodal;\r\n    animation-name: openmodal;\r\n    -webkit-animation-duration: 0.7s;\r\n    animation-duration: 0.7s;\r\n\r\n    @keyframes openmodal {\r\n        from {\r\n            opacity: 0;\r\n        }\r\n\r\n        to {\r\n            opacity: 1;\r\n        }\r\n    }\r\n    .input-modal-container{\r\n        width: 500px;\r\n        margin: 1em;\r\n    }\r\n    .delete-modal-containers{\r\n        width: 400px;\r\n        margin: 1em;\r\n        background-color: #ECECEC;\r\n        padding: 1em;\r\n        border-radius: 15px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        .delete-info-container{\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            font-size: 1.2rem;\r\n            margin-bottom: 10px;\r\n            .delete-info-header{\r\n                font-weight: bold;\r\n            }\r\n        }\r\n        .delete-button-container{\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            gap: 18px;\r\n            .delete-btn-style{\r\n                cursor: pointer;\r\n                border-radius: 10px;\r\n                background-color: #FFFFFF;\r\n                width: 120px;\r\n                height: 40px;\r\n                font-size: 1rem;\r\n                font-weight: 300;\r\n                border: none;\r\n                outline: none;\r\n                transition: 250ms ease-in-out;\r\n                box-shadow: 0 4px 3px 1px #888888;\r\n                &:hover{\r\n                    color: #ECECEC;\r\n                    background-color: #1E1E1E;\r\n                }\r\n                &:active{\r\n                    background-color: #ECECEC;\r\n                    color: #1E1E1E;\r\n                    border: 1px solid #1E1E1E;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    .edit-modal-container{\r\n        background-color: #FFFFFF;\r\n        width: 500px;\r\n        border-radius: 10px;\r\n        padding: 1.2em;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 24px;\r\n        margin: 1em;\r\n        .edit-info-container{\r\n            font-size: 1.2rem;\r\n            .edit-info-sub-text{\r\n                font-weight: 300;\r\n            }\r\n            .edit-info{\r\n                font-weight: bold;\r\n            }\r\n        }\r\n        .edit-form-holder{\r\n            .edit-form{\r\n                display: flex;\r\n                flex-direction: column;\r\n                gap: 24px;\r\n                .edit-input-container{\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    gap: 15px;\r\n                    .edit-header-holder, .edit-desc-holder, .edit-due-date-holder{\r\n                        display: flex;\r\n                        flex-direction: column;\r\n                        gap: 5px;\r\n                        input{\r\n                            height: 45px;\r\n                            padding: 0.4em;\r\n                            outline: none;\r\n                            border: none;\r\n                            background-color: #ECECEC;\r\n                        }\r\n                    }\r\n                }\r\n                .edit-btn-container{\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n                    gap: 10px;\r\n                    button{\r\n                        cursor: pointer;\r\n                        border-radius: 10px;\r\n                        background-color: #ECECEC;\r\n                        width: 120px;\r\n                        height: 40px;\r\n                        font-size: 1rem;\r\n                        font-weight: 300;\r\n                        border: none;\r\n                        outline: none;\r\n                        transition: 250ms ease-in-out;\r\n                        box-shadow: 0 4px 3px 1px #888888;\r\n                        &:hover{\r\n                            color: #ECECEC;\r\n                            background-color: #1E1E1E;\r\n                        }\r\n                        &:active{\r\n                            background-color: #ECECEC;\r\n                            color: #1E1E1E;\r\n                            border: 1px solid #1E1E1E;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    .done-modal-containers{\r\n        @extend .delete-modal-containers;\r\n        .done-info-container{\r\n            @extend .delete-info-container;\r\n            .done-info-header{\r\n                font-weight: bold;\r\n            }\r\n        }\r\n        .done-button-container{\r\n            @extend .delete-button-container;\r\n            .done-btn-style{\r\n               @extend .delete-btn-style;\r\n            }\r\n        }\r\n    }\r\n    .success-modal-containers{\r\n        -webkit-animation-name: openSuccess;\r\n        animation-name: openSuccess;\r\n        -webkit-animation-duration: 0.4s;\r\n        animation-duration: 0.4s;\r\n    \r\n        @keyframes openSuccess {\r\n            from {\r\n                transform: scale(0.5);\r\n            }\r\n    \r\n            to {\r\n                transform: scale(1);\r\n            }\r\n        }\r\n        @extend .delete-modal-containers;\r\n        .success-info-container{\r\n            @extend .delete-info-container;\r\n            .success-info-header{\r\n                font-weight: bold;\r\n            }\r\n        }\r\n        .success-button-container{\r\n            @extend .delete-button-container;\r\n            .success-btn-style{\r\n               @extend .delete-btn-style;\r\n            }\r\n        }\r\n    }\r\n}\r\n.button-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n    #close-input-btn{\r\n        cursor: pointer;\r\n        border-radius: 10px;\r\n        box-shadow: 0 4px 3px 1px #888888;\r\n        width: 120px;\r\n        height: 40px;\r\n        font-size: 1rem;\r\n        font-weight: 300;\r\n        border: none;\r\n        outline: none;\r\n        transition: 250ms ease-in-out;\r\n        box-shadow: 0 4px 3px 1px #888888;\r\n        &:hover{\r\n            color: #ECECEC;\r\n            background-color: #1E1E1E;\r\n        }\r\n        &:active{\r\n            background-color: #ECECEC;\r\n            color: #1E1E1E;\r\n            border: 1px solid #1E1E1E;\r\n        }\r\n    }\r\n}\r\n@media only screen and (max-width: 64em){\r\n    #content{\r\n        padding: 1rem 2rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 55em){\r\n    nav{\r\n        .item-container{\r\n            gap: 5px;\r\n        }\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 45.375em){\r\n    #content{\r\n        padding: 1rem 1.5rem;\r\n    }\r\n    nav{\r\n        .item-container{\r\n            justify-content: center;\r\n            .item-text{\r\n                display: none;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 31.25em){\r\n    body{\r\n        flex-direction: column-reverse;\r\n    }\r\n    #content{\r\n        padding: 1rem;\r\n    }\r\n    nav{\r\n        gap: 4px;\r\n        flex-direction: row;\r\n        height: fit-content;\r\n        align-items: center;\r\n        justify-content: center;\r\n        .item-container{\r\n            padding: 5px;\r\n            justify-content: center;\r\n            .item-text{\r\n                display: none;\r\n            }\r\n            .icon-container{\r\n                font-size: 0.9rem;\r\n            }\r\n        }\r\n    }\r\n    .style-modal{\r\n        .input-modal-container, .edit-modal-container{\r\n            margin: 0.5em;\r\n        }\r\n        .edit-modal-container{\r\n            padding: 1em;\r\n            .edit-info-container{\r\n                font-size: 1rem;\r\n            }\r\n            .edit-form-holder{\r\n                .edit-form{\r\n                    .edit-input-container{\r\n                        .edit-header-holder,.edit-desc-holder,.edit-due-date-holder{\r\n                            label{\r\n                                font-size: 0.8rem;\r\n                            }\r\n                            input, select, textarea{\r\n                                height: 40px;\r\n                            }\r\n                        }\r\n                    }\r\n                    .edit-btn-container{\r\n                        button{\r\n                            font-size: 0.8rem;\r\n                            width: 90px;\r\n                            height: 35px;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        } \r\n        .delete-modal-containers{\r\n            margin: 0.5em;\r\n            .delete-info-container{\r\n                font-size: 0.9rem;\r\n            }\r\n            .delete-button-container{\r\n                .delete-btn-style{\r\n                    font-size: 0.8rem;\r\n                    width: 90px;\r\n                    height: 35px;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/personal.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/personal.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/school.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/school.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".to-do-container {\n  display: flex;\n  flex-direction: column;\n  color: #1E1E1E;\n  margin-bottom: 40px;\n}\n.to-do-container h2 {\n  font-size: 2rem;\n  color: #1E1E1E;\n  animation-name: showHeader;\n  animation-duration: 1.2s;\n}\n@keyframes showHeader {\n  from {\n    margin-left: -50px;\n    opacity: 0;\n  }\n  to {\n    margin-left: 0;\n    opacity: 1;\n  }\n}\n.to-do-container .line {\n  border: 1px solid #1E1E1E;\n  margin-bottom: 8px;\n  animation-name: showHR;\n  animation-duration: 1.2s;\n}\n@keyframes showHR {\n  from {\n    margin-left: -50px;\n    opacity: 0;\n  }\n  to {\n    margin-left: 0;\n    opacity: 1;\n  }\n}\n\n.to-do-holder {\n  background-color: #1E1E1E;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  border-radius: 15px;\n  box-shadow: 0 4px 3px 1px #888888;\n}\n.to-do-holder .no-item-placeholder {\n  font-weight: 300;\n  animation-name: showPlaceholder;\n  animation-duration: 0.4s;\n}\n@keyframes showPlaceholder {\n  from {\n    margin-top: -20px;\n    opacity: 0;\n  }\n  to {\n    margin-top: 0;\n    opacity: 1;\n  }\n}\n\n.to-do-item {\n  display: flex;\n  gap: 12px;\n  background-color: #ECECEC;\n  padding: 15px;\n  border-radius: 15px;\n  animation-name: showItem;\n  animation-duration: 1.2s;\n}\n@keyframes showItem {\n  from {\n    margin-top: -50px;\n    opacity: 0;\n  }\n  to {\n    margin-top: 0;\n    opacity: 1;\n  }\n}\n.to-do-item input {\n  accent-color: #1E1E1E;\n  width: 50px;\n  min-width: 25px;\n  cursor: pointer;\n}\n.to-do-item .to-do-details-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.to-do-item .to-do-details-container .header-and-due-options-container {\n  display: flex;\n  justify-content: space-between;\n}\n.to-do-item .to-do-details-container .header-and-due-options-container .to-do-item-header {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n.to-do-item .to-do-details-container .header-and-due-options-container .due-options-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.to-do-item .to-do-details-container .header-and-due-options-container .due-options-container .due-container {\n  display: flex;\n  gap: 2px;\n  font-weight: 300;\n}\n.to-do-item .to-do-details-container .header-and-due-options-container .due-options-container .options-container {\n  display: flex;\n  gap: 10px;\n}\n.to-do-item .to-do-details-container .header-and-due-options-container .due-options-container .options-container i {\n  cursor: pointer;\n  transition: 250ms ease-in;\n}\n.to-do-item .to-do-details-container .header-and-due-options-container .due-options-container .options-container i:hover {\n  transform: translateY(-2px);\n}\n.to-do-item .to-do-details-container .header-and-due-options-container .due-options-container .options-container .fa-trash:hover {\n  color: rgb(248, 57, 57);\n}\n.to-do-item .to-do-details-container .header-and-due-options-container .due-options-container .options-container .fa-check {\n  display: none;\n}\n\n@media only screen and (max-width: 55em) {\n  .to-do-container h2 {\n    font-size: 1.5rem;\n  }\n  .to-do-container .to-do-holder .header-and-due-options-container .to-do-item-header {\n    font-size: 1rem;\n  }\n  .to-do-container .to-do-holder .header-and-due-options-container .due-options-container {\n    font-size: 0.9rem;\n  }\n  .to-do-container .to-do-holder .to-do-sub-text {\n    font-size: 0.9rem;\n  }\n  .to-do-container .to-do-holder .no-item-placeholder {\n    font-size: 0.9rem;\n  }\n}\n@media only screen and (max-width: 45.375em) {\n  .to-do-container h2 {\n    font-size: 1.5rem;\n  }\n  .to-do-container .to-do-holder .to-do-item .to-do-check-box {\n    width: 30px;\n  }\n  .to-do-container .to-do-holder .header-and-due-options-container {\n    flex-direction: column;\n  }\n  .to-do-container .to-do-holder .header-and-due-options-container .to-do-item-header {\n    font-size: 1rem;\n  }\n  .to-do-container .to-do-holder .header-and-due-options-container .due-options-container {\n    font-size: 0.9rem;\n  }\n  .to-do-container .to-do-holder .to-do-sub-text {\n    font-size: 0.9rem;\n  }\n  .to-do-container .to-do-holder .no-item-placeholder {\n    font-size: 0.8rem;\n  }\n}\n@media only screen and (max-width: 31.25em) {\n  .style-modal .input-modal-container {\n    margin: 0.5em;\n  }\n  .to-do-container h2 {\n    font-size: 1.2rem;\n  }\n  .to-do-container .to-do-holder {\n    padding: 10px;\n  }\n  .to-do-container .to-do-holder .to-do-item {\n    padding: 10px;\n  }\n  .to-do-container .to-do-holder .to-do-item .to-do-check-box {\n    display: none;\n  }\n  .to-do-container .to-do-holder .header-and-due-options-container {\n    flex-direction: column;\n  }\n  .to-do-container .to-do-holder .header-and-due-options-container .to-do-item-header {\n    font-size: 0.9rem;\n  }\n  .to-do-container .to-do-holder .header-and-due-options-container .due-options-container {\n    font-size: 0.8rem;\n    justify-content: space-between;\n  }\n  .to-do-container .to-do-holder .header-and-due-options-container .due-options-container .options-container {\n    gap: 7px;\n  }\n  .to-do-container .to-do-holder .header-and-due-options-container .due-options-container .options-container .fa-check {\n    display: block;\n  }\n  .to-do-container .to-do-holder .to-do-sub-text {\n    font-size: 0.8rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/school.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,cAAA;EACA,mBAAA;AACJ;AAAI;EACI,eAAA;EACA,cAAA;EACA,0BAAA;EACA,wBAAA;AAER;AAAQ;EACI;IACI,kBAAA;IACA,UAAA;EAEd;EACU;IACI,cAAA;IACA,UAAA;EACd;AACF;AAEI;EACI,yBAAA;EACA,kBAAA;EACA,sBAAA;EACA,wBAAA;AAAR;AAEQ;EACI;IACI,kBAAA;IACA,UAAA;EAAd;EAGU;IACI,cAAA;IACA,UAAA;EADd;AACF;;AAKA;EACI,yBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mBAAA;EACA,iCAAA;AAFJ;AAGI;EACI,gBAAA;EACA,+BAAA;EACA,wBAAA;AADR;AAGQ;EACI;IACI,iBAAA;IACA,UAAA;EADd;EAIU;IACI,aAAA;IACA,UAAA;EAFd;AACF;;AAMA;EACI,aAAA;EACA,SAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,wBAAA;EACA,wBAAA;AAHJ;AAKI;EACI;IACI,iBAAA;IACA,UAAA;EAHV;EAMM;IACI,aAAA;IACA,UAAA;EAJV;AACF;AAMI;EACI,qBAAA;EACA,WAAA;EACA,eAAA;EACA,eAAA;AAJR;AAMI;EACI,aAAA;EACA,sBAAA;EACA,WAAA;AAJR;AAKQ;EACI,aAAA;EACA,8BAAA;AAHZ;AAIY;EACI,iBAAA;EACA,iBAAA;AAFhB;AAIY;EACI,aAAA;EACA,mBAAA;EACA,QAAA;AAFhB;AAGgB;EACI,aAAA;EACA,QAAA;EACA,gBAAA;AADpB;AAGgB;EACI,aAAA;EACA,SAAA;AADpB;AAEoB;EACI,eAAA;EACA,yBAAA;AAAxB;AACwB;EACI,2BAAA;AAC5B;AAGwB;EACI,uBAAA;AAD5B;AAIoB;EACI,aAAA;AAFxB;;AAUA;EAEQ;IACI,iBAAA;EARV;EAYc;IACI,eAAA;EAVlB;EAYc;IACI,iBAAA;EAVlB;EAaU;IACI,iBAAA;EAXd;EAaU;IACI,iBAAA;EAXd;AACF;AAgBA;EAEQ;IACI,iBAAA;EAfV;EAmBc;IACI,WAAA;EAjBlB;EAoBU;IACI,sBAAA;EAlBd;EAmBc;IACI,eAAA;EAjBlB;EAmBc;IACI,iBAAA;EAjBlB;EAoBU;IACI,iBAAA;EAlBd;EAoBU;IACI,iBAAA;EAlBd;AACF;AAuBA;EAEQ;IACI,aAAA;EAtBV;EA0BM;IACI,iBAAA;EAxBV;EA0BM;IACI,aAAA;EAxBV;EAyBU;IACI,aAAA;EAvBd;EAwBc;IACI,aAAA;EAtBlB;EAyBU;IACI,sBAAA;EAvBd;EAwBc;IACI,iBAAA;EAtBlB;EAwBc;IACI,iBAAA;IACA,8BAAA;EAtBlB;EAuBkB;IACI,QAAA;EArBtB;EAsBsB;IACI,cAAA;EApB1B;EAyBU;IACI,iBAAA;EAvBd;AACF","sourcesContent":[".to-do-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    color:#1E1E1E;\r\n    margin-bottom: 40px;\r\n    h2{\r\n        font-size: 2rem;\r\n        color: #1E1E1E;\r\n        animation-name: showHeader;\r\n        animation-duration: 1.2s;\r\n    \r\n        @keyframes showHeader {\r\n            from {\r\n                margin-left: -50px;\r\n                opacity: 0;\r\n            }\r\n    \r\n            to {\r\n                margin-left: 0;\r\n                opacity: 1;\r\n            }\r\n        }\r\n    }\r\n    .line{\r\n        border: 1px solid #1E1E1E;\r\n        margin-bottom: 8px;\r\n        animation-name: showHR;\r\n        animation-duration: 1.2s;\r\n    \r\n        @keyframes showHR {\r\n            from {\r\n                margin-left: -50px;\r\n                opacity: 0;\r\n            }\r\n    \r\n            to {\r\n                margin-left: 0;\r\n                opacity: 1;\r\n            }\r\n        }\r\n    }\r\n}\r\n.to-do-holder{\r\n    background-color: #1E1E1E;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n    border-radius: 15px;\r\n    box-shadow: 0 4px 3px 1px #888888;\r\n    .no-item-placeholder{\r\n        font-weight: 300;\r\n        animation-name: showPlaceholder;\r\n        animation-duration: 0.4s;\r\n    \r\n        @keyframes showPlaceholder {\r\n            from {\r\n                margin-top: -20px;\r\n                opacity: 0;\r\n            }\r\n    \r\n            to {\r\n                margin-top: 0;\r\n                opacity: 1;\r\n            }\r\n        }\r\n    }\r\n}\r\n.to-do-item{\r\n    display: flex;\r\n    gap: 12px;\r\n    background-color: #ECECEC;\r\n    padding: 15px;\r\n    border-radius: 15px;\r\n    animation-name: showItem;\r\n    animation-duration: 1.2s;\r\n\r\n    @keyframes showItem {\r\n        from {\r\n            margin-top: -50px;\r\n            opacity: 0;\r\n        }\r\n\r\n        to {\r\n            margin-top: 0;\r\n            opacity: 1;\r\n        }\r\n    }\r\n    input{\r\n        accent-color: #1E1E1E;\r\n        width: 50px;\r\n        min-width: 25px;\r\n        cursor: pointer;\r\n    }\r\n    .to-do-details-container{\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        .header-and-due-options-container{\r\n            display: flex;\r\n            justify-content: space-between;\r\n            .to-do-item-header{\r\n                font-weight: bold;\r\n                font-size: 1.2rem;\r\n            }\r\n            .due-options-container{\r\n                display: flex;\r\n                align-items: center;\r\n                gap: 8px;\r\n                .due-container{\r\n                    display: flex;\r\n                    gap: 2px;\r\n                    font-weight: 300;\r\n                }\r\n                .options-container{\r\n                    display: flex;\r\n                    gap: 10px;\r\n                    i{\r\n                        cursor: pointer;\r\n                        transition: 250ms ease-in;\r\n                        &:hover{\r\n                            transform: translateY(-2px);\r\n                        }\r\n                    }\r\n                    .fa-trash{\r\n                        &:hover{\r\n                            color:rgb(248, 57, 57);\r\n                        }\r\n                    }\r\n                    .fa-check{\r\n                        display: none;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 55em){\r\n    .to-do-container{\r\n        h2{\r\n            font-size: 1.5rem;\r\n        }\r\n        .to-do-holder{\r\n            .header-and-due-options-container{\r\n                .to-do-item-header{\r\n                    font-size: 1rem;\r\n                }\r\n                .due-options-container{\r\n                    font-size: 0.9rem;\r\n                }\r\n            }\r\n            .to-do-sub-text{\r\n                font-size: 0.9rem;\r\n            }\r\n            .no-item-placeholder{\r\n                font-size: 0.9rem;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 45.375em){\r\n    .to-do-container{\r\n        h2{\r\n            font-size: 1.5rem;\r\n        }\r\n        .to-do-holder{\r\n            .to-do-item{\r\n                .to-do-check-box{\r\n                    width: 30px;\r\n                }\r\n            }\r\n            .header-and-due-options-container{\r\n                flex-direction: column;\r\n                .to-do-item-header{\r\n                    font-size: 1rem;\r\n                }\r\n                .due-options-container{\r\n                    font-size: 0.9rem;\r\n                }\r\n            }\r\n            .to-do-sub-text{\r\n                font-size: 0.9rem;\r\n            }\r\n            .no-item-placeholder{\r\n                font-size: 0.8rem;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 31.25em){\r\n    .style-modal{\r\n        .input-modal-container{\r\n            margin: 0.5em;\r\n        }\r\n    }\r\n    .to-do-container{\r\n        h2{\r\n            font-size: 1.2rem;\r\n        }\r\n        .to-do-holder{\r\n            padding: 10px;\r\n            .to-do-item{\r\n                padding: 10px;\r\n                .to-do-check-box{\r\n                    display: none;\r\n                }\r\n            }\r\n            .header-and-due-options-container{\r\n                flex-direction: column;\r\n                .to-do-item-header{\r\n                    font-size: 0.9rem;\r\n                }\r\n                .due-options-container{\r\n                    font-size: 0.8rem;\r\n                    justify-content: space-between;\r\n                    .options-container{\r\n                        gap: 7px;\r\n                        .fa-check{\r\n                            display: block;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            .to-do-sub-text{\r\n                font-size: 0.8rem;\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/work.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/work.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/all.scss":
/*!*****************************!*\
  !*** ./src/styles/all.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_all_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./all.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/all.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_all_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_all_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_all_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_all_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/home.scss":
/*!******************************!*\
  !*** ./src/styles/home.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/personal.scss":
/*!**********************************!*\
  !*** ./src/styles/personal.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_personal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./personal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/personal.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_personal_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_personal_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_personal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_personal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/school.scss":
/*!********************************!*\
  !*** ./src/styles/school.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_school_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./school.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/school.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_school_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_school_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_school_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_school_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/work.scss":
/*!******************************!*\
  !*** ./src/styles/work.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_work_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./work.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/work.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_work_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_work_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_work_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_work_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _scripts_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/home */ "./src/scripts/home.js");
/* harmony import */ var _scripts_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/all */ "./src/scripts/all.js");
/* harmony import */ var _scripts_arrayofobjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/arrayofobjects */ "./src/scripts/arrayofobjects.js");
/* harmony import */ var _scripts_retrieveObjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/retrieveObjects */ "./src/scripts/retrieveObjects.js");
/* harmony import */ var _scripts_school__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/school */ "./src/scripts/school.js");
/* harmony import */ var _scripts_work__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/work */ "./src/scripts/work.js");
/* harmony import */ var _scripts_personal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/personal */ "./src/scripts/personal.js");
/* harmony import */ var _scripts_archive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/archive */ "./src/scripts/archive.js");
/* harmony import */ var _scripts_ToDoClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/ToDoClass */ "./src/scripts/ToDoClass.js");










var homeNav = document.getElementById('home');
var allNav = document.getElementById('all');
var schoolNav = document.getElementById('school');
var workNav = document.getElementById('work');
var personalNav = document.getElementById('personal');
var archiveNav = document.getElementById('archive');
var content = document.getElementById('content');
content.appendChild((0,_scripts_home__WEBPACK_IMPORTED_MODULE_1__["default"])(content));

//default
homeNav.style.backgroundColor = "#0F0F0F";
// changing the selected nav's background
homeNav.addEventListener('click', function () {
  clearOutContainer(content);
  content.appendChild((0,_scripts_home__WEBPACK_IMPORTED_MODULE_1__["default"])(content));
  homeNav.style.backgroundColor = "#0F0F0F";
  allNav.style.backgroundColor = "#1F1F1F";
  schoolNav.style.backgroundColor = "#1F1F1F";
  workNav.style.backgroundColor = "#1F1F1F";
  personalNav.style.backgroundColor = "#1F1F1F";
});
allNav.addEventListener('click', function () {
  (0,_scripts_retrieveObjects__WEBPACK_IMPORTED_MODULE_4__.retrieveAll)();
  clearOutContainer(content);
  content.appendChild((0,_scripts_all__WEBPACK_IMPORTED_MODULE_2__["default"])());
  content.appendChild((0,_scripts_school__WEBPACK_IMPORTED_MODULE_5__.createSchoolToDo)());
  content.appendChild((0,_scripts_work__WEBPACK_IMPORTED_MODULE_6__.createWorkToDo)());
  content.appendChild((0,_scripts_personal__WEBPACK_IMPORTED_MODULE_7__.createPersonalToDo)());
  for (var i = 1; i < content.childElementCount; i++) {
    if (i === 1) {
      content.children[i].appendChild((0,_scripts_school__WEBPACK_IMPORTED_MODULE_5__.schoolItemHolder)());
    } else if (i === 2) {
      content.children[i].appendChild((0,_scripts_work__WEBPACK_IMPORTED_MODULE_6__.workItemHolder)());
    } else if (i === 3) {
      content.children[i].appendChild((0,_scripts_personal__WEBPACK_IMPORTED_MODULE_7__.personalItemHolder)());
    }
  }
  homeNav.style.backgroundColor = "#1F1F1F";
  allNav.style.backgroundColor = "#0F0F0F";
  schoolNav.style.backgroundColor = "#1F1F1F";
  workNav.style.backgroundColor = "#1F1F1F";
  personalNav.style.backgroundColor = "#1F1F1F";
  archiveNav.style.backgroundColor = "#1F1F1F";
});
schoolNav.addEventListener('click', function () {
  (0,_scripts_retrieveObjects__WEBPACK_IMPORTED_MODULE_4__.retrieveSchool)();
  clearOutContainer(content);
  content.appendChild((0,_scripts_school__WEBPACK_IMPORTED_MODULE_5__["default"])(content));
  content.appendChild((0,_scripts_school__WEBPACK_IMPORTED_MODULE_5__.createSchoolToDo)());
  content.lastChild.appendChild((0,_scripts_school__WEBPACK_IMPORTED_MODULE_5__.schoolItemHolder)());
  homeNav.style.backgroundColor = "#1F1F1F";
  allNav.style.backgroundColor = "#1F1F1F";
  schoolNav.style.backgroundColor = "#0F0F0F";
  workNav.style.backgroundColor = "#1F1F1F";
  personalNav.style.backgroundColor = "#1F1F1F";
  archiveNav.style.backgroundColor = "#1F1F1F";
});
workNav.addEventListener('click', function () {
  (0,_scripts_retrieveObjects__WEBPACK_IMPORTED_MODULE_4__.retrieveWork)();
  clearOutContainer(content);
  content.appendChild((0,_scripts_work__WEBPACK_IMPORTED_MODULE_6__["default"])(content));
  content.appendChild((0,_scripts_work__WEBPACK_IMPORTED_MODULE_6__.createWorkToDo)());
  content.lastChild.appendChild((0,_scripts_work__WEBPACK_IMPORTED_MODULE_6__.workItemHolder)());
  homeNav.style.backgroundColor = "#1F1F1F";
  allNav.style.backgroundColor = "#1F1F1F";
  schoolNav.style.backgroundColor = "#1F1F1F";
  workNav.style.backgroundColor = "#0F0F0F";
  personalNav.style.backgroundColor = "#1F1F1F";
  archiveNav.style.backgroundColor = "#1F1F1F";
});
personalNav.addEventListener('click', function () {
  (0,_scripts_retrieveObjects__WEBPACK_IMPORTED_MODULE_4__.retrievePersonal)();
  clearOutContainer(content);
  content.appendChild((0,_scripts_personal__WEBPACK_IMPORTED_MODULE_7__["default"])(content));
  content.appendChild((0,_scripts_personal__WEBPACK_IMPORTED_MODULE_7__.createPersonalToDo)());
  content.lastChild.appendChild((0,_scripts_personal__WEBPACK_IMPORTED_MODULE_7__.personalItemHolder)());
  homeNav.style.backgroundColor = "#1F1F1F";
  allNav.style.backgroundColor = "#1F1F1F";
  schoolNav.style.backgroundColor = "#1F1F1F";
  workNav.style.backgroundColor = "#1F1F1F";
  personalNav.style.backgroundColor = "#0F0F0F";
  archiveNav.style.backgroundColor = "#1F1F1F";
});
archiveNav.addEventListener('click', function () {
  (0,_scripts_retrieveObjects__WEBPACK_IMPORTED_MODULE_4__.retrieveArchive)();
  clearOutContainer(content);
  content.appendChild((0,_scripts_archive__WEBPACK_IMPORTED_MODULE_8__["default"])(content));
  content.appendChild((0,_scripts_archive__WEBPACK_IMPORTED_MODULE_8__.createDone)());
  content.lastChild.appendChild((0,_scripts_archive__WEBPACK_IMPORTED_MODULE_8__.createHolder)());
  homeNav.style.backgroundColor = "#1F1F1F";
  allNav.style.backgroundColor = "#1F1F1F";
  schoolNav.style.backgroundColor = "#1F1F1F";
  workNav.style.backgroundColor = "#1F1F1F";
  personalNav.style.backgroundColor = "#1F1F1F";
  archiveNav.style.backgroundColor = "#0F0F0F";
});
function clearOutContainer(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=bundle63153e31c32dbbe9a856.js.map