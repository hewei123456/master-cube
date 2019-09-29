import {post, get} from '.'


/*---- 专业检索 ----*/
const majorClassListApi = `/major/getMajorClassList`;
const majorSubjectListApi = `/major/getMajorSubjectList`;
const majorLibraryListApi = `/major/getMajorLibraryList`;
const CollegeByMajorCodeApi = `/collegeMajor/getByCode`;
const majorInfoByIdApi = `/major/getMajorInfoById`;

export const fetchMajorClassList = (type, status) => (post(majorClassListApi, {type, status}));
export const fetchMajorSubjectList = (class_id, type) => (post(majorSubjectListApi, class_id ? {class_id} : {type}));
export const fetchMajorLibList = (subject_id, self_cid, status) => (post(majorLibraryListApi, {
  subject_id, self_cid, status
}));
export const fetchCollegeByMajorCode = code => (get(CollegeByMajorCodeApi, {code}));
export const fetchMajorInfoById = id => (get(majorInfoByIdApi, {id}));


/*---- 院校检索 ----*/
const collegeListApi = `/college/getByCondition`;
const collegeListOrderApi = `/college/getAllByPage`;
const collegeInfoApi = `/college/query/`;

export const fetchCollegeList = (name, provinceIdList, yxtypeList, attachList, propertyList, suitableList, pageNo, pageSize = 200) => (post(collegeListApi, {
  name, provinceIdList, yxtypeList, attachList, propertyList, suitableList, pageNo, pageSize
}));
export const fetchCollegeOrderList = (name, pageNo, pageSize = 200) => (get(collegeListOrderApi, {
  name, pageNo, pageSize
}));
export const fetchCollegeInfo = id => (get(collegeInfoApi + id, {}));

/*---- 院系检索 ----*/
const departmentListApi = `/school/query`;
export const fetchDepartmentList = cid => (get(departmentListApi, {cid}));


/*---- 院校专业检索 ----*/
const collegeMajorListApi = `/collegeMajor/query`;

export const fetchCollegeMajorList = (cid, sid) => (post(collegeMajorListApi, {cid, sid}));
export const fetchCollegeMajorInfo = id => (post(collegeMajorListApi, {id}));


/*---- 初试信息检索 ----*/
const firstListApi = `/firstExam/query`;
export const fetchFirstList = majorId => (post(firstListApi, {majorId}));

/*---- 复试信息检索 ----*/
const SecondListApi = `/reExam/query`;
export const fetchSecondList = majorId => (post(SecondListApi, {majorId}));

/*---- 研究方向检索 ----*/
const directionListApi = `/research/getResearchInfo`;
export const fetchDirectionList = majorId => (get(directionListApi, {majorId}));

/*---- 获取导师列表 ----*/
const teacherListApi = `/teacher/getTeacherListByMajorId`;
export const fetchTeacherList = major_id => (post(teacherListApi, {major_id}));

