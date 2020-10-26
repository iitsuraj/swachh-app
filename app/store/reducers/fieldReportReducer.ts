import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

const initialState = {
  fieldReports: [],
  serverReports: [],
};

// const dmyfield = {
//   id: '',
//   selfie: [],
//   attendance: {
//     entrylocation: { type: 'Point', coordinates: [] },
//     exitlocation: { type: 'Point', coordinates: [] },
//   },
//   fieldReport: {
//     images: [],
//     poc: [
//       {
//         name: '',
//         number: '',
//         email: '',
//       },
//     ],
//     uos: 0, // 0,1,2
//     uosdetail: '',
//     nous: 0, // 0,1,2
//     nousdetail: '',
//     etpos: 0, // 0,1,2
//     cpc: '',
//     ipc: '',
//     ppopd: '',
//     fwwpdbofm: '',
//     ocs: 0, // 0,1
//     sonfc: 0, // 0,1
//     mrr: 0, // 0,1,2
//     mrrname: '',
//     csac: 0, // 0,1,2,3
//     wc: 0, // 0,1,2,3
//     hc: 0, // 0,1,2,3
//     cc: 0, // 0,1,2,3
//     sfwc: 0, // 0,1,2,3
//     sfwcdetail: '',
//     fib: 0, // 0,1,2,3
//     fibdetail: '',
//     fietpinlet: 0, // 0,1,2,3
//     fietpinletdetail: '',
//     fietpoutlent: 0, // 0,1,2,3
//     fietpoutlentdetail: '',
//     fmetpoutletpdf: '',
//     os: 0, // 0,1,2,3
//     osdetail: '',
//     semfetp: 0, //0,1
//     semfer: '',
//   },
//   sos: 0, // 0,1,2
//   sosdetails: '',
// };

// export const fieldReportReducer = createReducer(initialState, {
//   [types.SAVE_SELFIE](state, action) {
//     const { uri, id } = action;
//     // let myFieldIndex = state.fieldReports.
//     let myFieldIndex = [].findIndex((e) => e.id === id);
//     let myField = [].splice(myFieldIndex, 1);
//     // make changes
//     let fieldReports = state.fieldReports.push(myField);
//     return {
//       ...state,
//       fieldReports,
//     };
//   },
//   [types.MARK_ENTRY](state, action) {
//     const { coordinates, id } = action;
//     // let myFieldIndex = state.fieldReports.
//     let myFieldIndex = [].findIndex((e) => e.id === id);
//     let myField = [].splice(myFieldIndex, 1);
//     // make changes
//     let fieldReports = state.fieldReports.push(myField);
//     return {
//       ...state,
//       fieldReports,
//     };
//   },
//   [types.MARK_EXIT](state, action) {
//     const { coordinates, id, images } = action;
//     // let myFieldIndex = state.fieldReports.
//     let myFieldIndex = [].findIndex((e) => e.id === id);
//     let myField = [].splice(myFieldIndex, 1);
//     // make changes
//     let fieldReports = state.fieldReports.push(myField);
//     return {
//       ...state,
//       fieldReports,
//     };
//   },
//   [types.SAVE_FIELD_DATA](state, action) {
//     const { data, id } = action;
//     let myFieldIndex = [].findIndex((e) => e.id === id);
//     let myField = [].splice(myFieldIndex, 1);
//     // make changes
//     let fieldReports = state.fieldReports.push(myField);
//     return {
//       ...state,
//       fieldReports,
//     };
//   },
//   [types.MAKE_SOS_REQUEST](state, action) {
//     const { data, id } = action;
//     const { data, id } = action;
//     let myFieldIndex = [].findIndex((e) => e.id === id);
//     let myField = [].splice(myFieldIndex, 1);
//     // make changes
//     let fieldReports = state.fieldReports.push(myField);
//     return {
//       ...state,
//       fieldReports,
//     };
//   },
// });

/**
 * 1.
 * 2.
 * 3.
 * 4.
 */

export const fieldReportReducer = createReducer(initialState, {
  [types.SAVE_LOCAL_FIELD](state: any, action: any) {
    let myFieldIndex = state.fieldReports.findIndex(
      (e) => e.id === action.data.id,
    );
    if (myFieldIndex > -1) {
      let myField = state.fieldReports.splice(myFieldIndex, 1);
      // make changes
      let fieldReports = state.fieldReports.push(action.data);
    } else {
      let fieldReports = state.fieldReports.push(action.data);
    }
    return {
      ...state,
    };
  },
  [types.SUBMIT_TO_SERVER](state: any, action: any) {
    let myFieldIndex = state.serverReports.findIndex(
      (e) => e.id === action.data.id,
    );
    if (myFieldIndex > -1) {
      let myField = state.serverReports.splice(myFieldIndex, 1);
      // make changes
      let fieldReports = state.serverReports.push(action.data);
    } else {
      let fieldReports = state.serverReports.push(action.data);
    }
    return {
      ...state,
    };
  },
  [types.FIELD_REPORT_REMOVE_BY_ID](state: any, action: any) {
    let myFieldIndex = state.fieldReports.findIndex((e) => e.id === action.id);
    if (myFieldIndex > -1) {
      let myField = state.fieldReports.splice(myFieldIndex, 1);
    }
    return {
      ...state,
    };
  },
  [types.SERVER_REPORT_REMOVE_BY_ID](state: any, action: any) {
    let myFieldIndex = state.serverReports.findIndex((e) => e.id === action.id);
    if (myFieldIndex > -1) {
      let myField = state.serverReports.splice(myFieldIndex, 1);
    }
    return {
      ...state,
    };
  },
});
